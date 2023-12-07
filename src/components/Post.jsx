import { Link } from "react-router-dom";
import styles from "./Post.module.css";
import edit from "../assets/messages-icon.svg";

function Post(props) {
  return (
    <div className={styles.post}>
      <Link to={`/posts/${props.id}`} className={styles.body}>
        <p>{props.body}</p>
      </Link>
      <h4 className={styles.author}>{props.author}</h4>
      <Link to={`/posts/${props.id}`} className={styles.actions}>
        <img src={edit} alt="edit" />
      </Link>
    </div>
  );
}

export default Post;
