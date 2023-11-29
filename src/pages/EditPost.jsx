import Modal from "../components/UI/Modal";
import PostForm from "../components/PostForm";
import { useRouteLoaderData } from "react-router-dom";

function EditPostPage() {
  const data = useRouteLoaderData("post-details");
  return (
    <Modal>
      <PostForm method="PATCH" author={data.author} body={data.body} />
    </Modal>
  );
}

export default EditPostPage;
