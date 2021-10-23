import { useState, useEffect } from "react";
import style from "./styles.module.css";
import ImageGalleryItem from "./ImageGalleryItem";
import Searchbar from "./Searchbar";
import ImagesApiService from "../apiService/ApiService";
import Loader from "react-loader-spinner";
import Modal from "./Modal";

export default function ImageGallery() {
  const [imgArray, setImgArray] = useState([]);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState("idle");
  const [showModal, setShowModal] = useState(false);
  const [bigImg, setBigImg] = useState(null);
  const [searchImg, setSearchImg] = useState("");

  useEffect(() => {
    if(searchImg === ''){return;}
    setStatus("pending");
    ImagesApiService(searchImg,page)
        .then((data) => {
          if (data.hits.length > 0) {
            setImgArray(data.hits);
            setStatus("success");
          }
          else {
            setStatus("error");
          }
        })
        .catch((error) => {
          setStatus("error");
        });
  }, [searchImg]);

  useEffect(() => {
    if(page === 1){return;}
    ImagesApiService(searchImg,page)
        .then((data) => {
            if (data.hits.length > 0) {
            setImgArray((prev) => [...prev, ...data.hits]);
            setStatus("success");
            onPageScroll();
          }
          else {
            setStatus("error");
          }
        })
        .catch((error) => {
          setStatus("error");
        });
  }, [page]);

  const onPageScroll = () => {
    window.scrollTo({
      top: document.documentElement.offsetHeight,
      behavior: "smooth",
    });
  };

  const onGalleryImageClick = (e) => {
    e.preventDefault();
    let imgSrc = e.target.src;
    setBigImg(imgArray.find((el) => el.webformatURL === imgSrc));
    setShowModal(!showModal);
  };

  return <>
    <Searchbar onSubmit={(data) => { setSearchImg(data); setPage(1); }}/>
    {(status === "idle") && <p className={style.text}>Hello! Type some searching query</p>}
    {(status === "pending")&& <Loader
          type="Circles"
          className={style.loading}
          color="#00BFFF"
          height={100}
          width={100}
          timeout={7000} //3 secs
    />}
    {(status === "success") &&
      <>
          <ul className={style.ImageGallery}>
            <ImageGalleryItem
              imgArray={imgArray}
              onGalleryImageClick={onGalleryImageClick}
            />
          </ul>
          <button
            type="button"
            onClick={() => setPage((prev) => prev + 1)}
            className={style.Button}>
            Load more
          </button>
          {showModal && (
            <Modal toggleModal={() => { setShowModal(!showModal) }} bigImg={bigImg}></Modal>
          )}
      </>}
    {(status === "error")&& <p className={style.text}>Ooops! Something went wrong</p>}
    </>
}