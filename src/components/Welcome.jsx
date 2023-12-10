import { NavLink } from "react-router-dom";
import styles from "./Welcome.module.css";

function Welcome() {
  return (
    <div className={styles.welcome}>
      <section className={styles.card}>
        <h1>Welcome</h1>
        <p>
          This is a test webpage and it was created for educational purposes.
          You can post your thoughts here. Your posts will remain online and
          they can be viewed, edited and deleted by anyone without any
          authentication.
        </p>
      </section>

      <section className={styles.card}>
        <p>
          To find more about the author or to take a look at the source code
          visit the about page.
        </p>
      </section>

      <section>
        <NavLink to="/posts">To posts!</NavLink>
      </section>
    </div>
  );
}

export default Welcome;
