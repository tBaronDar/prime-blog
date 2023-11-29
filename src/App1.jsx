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

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/posts",
    element: <PostsPage />,
    loader: postsLoader,
    children: [
      {
        path: ":postId",
        id: "post-details",
        loader: postDetailsLoader,
        children: [
          { index: true, element: <PostDetailsPage />, action: deleteAction },
          { path: "edit", element: <EditPostPage />, action: postUpdateAction },
        ],
      },
      { path: "new-post", element: <NewPostPage />, action: postUpdateAction },
    ],
  },
  { path: "/about", element: <AboutPage /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
