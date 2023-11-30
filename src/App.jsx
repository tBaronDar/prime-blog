import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import HomePage from "./pages/Home";
import PostsPage, { loader as postsLoader } from "./pages/Posts";
import NewPostPage from "./pages/NewPost";
import PostDetailsPage, {
  loader as postDetailsLoader,
  deleteAction,
} from "./pages/PostDetails";
import EditPostPage from "./pages/EditPost";
import { action as postUpdateAction } from "./components/PostForm";
import AboutPage from "./pages/About";
import Layout from "./pages/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      { path: "/about", element: <AboutPage /> },
      {
        path: "new-post",
        element: <NewPostPage />,
        action: postUpdateAction,
      },
      {
        path: "/posts",
        children: [
          {
            index: true,
            element: <PostsPage />,
            loader: postsLoader,
          },
          {
            path: ":postId",
            id: "post-details",
            loader: postDetailsLoader,
            children: [
              {
                index: true,
                element: <PostDetailsPage />,
                action: deleteAction,
              },
              {
                path: "edit",
                element: <EditPostPage />,
                action: postUpdateAction,
              },
            ],
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
