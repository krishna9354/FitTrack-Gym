import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./loginnavbar.css";

function LoginNavbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <header className="header">
      {/* BRAND */}
      <Link to="/home" className="brand">
        <div className="logo">FT</div>
        <h1>FitTrack</h1>
      </Link>

      {/* NAV LINKS */}
      <nav className="nav">
        <Link to="/home">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/workouts">Workouts</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>

        {/* PROFILE MENU */}
        <div className="profile-wrapper">
          <div
            className="profile-icon"
            onClick={() => setOpen(!open)}
            title="Profile"
          >
            👤
          </div>

          {open && (
            <div className="profile-dropdown">
              {/* ✅ FIXED ROUTE */}
              <Link to="/myprofile" onClick={() => setOpen(false)}>
                My Profile
              </Link>
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default LoginNavbar;
