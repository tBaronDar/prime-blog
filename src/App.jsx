import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";

import "./App.css";

import WelcomePage from "./pages/Welcome";
import PostsPage from "./pages/Posts";
import PostDetails from "./components/PostDetails";
import NewPostPage from "./pages/NewPost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage />,
  },
  {
    path: "/posts",
    element: <PostsPage />,
    children: [{ path: "new-post", element: <NewPostPage /> }],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
