import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <h2 className="logo">Placement Prep</h2>

      <div className="nav-links">
        <Link to="/aptitude">Aptitude</Link>
        <Link to="/coding">Coding</Link>
        <Link to="/interview">Interview</Link>
      </div>
    </div>
  );
}