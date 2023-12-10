import { Link } from "react-router-dom";

import githubIcon from "../assets/github-icon.svg";
import linkdinIcon from "../assets/linkdin-icon.svg";
import backArrow from "../assets/back-arrow.svg";

import styles from "./Info.module.css";

function Info() {
  return (
    <section className={styles.container}>
      <h1>Themis Darelis</h1>

      <article>
        This is my first attempt to create and host a website after completing a
        React.js course on Udemy.com.
      </article>

      <article>
        The website was created using Vite.Js and its main purpose is for me to
        practice SPA routing using react and react-router-dom. In later stages
        thought, a lot of css was added in order to make it a bit easier on the
        eyes. The hosting and the static database containing the posts was
        realized with Firebase.
      </article>

      <article>
        Thank you for checking out this page, please consider paying a visit to
        my social medias from the links below.
      </article>

      <div className={styles.actions}>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/themis-darelis-320a608b/"
        >
          <img src={linkdinIcon} alt="linkdin" />
        </a>

        <a target="_blank" href="https://github.com/tBaronDar/prime-blog">
          <img src={githubIcon} alt="git" />
        </a>
      </div>
      <Link to="/posts" className={styles.back}>
        <img src={backArrow} alt="arrow" />
      </Link>
    </section>
  );
}

export default Info;
