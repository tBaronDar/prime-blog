import { NavLink } from "react-router-dom";
import Card from "./UI/Card";
import styles from "./Welcome.module.css";

function Welcome() {
  return (
    <div className={styles.welcome}>
      <Card>
        <section>
          <h1>Welcome</h1>
          <p>This is a test app.</p>
        </section>
      </Card>
      <Card>
        <section>
          <p>
            To find more about the author or take a look at the source code
            visit the about section.
          </p>
        </section>
      </Card>
      <Card>
        <section>
          <NavLink to="/posts">To posts!</NavLink>
        </section>
      </Card>
    </div>
  );
}

export default Welcome;
