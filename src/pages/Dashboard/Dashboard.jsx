import "./dashboard.css";
import { useNavigate } from "react-router-dom";
import LoginNavbar from "../../components/LoginNavbar/LoginNavbar";

function Dashboard() {
  const navigate = useNavigate();

  // 🔁 Read profile data
  const profile = JSON.parse(localStorage.getItem("profile")) || {};

  const name = profile.name || "User";
  const bmi = profile.bmi || "--";
  const weight = profile.weight || "--";

  // 🚪 Logout (kept here only if used elsewhere later)
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      {/* ✅ REUSED LOGIN NAVBAR */}
      <LoginNavbar />

      {/* ===== DASHBOARD PAGE ===== */}
      <main className="dashboard-page container">

        {/* INTRO */}
        <section className="dashboard-intro">
          <h2>Welcome back, {name} 👋</h2>
          <p>Here's your fitness overview for today</p>
        </section>

        {/* STATS */}
        <section className="grid-4">
          <div className="card stat">
            <small className="label">BMI</small>
            <div className="value">{bmi}</div>
            <small className="label">Based on your profile</small>
          </div>

          <div className="card stat">
            <small className="label">Weight</small>
            <div className="value">{weight} kg</div>
            <small className="label">Editable in Profile</small>
          </div>

          <div className="card stat">
            <small className="label">Calories Burned</small>
            <div className="value">2,340</div>
            <small className="label">This Week</small>
          </div>

          <div className="card stat">
            <small className="label">Workout Time</small>
            <div className="value">5.2 hrs</div>
            <small className="label">This Week</small>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="dashboard-main">

          {/* LEFT */}
          <div className="dashboard-left">
            <div className="card">
              <h3>Workout This Month</h3>

              <div className="workout">
                <div
                  className="thumb"
                  style={{
                    backgroundImage:
                      "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLveP7sUmFmix0Vw4MxbGJPpEgR8EqDs6NQQ&s')"
                  }}
                />

                <div className="meta">
                  <h3>Upper Body Strength</h3>

                  <div className="row space-between">
                    <div>
                      <small>Duration</small>
                      <strong>45 min</strong>
                    </div>
                    <div>
                      <small>Exercises</small>
                      <strong>8</strong>
                    </div>
                    <div>
                      <small>Calories</small>
                      <strong>320</strong>
                    </div>
                  </div>

                  <button className="join-btn full-btn">
                    Start Workout
                  </button>
                </div>
              </div>

              {/* RECENT */}
              <div className="recent">
                <h4>Recent Activities</h4>
                <div className="recent-card">
                  <div>Bench Press - 4 sets</div>
                  <div>Pull-ups - 3 sets</div>
                  <div>Shoulder Press - 4 sets</div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <aside className="dashboard-right">
            <div className="card">
              <h4>Goals Progress</h4>

              <div className="progress">
                <div className="progress-row">
                  <small>Weight Loss</small>
                  <small>8/10 kg</small>
                </div>
                <div className="bar"><span style={{ width: "80%" }} /></div>

                <div className="progress-row">
                  <small>Weekly Workouts</small>
                  <small>14/20</small>
                </div>
                <div className="bar blue"><span style={{ width: "70%" }} /></div>

                <div className="progress-row">
                  <small>Protein Intake</small>
                  <small>120/150 g</small>
                </div>
                <div className="bar purple"><span style={{ width: "80%" }} /></div>
              </div>
            </div>
          </aside>

        </section>

        {/* FOOTER */}
        <footer className="footer">
          © 2025 FitTrack
        </footer>

      </main>
    </>
  );
}

export default Dashboard;
