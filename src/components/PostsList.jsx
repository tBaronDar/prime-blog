import Post from "./Post";
import { useLoaderData } from "react-router-dom";

import styles from "./PostsList.module.css";

function PostLists() {
  const loaderData = useLoaderData();
  const dataArray = Object.values(loaderData);

  const idArray = Object.keys(loaderData);

  let helperArray = [];

  for (let i = 0; i < dataArray.length; i++) {
    helperArray[i] = {
      author: dataArray[i].author,
      body: dataArray[i].body,
      id: idArray[i],
    };
  }

  return (
    <ul className={styles.posts}>
      {helperArray.map((item) => (
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
