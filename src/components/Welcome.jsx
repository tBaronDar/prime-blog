import Card from "./UI/Card";
import styles from "./Welcome.module.css";

function Welcome() {
  return (
    <div className={styles.welcome}>
      <section>
        <Card>
          <h1>Welcome</h1>
          <p>This is a test app.</p>
        </Card>
      </section>
      <section>
        <Card>
          <p>
            To find more about the author or take a look at the source code
            visit the about section.
          </p>
        </Card>
      </section>
    </div>
  );
}

export default Welcome;
