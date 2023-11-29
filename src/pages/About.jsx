import { Link } from "react-router-dom";
import Card from "../components/UI/Card";

import { backArrowLarge } from "../assets/svg-icons";

function AboutPage() {
  return (
    <Card>
      <h1>Themis Darelis</h1>
      <Link to="/posts">{backArrowLarge}</Link>
    </Card>
  );
}

export default AboutPage;
