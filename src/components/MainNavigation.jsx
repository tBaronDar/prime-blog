import { NavLink, Outlet } from "react-router-dom";

import styles from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <>
      <header className={styles.backdrop}>
        <NavLink to="/posts">Home</NavLink>
        <NavLink to="/posts/new-post">Create Post</NavLink>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default MainNavigation;
