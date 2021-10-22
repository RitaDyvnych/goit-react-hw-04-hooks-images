import { useEffect } from "react";
import style from "./styles.module.css";
import PropTypes from "prop-types";

export default function Modal({ toggleModal, bigImg }) {
  useEffect(() => {
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  });

  const handleEscape = (e) => {
    if (e.code === "Escape") {
      toggleModal();
    }
  };
  const handleClose = (e) => {
    if (e.currentTarget === e.target) {
      toggleModal();
    }
  };

  return (
      <div className={style.Overlay} onClick={handleClose}>
        <div className={style.Modal}>
          <img
            src={bigImg.largeImageURL}
            alt={bigImg.tags}
          />
        </div>
      </div>
    );
}

Modal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  bigImg: PropTypes.object.isRequired,
};
