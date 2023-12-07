import { Link, useSubmit } from "react-router-dom";
import backArrow from "../assets/back-arrow.svg";
import pencil from "../assets/pencil-icon.svg";
import deleteBin from "../assets/recycle-bin.svg";

import styles from "./ViewPostDetails.module.css";

function ViewPostDetails({ body, author, id }) {
  const submit = useSubmit();

  function startDeleting() {
    const confirmDelete = window.confirm("Are you sure you want to delete?");
    if (confirmDelete) {
      submit(null, { method: "DELETE" });
    }
  }
  return (
    <dialog open className={styles.container}>
      <div className={styles.body}>
        <label htmlFor="body">Your thoughts</label>
        <p>{body}</p>
      </div>

      <div className={styles.author}>
        <label htmlFor="author">by...</label>
        <h3>{author}</h3>
      </div>

      <div className={styles.actions}>
        <Link to="/posts">
          <img src={backArrow} alt="back" />
        </Link>

        <Link to="edit">
          <img src={pencil} alt="edit" />
        </Link>

        <button type="delete" onClick={startDeleting}>
          <img src={deleteBin} alt="bin" />
        </button>
      </div>
    </dialog>
  );
}

export default ViewPostDetails;
