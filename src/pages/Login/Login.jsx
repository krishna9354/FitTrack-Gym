import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";

function Login() {
  const [role, setRole] = useState("member");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // 1️⃣ Get users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // 2️⃣ Find user WITH ROLE MATCH
    const user = users.find(
      (u) =>
        u.email === email &&
        u.password === password &&
        u.role === role
    );

    if (!user) {
      alert("Invalid email, password, or role");
      return;
    }

    // 3️⃣ STORE AUTH DATA (🔥 THIS IS THE IMPORTANT PART)
    localStorage.setItem("token", "true");              // auth flag
    localStorage.setItem("role", user.role);            // member | trainer
    localStorage.setItem("currentUser", JSON.stringify(user)); // FULL USER OBJECT

    // (Optional but safe)
    localStorage.setItem("userEmail", user.email);
    localStorage.setItem("userName", user.name);

    // 4️⃣ Redirect based on role
    if (user.role === "trainer") {
      navigate("/TrainerHome");
    } else {
      navigate("/home");
    }
  };

  return (
    <>
      {/* NAVBAR */}
      <header className="header">
        <div className="brand">
          <div className="logo">FT</div>
          <h1>FitTrack</h1>
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

      {/* LOGIN PAGE */}
      <main className="login-page">
        <div className="container">
          <section className="login-section">
            <div className="login-left">
              <div className="card">
                <h2>
                  {role === "trainer" ? "Trainer Login" : "Member Login"}
                </h2>

                {/* ROLE SWITCH */}
                <div className="auth-switch">
                  <button
                    type="button"
                    className={role === "member" ? "active" : ""}
                    onClick={() => setRole("member")}
                  >
                    Member
                  </button>

                  <button
                    type="button"
                    className={role === "trainer" ? "active" : ""}
                    onClick={() => setRole("trainer")}
                  >
                    Trainer
                  </button>
                </div>

                {/* FORM */}
                <form onSubmit={handleLogin}>
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <input
                    type="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <button className="join-btn" type="submit">
                    Login
                  </button>
                </form>

                <div className="auth-footer">
                  Don&apos;t have an account?
                  <Link to="/signup"> Sign up</Link>
                </div>
              </div>
            </div>

            {/* IMAGE */}
            <div className="login-right">
              <img
                src="https://images.unsplash.com/photo-1549576490-b0b4831ef60a?auto=format&fit=crop&w=900&q=80"
                alt="Fitness"
              />
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default Login;
