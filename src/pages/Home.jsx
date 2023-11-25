import { Link } from "react-router-dom";

import Welcome from "../components/Welcome";

function HomePage() {
  return (
    <div>
      <Welcome />
      <Link to="/posts">Begin</Link>
    </div>
  );
}

export default HomePage;
