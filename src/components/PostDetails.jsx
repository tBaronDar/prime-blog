import { Form, useParams } from "react-router-dom";
import Modal from "./UI/Modal";

function PostDetails() {
  const params = useParams();

  return (
    <Modal>
      <Form>
        <div>
          <label htmlFor="body">Your thoughts</label>
          <textarea minLength="3" />
        </div>
        <div>
          <label htmlFor="author">by...</label>
          <input type="text" />
        </div>
      </Form>
    </Modal>
  );
}

export default PostDetails;

export function loader() {}
