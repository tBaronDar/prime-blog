import { Form, useNavigate, redirect } from "react-router-dom";

import styles from "./NewPostForm.module.css";
import Card from "./UI/Card";

function NewPostForm(props) {
  const navigate = useNavigate();
  function onCancel() {
    navigate("..");
  }

  return (
    <Card>
      <Form method="POST">
        <div>
          <label htmlFor="body">Your thoughts</label>
        </div>
        <div>
          <textarea rows="20" name="body" id="body" />
        </div>
        <div>
          <label htmlFor="author">by...</label>
          <input type="text" name="author" id="author" />
        </div>
        <div>
          <button onClick={onCancel}>Cancel</button>
          <button type="submit">Post</button>
        </div>
      </Form>
    </Card>
  );
}

export default NewPostForm;

export async function action({ request, params }) {
  const data = await request.formData();

  const postData = {
    author: data.get("author"),
    body: data.get("body"),
    id: Math.floor(Math.random() * 100000),
  };

  const response = await fetch(
    "https://prime-blog1-default-rtdb.europe-west1.firebasedatabase.app/posts.json/",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postData),
    }
  );
  console.log(response.status);

  if (!response.ok) {
    console.log(response.status);
    return redirect("/weweew");
  }

  return redirect("/posts");
}
