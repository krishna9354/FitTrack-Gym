import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "./landing.css";

function Landing() {
  return (
    <>
      {/* ===== NAVBAR ===== */}
      <Navbar />

      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-text">
            <span className="tag">🚀 Transform Your Fitness Journey</span>

            <h2>
              Achieve Your Fitness Goals with
              <span className="accent"> FitTrack</span>
            </h2>

            <p>
              Personalized workouts, nutrition tracking, and progress monitoring
              — all designed to keep you consistent and motivated.
            </p>

            <div className="hero-actions">
              <Link to="/signup" className="btn-primary btn-lg">
                Start Free Trial
              </Link>

              <Link to="/login" className="btn-link">
                Already a member? Login
              </Link>
            </div>
          </div>

          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=800&q=80"
              alt="Fitness Training"
            />
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="section" id="features">
        <h3 className="section-title">Why Choose FitTrack?</h3>

        <div className="grid-3">
          <div className="card">
            <h4>Smart Workouts</h4>
            <p>Workout plans that adapt to your fitness level and goals.</p>
          </div>

          <div className="card">
            <h4>Nutrition Tracking</h4>
            <p>Track calories, protein intake, and maintain a balanced diet.</p>
          </div>

          <div className="card">
            <h4>Progress Insights</h4>
            <p>Visual reports to help you stay motivated and consistent.</p>
          </div>
        </div>
      </section>

      {/* ===== WORKOUT PREVIEW ===== */}
      <section className="section" id="workouts">
        <h3 className="section-title">Popular Workouts</h3>

        <div className="grid-3">
          {/* FIRST CARD */}
          <div className="workout-card">
            <img
              src="https://www.guardian.in/cdn/shop/articles/best-hiit-workouts.jpg"
              alt="HIIT Workout"
            />
            <h4>HIIT Cardio Blast</h4>
            <p>30 min • Fat Burn</p>
            <Link to="/login" className="btn-primary">
              Login to Access
            </Link>
          </div>

          {/* SECOND CARD */}
          <div className="workout-card">
            <img src="/assets/yoga.jpg" alt="Yoga Workout" />
            <h4>Yoga Flow</h4>
            <p>60 min • Flexibility</p>
            <Link to="/login" className="btn-primary">
              Login to Access
            </Link>
          </div>

          {/* THIRD CARD */}
          <div className="workout-card">
            <img src="/assets/lower.jpg" alt="Strength Workout" />
            <h4>Lower Body Strength</h4>
            <p>45 min • Muscle Build</p>
            <Link to="/login" className="btn-primary">
              Login to Access
            </Link>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="cta">
        <h2>Start Your Fitness Journey Today</h2>
        <p>Join FitTrack and take control of your health.</p>

        <Link to="/signup" className="btn-primary btn-lg">
          Create Free Account
        </Link>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        © 2025 FitTrack • Built with 💪
      </footer>
    </>
  );
}

export default Landing;
