import React, { Component } from "react";
import { createPortal } from "react-dom";
import s from "./Modal.module.scss";

const modalRoot = document.querySelector("#modal-root");

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };

  handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className={s.Overlay} onClick={this.handleBackdropClick}>
        <div className={s.Modal}>
          <img src={this.props.selectImage} alt="" />
        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
