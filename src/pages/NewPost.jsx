import PostForm from "../components/PostForm";
import Modal from "../components/UI/Modal";

function NewPostPage() {
  return (
    <Modal>
      <PostForm method="POST" />
    </Modal>
  );
}

export default NewPostPage;
