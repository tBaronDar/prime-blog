import Post from "./Post";
import { useLoaderData } from "react-router-dom";

import styles from "./PostsList.module.css";

function PostLists() {
  const loaderData = useLoaderData();
  const dataArray = Object.values(loaderData);

  return (
    <ul className={styles.posts}>
      {dataArray.map((item) => (
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

export async function loader() {
  const response = await fetch(
    "https://prime-blog1-default-rtdb.europe-west1.firebasedatabase.app/posts.json/"
  );

  const data = await response.json();

  return data;
}
