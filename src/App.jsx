import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";

import "./App.css";

import HomePage from "./pages/Home";
import PostsPage from "./pages/Posts";
import PostDetails from "./components/PostDetails";
import NewPostPage from "./pages/NewPost";
import { action as newPostAction } from "./components/NewPostForm";
import { loader as postsLoader } from "./components/PostsList";

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
      { path: "new-post", element: <NewPostPage />, action: newPostAction },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
