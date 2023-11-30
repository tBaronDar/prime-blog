import { Form, useNavigate, redirect } from "react-router-dom";

import styles from "./PostForm.module.css";
import Card from "./UI/Card";
import { checkmark, backArrowSmall } from "../assets/svg-icons";

function PostForm(props) {
  const navigate = useNavigate();

  function onCancel() {
    navigate("/posts");
  }

  return (
    <Card>
      <Form method={props.method}>
        <div>
          <label htmlFor="body">Your thoughts</label>
        </div>
        <div>
          <textarea
            required
            rows="20"
            name="body"
            id="body"
            defaultValue={props?.body || ""}
            className={styles.inputs}
          />
        </div>
        <label htmlFor="author">by:</label>
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
        <div>
          <button onClick={onCancel} type="cancel" className={styles.actions}>
            {backArrowSmall}
          </button>
          <button type="submit" className={styles.actions}>
            {checkmark}
          </button>
        </div>
      </Form>
    </Card>
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
