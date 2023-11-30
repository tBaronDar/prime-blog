import { NavLink } from "react-router-dom";

import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <header className={styles.navBar}>
      <ul>
        <li>
          <NavLink to="/posts" end>
            Posts
          </NavLink>
        </li>
        <li>
          <NavLink to="/new-post">Create Post</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
