import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./trainerhome.css";

const TrainerHome = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem("role");
    const token = localStorage.getItem("token");

    if (!token || role !== "trainer") {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="trainer-home">
      {/* HEADER */}
      <header className="trainer-header">
        <div>
          <h1>Trainer Dashboard</h1>
          <p className="subtext">Manage your clients & workouts</p>
        </div>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </header>

      {/* INFO CARD */}
      <section className="trainer-info">
        <h2>Welcome, Coach 💪</h2>
        <p>
          Track client progress, assign workouts, and guide them toward their
          fitness goals.
        </p>
      </section>

      {/* CLIENTS */}
      <section className="clients-section">
        <h2>Your Clients</h2>

        <div className="clients-grid">
          <ClientCard
            name="Rahul Sharma"
            goal="Weight Loss"
            progress="65%"
          />
          <ClientCard
            name="Ananya Verma"
            goal="Muscle Gain"
            progress="40%"
          />
          <ClientCard
            name="Arjun Mehta"
            goal="Endurance"
            progress="80%"
          />
        </div>
      </section>
    </div>
  );
};

const ClientCard = ({ name, goal, progress }) => {
  return (
    <div className="client-card">
      <div className="client-avatar">{name.charAt(0)}</div>

      <h3>{name}</h3>
      <p className="goal">Goal: {goal}</p>

      <div className="progress-wrapper">
        <span>Progress</span>
        <span>{progress}</span>
      </div>

      <div className="progress-bar">
        <div style={{ width: progress }} />
      </div>

      <button className="view-btn">View Profile</button>
    </div>
  );
};

export default TrainerHome;
