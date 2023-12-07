import Post from "./Post";
import { useLoaderData } from "react-router-dom";

import styles from "./PostsList.module.css";

function PostLists() {
  const loaderData = useLoaderData();
  let content = <h2 className={styles.auxContent}>No post currently...</h2>;

  if (loaderData) {
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

    content = (
      <div className={styles.posts}>
        <ul>
          {helperArray.map((item) => (
            <li key={item.id}>
              <Post
                id={item.id}
                author={item.author}
                body={item.body}
                className={styles.post}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return content;
}

export default PostLists;
