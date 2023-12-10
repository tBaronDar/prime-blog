import PostForm from "../components/PostForm";
import { useRouteLoaderData } from "react-router-dom";

function EditPostPage() {
  const data = useRouteLoaderData("post-details");
  return <PostForm method="PATCH" author={data.author} body={data.body} />;
}

export default EditPostPage;
