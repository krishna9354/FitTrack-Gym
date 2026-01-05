import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import LoginNavbar from "../../components/LoginNavbar/LoginNavbar";
import "./home.css";

function Home() {
  const [profile, setProfile] = useState({
    bmi: null,
    weight: null,
  });

  // 🔁 Read profile data from localStorage
  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem("profile"));
    if (savedProfile) {
      setProfile(savedProfile);
    }
  }, []);

  return (
    <>
      {/* LOGIN NAVBAR */}
      <LoginNavbar />

      {/* MAIN CONTENT */}
      <main className="container">
        {/* HERO */}
        <section className="hero">
          <div className="hero-left">
            <div className="tag">🚀 Transform Your Fitness Journey</div>
            <h2>
              Achieve Your Fitness Goals with{" "}
              <span style={{ color: "var(--accent)" }}>FitTrack</span>
            </h2>
            <p>
              Personalized workouts, nutrition tracking, and an intelligent
              dashboard that keeps you motivated.
            </p>

            <div style={{ marginTop: "18px" }}>
              <Link to="/workouts" className="join-btn">
                Start Workout
              </Link>
            </div>
          </div>

          <div style={{ width: "340px" }}>
            <div className="card" style={{ padding: "18px" }}>
              <h3 style={{ marginBottom: "10px" }}>Member Dashboard</h3>
              <p className="muted" style={{ fontSize: "14px" }}>
                Access your dashboard and continue tracking.
              </p>
              <Link
                to="/dashboard"
                className="join-btn"
                style={{ marginTop: "12px", display: "inline-block" }}
              >
                Open Dashboard
              </Link>
            </div>
          </div>
        </section>

        {/* STATS (SYNCED FROM MYPROFILE) */}
        <section style={{ marginTop: "18px" }}>
          <div className="grid-4">

            <div className="card stat">
              <div className="label">BMI</div>
              <div className="value">
                {profile.bmi ? profile.bmi : "—"}
              </div>
              <div className="label">Calculated</div>
            </div>

            <div className="card stat">
              <div className="label">Weight</div>
              <div className="value">
                {profile.weight ? `${profile.weight} kg` : "—"}
              </div>
              <div className="label">Current</div>
            </div>

            <div className="card stat">
              <div className="label">Calories Burned</div>
              <div className="value">2,450</div>
              <div className="label">This Week</div>
            </div>

            <div className="card stat">
              <div className="label">Workout Time</div>
              <div className="value">4.8 hrs</div>
              <div className="label">This Week</div>
            </div>

          </div>
        </section>

        {/* TODAY WORKOUT */}
        <section style={{ marginTop: "28px" }}>
          <div style={{ display: "flex", gap: "20px", alignItems: "start" }}>
            <div style={{ flex: 2 }}>
              <div className="card">
                <h3>Today's Workout</h3>

                <div className="workout">
                  <div
                    className="thumb"
                    style={{
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=1400&q=80')",
                    }}
                  />
                  <div className="meta">
                    <h3>Upper Body Strength</h3>
                    <p className="small">
                      Duration • 45 min • Exercises 8 • Est. Calories 320
                    </p>
                    <Link to="/workouts" className="join-btn">
                      Start Workout
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* GOALS */}
            <div style={{ flex: 1 }}>
              <div className="card">
                <h4>Goals Progress</h4>

                <div style={{ marginTop: "12px" }}>
                  <small className="muted">Weight Loss</small>
                  <div className="progress">
                    <div
                      className="progress-bar green"
                      style={{ width: "80%" }}
                    />
                  </div>

                  <small className="muted">Weekly Workouts</small>
                  <div className="progress">
                    <div
                      className="progress-bar blue"
                      style={{ width: "70%" }}
                    />
                  </div>

                  <small className="muted">Protein Intake</small>
                  <div className="progress">
                    <div
                      className="progress-bar purple"
                      style={{ width: "80%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ marginTop: "40px" }}>
          <div className="cta-large card">
            <h2>Not sure which plan to choose?</h2>
            <p>
              Talk to our team for a personalized recommendation based on your
              goals.
            </p>
            <Link to="/contact" className="join-btn">
              Talk to Our Team
            </Link>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="footer">
          © 2025 FitTrack • Built with energy 💪
        </footer>
      </main>
    </>
  );
}

export default Home;
