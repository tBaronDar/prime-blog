import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import styles from "./Modal.module.css";

function Modal(props) {
  const portal = document.getElementById("overlays");
  const navigate = useNavigate();

  function onClose() {
    navigate("..");
  }

  return (
    <>
      {createPortal(
        <>
          <div className={styles.backdrop} onClick={onClose} />
          <div className={styles.container}>{props.children}</div>
        </>,
        portal
      )}
    </>
  );
}

export default Modal;
