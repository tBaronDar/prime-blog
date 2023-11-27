import { NavLink, Outlet } from "react-router-dom";

import styles from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <>
      <header className={styles.navBar}>
        <ul>
          <li>
            <NavLink to="/posts" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/posts/new-post">Create Post</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default MainNavigation;
