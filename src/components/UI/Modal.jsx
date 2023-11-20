import { createPortal } from "react-dom";
import styles from "./Modal.module.css";

function Backdrop() {
  return <div className={styles.backdrop} />;
}

function Content(props) {
  return <dialog className={styles.modal}>{props.children}</dialog>;
}

function Modal(props) {
  const portal = document.getElementById("overlays");
  return (
    <>
      {createPortal(<Backdrop />, portal)}
      {createPortal(<Content>{props.children}</Content>, portal)}
    </>
  );
}

export default Modal;
