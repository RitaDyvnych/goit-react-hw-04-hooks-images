import { Component } from "react";
import style from "./styles.module.css";
import ImageGalleryItem from "./ImageGalleryItem";
import PropTypes from "prop-types";
import ImagesApiService from "../apiService/ApiService";
import Loader from "react-loader-spinner";
import Modal from "./Modal";

const newImagesApiService = new ImagesApiService();

export default class ImageGallery extends Component {
  state = {
    imgArray: [],
    page: 1,
    status: "idle",
    showModal: false,
    bigImg: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchImg !== this.props.searchImg) {
      this.setState({ status: "pending" });
      newImagesApiService.resetPage();
      newImagesApiService.query = this.props.searchImg;
      newImagesApiService
        .searchImages()
        .then((data) => {
          if (data.hits.length > 0) {
            this.setState({
              imgArray: data.hits,
              page: newImagesApiService.pages,
              status: "success",
            });
          } else {
            this.setState({ status: "error" });
          }
        })
        .catch((error) => {
          // console.log(error);
          this.setState({ status: "error" });
        });
    }
  }

  handleClick = () => {
    newImagesApiService.pages = 1;
    newImagesApiService
      .searchImages()
      .then((data) => {
        this.setState((prev) => ({
          imgArray: [...prev.imgArray, ...data.hits],
          page: newImagesApiService.pages,
          status: "success",
        }));
        this.props.scroll();
      })
      .catch((error) => {
        this.setState({ status: "error" });
      });
  };

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  onGalleryImageClick = (e) => {
    e.preventDefault();
    let imgSrc = e.target.src;
    this.setState({
      bigImg: this.state.imgArray.find((el) => el.webformatURL === imgSrc),
    });
    this.toggleModal();
  };

  render() {
    const { imgArray, showModal, status, bigImg } = this.state;

    if (status === "idle") {
      return <p className={style.text}>Hello! Type some searching query</p>;
    }
    if (status === "pending") {
      return (
        <Loader
          type="Circles"
          className={style.loading}
          color="#00BFFF"
          height={100}
          width={100}
          timeout={7000} //3 secs
        />
      );
    }
    if (status === "success") {
      return (
        <>
          <ul className={style.ImageGallery}>
            <ImageGalleryItem
              imgArray={imgArray}
              onGalleryImageClick={this.onGalleryImageClick}
            />
          </ul>
          <button
            type="button"
            onClick={this.handleClick}
            className={style.Button}
          >
            Load more
          </button>
          {showModal && (
            <Modal toggleModal={this.toggleModal} bigImg={bigImg}></Modal>
          )}
        </>
      );
    }
    if (status === "error") {
      return <p className={style.text}>Ooops! Something went wrong</p>;
    }
  }
}

ImageGallery.propTypes = {
  searchImg: PropTypes.string.isRequired,
  scroll: PropTypes.func.isRequired,
};
