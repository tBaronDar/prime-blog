import { Form, useNavigate, redirect } from "react-router-dom";
import backArrow from "../assets/back-arrow.svg";
import checkmark from "../assets/checkmark.svg";

import styles from "./PostForm.module.css";

function PostForm(props) {
  const navigate = useNavigate();

  function onCancel() {
    navigate("/posts");
  }

  return (
    <dialog open className={styles.modal}>
      <Form method={props.method}>
        <div>
          <label htmlFor="body" className={styles.labels}>
            Your thoughts
          </label>
        </div>
        <div>
          <textarea
            required
            rows="15"
            name="body"
            id="body"
            defaultValue={props?.body || ""}
            className={styles.inputs}
          />
        </div>
        <label htmlFor="author" className={styles.labels}>
          by:
        </label>
        <div>
          <input
            required
            type="text"
            name="author"
            id="author"
            defaultValue={props?.author || ""}
            className={styles.inputs}
          />
        </div>
        <div className={styles.actions}>
          <button onClick={onCancel} type="cancel" className={styles.buttons}>
            <img src={backArrow} alt="backArrow" />
          </button>
          <button type="submit" className={styles.buttons}>
            <img src={checkmark} alt="checkmark" />
          </button>
        </div>
      </Form>
    </dialog>
  );
}

export default PostForm;

//Post and patch action
export async function action({ request, params }) {
  const id = params.postId;
  const data = await request.formData();

  const postData = {
    author: data.get("author"),
    body: data.get("body"),
  };
  const currentId = id ? id : "";

  const url =
    "https://prime-blog1-default-rtdb.europe-west1.firebasedatabase.app/posts/" +
    currentId +
    ".json/";

  const response = await fetch(url, {
    method: request.method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  });
  console.log("dasdadasdadass");

  if (!response.ok) {
    console.log(response.status);
    return redirect("/weweew");
  }

  return redirect("/posts");
}
