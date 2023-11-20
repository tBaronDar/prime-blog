import styles from "./Post.module.css";

function Post(props) {
  return (
    <div className={styles.post}>
      <p>{props.body}</p>
      <h4>{props.author}</h4>
    </div>
  );
}

export default Post;
