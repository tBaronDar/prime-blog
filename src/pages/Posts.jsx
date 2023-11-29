import { redirect, useNavigate } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import PostLists from "../components/PostsList";

function PostsPage() {
  return (
    <div>
      <MainNavigation />
      <PostLists />
    </div>
  );
}

export default PostsPage;

export async function loader() {
  const response = await fetch(
    "https://prime-blog1-default-rtdb.europe-west1.firebasedatabase.app/posts.json/"
  );

  const data = await response.json();

  return data;
}
