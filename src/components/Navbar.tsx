import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/feedback">Submit Feedback</Link>
      <Link to="/history">My Feedback</Link>
      <Link to="/admin">Admin Dashboard</Link>
    </nav>
  );
}
