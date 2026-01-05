import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signup.css";

function Signup() {
  const [role, setRole] = useState("member");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [certId, setCertId] = useState("");

  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const alreadyExists = users.find((u) => u.email === email);
    if (alreadyExists) {
      alert("User already exists. Please login.");
      return;
    }

    const newUser = {
      name,
      email,
      password,
      role,
      certificationId: role === "trainer" ? certId : null,
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    localStorage.setItem("token", "true");
    localStorage.setItem("role", role);
    localStorage.setItem("currentUser", JSON.stringify(newUser));

    role === "trainer" ? navigate("/TrainerHome") : navigate("/home");
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
          <Link to="/login" className="join-btn">
            Login
          </Link>
        </nav>
      </header>

      {/* SIGNUP */}
      <main className="signup-page">
        <div className="container">
          <section className="signup-section">
            <div className="signup-left">
              <div className="card">
                <h2>
                  {role === "trainer" ? "Trainer Signup" : "Member Signup"}
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
                <form onSubmit={handleSignup}>
                  <input
                    type="text"
                    placeholder="Full Name"
                    required
                    onChange={(e) => setName(e.target.value)}
                  />

                  <input
                    type="email"
                    placeholder="Email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <input
                    type="password"
                    placeholder="Password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <input
                    type="password"
                    placeholder="Confirm Password"
                    required
                  />

                  {role === "trainer" && (
                    <input
                      type="text"
                      placeholder="Trainer Certification ID"
                      onChange={(e) => setCertId(e.target.value)}
                    />
                  )}

                  <button className="join-btn" type="submit">
                    Create Account
                  </button>
                </form>

                <div className="auth-footer">
                  Already have an account?
                  <Link to="/login"> Login</Link>
                </div>
              </div>
            </div>

            {/* ✅ FIXED IMAGE */}
            <div className="signup-right">
              <img src="/assets/login.webp" alt="Signup" />
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default Signup;
