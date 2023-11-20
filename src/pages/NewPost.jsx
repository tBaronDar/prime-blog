import { Form } from "react-router-dom";

import Modal from "../components/UI/Modal";

function NewPostPage() {
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

export default NewPostPage;
