import ViewPostDetails from "../components/ViewPostDetails";
import Modal from "../components/UI/Modal";

import { useRouteLoaderData, useParams, redirect } from "react-router-dom";

function PostDetailsPage() {
  const data = useRouteLoaderData("post-details");
  const params = useParams();

  return (
    <Modal>
      <ViewPostDetails
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

export async function deleteAction({ params, request }) {
  const id = params.postId;

  const response = await fetch(
    "https://prime-blog1-default-rtdb.europe-west1.firebasedatabase.app/posts/" +
      id +
      ".json/",
    {
      method: request.method,
    }
  );

  console.log("quiqui");

  return redirect("/posts");
}
