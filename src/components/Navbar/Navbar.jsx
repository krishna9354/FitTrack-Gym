import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <header className="header">
      <div className="brand">
        <div className="logo">FT</div>
        <div>
          <h1>FitTrack</h1>
        </div>
      </div>

      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/signup" className="join-btn">
          Sign Up
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
