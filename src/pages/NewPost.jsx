import PostForm from "../components/PostForm";
import Modal from "../components/UI/Modal";

import { redirect } from "react-router-dom";

function NewPostPage() {
  return <PostForm method="POST" />;
}

export default NewPostPage;

export async function action({ request, params }) {
  const data = await request.formData();

  const postData = {
    author: data.get("author"),
    body: data.get("body"),
  };

  const url =
    "https://prime-blog1-default-rtdb.europe-west1.firebasedatabase.app/posts.json/";

  const response = await fetch(url, {
    method: request.method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  });

  if (!response.ok) {
    return redirect("/weweew");
  }

  return redirect("/posts");
}
