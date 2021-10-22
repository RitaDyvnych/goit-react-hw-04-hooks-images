import style from "./styles.module.css";
import PropTypes from "prop-types";

export default function ImageGalleryItem({imgArray, onGalleryImageClick}) {
  return imgArray.map((el) => (
      <li className={style.ImageGalleryItem} key={el.id}>
        <img
          src={el.webformatURL}
          alt={el.tags}
          className={style.ImageGalleryItem__image}
          onClick={onGalleryImageClick}
        />
      </li>
    ));
}

ImageGalleryItem.propTypes = {
  imgArray: PropTypes.array.isRequired,
  onGalleryImageClick: PropTypes.func.isRequired,
};
