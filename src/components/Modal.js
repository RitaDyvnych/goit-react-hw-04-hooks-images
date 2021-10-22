import { Component } from "react";
import style from "./styles.module.css";
import PropTypes from "prop-types";

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleEscape);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleEscape);
  }
  handleEscape = (e) => {
    if (e.code === "Escape") {
      this.props.toggleModal();
    }
  };
  handleClose = (e) => {
    if (e.currentTarget === e.target) {
      this.props.toggleModal();
    }
  };
  render() {
    return (
      <div className={style.Overlay} onClick={this.handleClose}>
        <div className={style.Modal}>
          <img
            src={this.props.bigImg.largeImageURL}
            alt={this.props.bigImg.tags}
          />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  bigImg: PropTypes.object.isRequired,
};
