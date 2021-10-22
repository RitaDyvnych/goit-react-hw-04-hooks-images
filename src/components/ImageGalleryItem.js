import React, { Component } from "react";
import style from "./styles.module.css";
import PropTypes from "prop-types";

export default class ImageGalleryItem extends Component {
  render() {
    return this.props.imgArray.map((el) => (
      <li className={style.ImageGalleryItem} key={el.id}>
        <img
          src={el.webformatURL}
          alt={el.tags}
          className={style.ImageGalleryItem__image}
          onClick={this.props.onGalleryImageClick}
        />
      </li>
    ));
  }
}

ImageGalleryItem.propTypes = {
  imgArray: PropTypes.array.isRequired,
  onGalleryImageClick: PropTypes.func.isRequired,
};
