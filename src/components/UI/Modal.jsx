import { useNavigate } from "react-router-dom";
import styles from "./Modal.module.css";

function Modal(props) {
  const navigate = useNavigate();

  function onClose() {
    navigate("/posts");
  }

  return (
    <>
      <div className={styles.backdrop} onClick={onClose} />
      <dialog>
        <div className={styles.container}>{props.children}</div>
      </dialog>
    </>
  );
}

export default Modal;
