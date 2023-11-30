import { Link } from "react-router-dom";

import Card from "./UI/Card";
import { backArrowLarge, linkdinIcon, gitHubIcon } from "../assets/svg-icons";

import styles from "./Info.module.css";

function Info() {
  return (
    <Card className={styles.container}>
      <section>
        <h1>Themis Darelis</h1>
        <article>
          This website was created using Vite.Js and its main perpuse is to
          practice SPA routing using react and react-router-dom
        </article>
        <ul className={styles.links}>
          <li>
            <a
              target="_blank"
              href="https://github.com/tBaronDar/prime-blog"
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
    </Card>
  );
}

export default Info;
