import styles from "./Post.module.css";
import Card from "./UI/Card";

function Post(props) {
  return (
    <Card className={styles.post}>
      <p>{props.body}</p>
      <h4>{props.author}</h4>
    </Card>
  );
}

export default Post;
