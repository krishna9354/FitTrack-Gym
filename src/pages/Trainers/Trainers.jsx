import { Link } from "react-router-dom";
import "./trainers.css";

function Trainers() {
  return (
    <>
      {/* ===== NAVBAR (GLOBAL CSS) ===== */}
      <header className="header">
        <div className="brand">
          <div className="logo">🏋️</div>
          <h1>FitTrack</h1>
        </div>

        <nav className="nav">
          <Link to="/home">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/workouts">Workouts</Link>
          <Link to="/trainers" className="active">Trainers</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login" className="join-btn">Join</Link>
        </nav>
      </header>

      {/* ===== TRAINERS SECTION ===== */}
      <main className="container trainers-page">
        <div className="align-center">
          <h2>Meet Our Expert Trainers</h2>
        </div>

        <p className="trainers-subtitle">
          Certified professionals ready to guide your transformation.
        </p>

        <div className="trainer-grid">
          <TrainerCard
            name="Jason Miller"
            role="Strength & Conditioning"
            rating="4.9"
            img="https://i.pravatar.cc/300?img=8"
          />

          <TrainerCard
            name="Amanda Lopez"
            role="Yoga & Mindfulness"
            rating="4.8"
            img="https://i.pravatar.cc/300?img=12"
          />

          <TrainerCard
            name="David Brown"
            role="CrossFit & HIIT"
            rating="5.0"
            img="https://i.pravatar.cc/300?img=33"
          />

          <TrainerCard
            name="Sophia Patel"
            role="Nutrition & Wellness"
            rating="4.7"
            img="https://i.pravatar.cc/300?img=44"
          />
        </div>

        <footer className="footer">
          © 2025 FitTrack. All Rights Reserved.
        </footer>
      </main>
    </>
  );
}

/* ===== TRAINER CARD COMPONENT ===== */
function TrainerCard({ name, role, rating, img }) {
  return (
    <div className="trainer-card">
      <img src={img} alt={name} />

      <div className="trainer-info">
        <h3>{name}</h3>
        <p>{role}</p>
        <span className="rating">⭐ {rating}</span>

        <div className="socials">
          <a href="#" aria-label="Instagram">📸</a>
          <a href="#" aria-label="LinkedIn">💼</a>
        </div>
      </div>
    </div>
  );
}

export default Trainers;
