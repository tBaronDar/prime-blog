import { Link, useNavigate } from "react-router-dom";

function WelcomePage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome</h1>
      <Link to="/posts">Begin</Link>
    </div>
  );
}

export default WelcomePage;
