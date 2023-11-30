import { NavLink } from "react-router-dom";
import Card from "./UI/Card";
import styles from "./Welcome.module.css";

function Welcome() {
  return (
    <div className={styles.welcome}>
      <Card>
        <section>
          <h1>Welcome</h1>
          <p>
            This is a test app. You can post your thoughts here. The posts can
            be edited and deleted without any authentication.
          </p>
        </section>
      </Card>

      <Card>
        <section>
          <p>
            To find more about the author or to take a look at the source code
            visit the about page.
          </p>
        </section>
      </Card>

      <section>
        <NavLink to="/posts">To posts!</NavLink>
      </section>
    </div>
  );
}

export default Welcome;
