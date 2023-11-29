import { Link, useSubmit } from "react-router-dom";
import Card from "./UI/Card";
import { backArrowSmall, deleteBin, pencil } from "../assets/svg-icons";

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
    <Card>
      <div>
        <label htmlFor="body">Your thoughts</label>
        <p>{body}</p>
      </div>
      <div>
        <label htmlFor="author">by...</label>
        <p>{author}</p>
      </div>
      <ul className={styles.actionsList}>
        <li>
          <Link to="/posts">{backArrowSmall}</Link>
        </li>
        <li>
          <Link to="edit">{pencil}</Link>
        </li>
        <li>
          <button type="delete" onClick={startDeleting}>
            {deleteBin}
          </button>
        </li>
      </ul>
    </Card>
  );
}

export default ViewPostDetails;
