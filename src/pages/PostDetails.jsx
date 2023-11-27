import PostForm from "../components/PostForm";
import Modal from "../components/UI/Modal";

import { useLoaderData, useParams } from "react-router-dom";

function PostDetailsPage() {
  const data = useLoaderData();
  const params = useParams();

  return (
    <Modal>
      <PostForm
        method="PATCH"
        author={data.author}
        body={data.body}
        id={params.postId}
      />
    </Modal>
  );
}

export default PostDetailsPage;

export async function loader({ params }) {
  const id = params.postId;

  const url =
    "https://prime-blog1-default-rtdb.europe-west1.firebasedatabase.app/posts/" +
    id +
    ".json/";

  const response = await fetch(url);

  const data = response.json();

  return data;
}
