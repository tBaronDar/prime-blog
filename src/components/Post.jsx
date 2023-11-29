import { Link } from "react-router-dom";
import styles from "./Post.module.css";
import Card from "./UI/Card";
import { messages } from "../assets/svg-icons";

function Post(props) {
  return (
    <Card>
      <div className={styles.post}>
        <Link to={`/posts/${props.id}`}>
          <div>
            <p>{props.body}</p>
            <h4>{props.author}</h4>
          </div>
        </Link>
      </div>

      <div>
        <Link to={`/posts/${props.id}`} className={styles.actions}>
          {messages}
        </Link>
      </div>
    </Card>
  );
}

export default Post;
