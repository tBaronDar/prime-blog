import { Link } from "react-router-dom";

import Card from "./UI/Card";
import { backArrowLarge, linkdinIcon, gitHubIcon } from "../assets/svg-icons";

import styles from "./Info.module.css";

function Info() {
  return (
    <div className={styles.container}>
      <section>
        <h1>Themis Darelis</h1>

        <article>
          This is my first attemp to create and host a website after completing
          a React.js course.
        </article>

        <article>
          The website was created using Vite.Js and its main purpose is for me
          to practice SPA routing using react and react-router-dom.
        </article>

        <article>
          The hosting and the static database was realized with Firebase.
        </article>
        <ul className={styles.links}>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/themis-darelis-320a608b/"
              className={styles.actions}
            >
              {linkdinIcon}
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://github.com/tBaronDar/prime-blog"
              className={styles.actions}
            >
              {gitHubIcon}
            </a>
          </li>
        </ul>
        <Link to="/posts" className={styles.actions}>
          {backArrowLarge}
        </Link>
      </section>
    </div>
  );
}

export default Info;
