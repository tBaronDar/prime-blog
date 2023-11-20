import DUMMY_POSTS from "../assets/DUMMY_DATA";
import Post from "./Post";

import styles from "./PostsList.module.css";

function PostLists() {
  console.log(DUMMY_POSTS);

  return (
    <ul className={styles.posts}>
      {DUMMY_POSTS.map((item) => (
        <Post
          id={item.id}
          author={item.author}
          body={item.body}
          key={item.id}
        />
      ))}
    </ul>
  );
}

export default PostLists;
