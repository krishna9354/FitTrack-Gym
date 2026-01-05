import "./pricing.css";
import { Link } from "react-router-dom";

function Pricing() {
  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header className="header">
        <div className="brand">
          <div className="logo">FT</div>
          <h1>FitTrack</h1>
        </div>

        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login" className="join-btn">Join Now</Link>
        </nav>
      </header>

      {/* ================= CONTENT ================= */}
      <main className="container">
        <section className="pricing-intro">
          <h2>Choose Your Plan</h2>
          <p className="muted">
            Select the perfect membership plan to match your fitness goals and lifestyle
          </p>
        </section>

        {/* ================= PRICING CARDS ================= */}
        <section className="grid-3 pricing-grid">

          {/* BASIC */}
          <div className="pricing-card card">
            <div className="pricing-head">
              <div className="icon blue">⚡</div>
              <div>
                <h3>Basic</h3>
                <div className="price">
                  ₹529 <small>/month</small>
                </div>
              </div>
            </div>

            <ul>
              <li>Access to gym facilities</li>
              <li>Basic workout plans</li>
              <li>2 group classes per week</li>
            </ul>

            <Link to="/signup" className="join-btn full-btn">
              Subscribe Now
            </Link>
          </div>

          {/* STANDARD */}
          <div className="pricing-card card highlight">
            <div className="pricing-head">
              <div className="icon green">⭐</div>
              <div>
                <h3>Standard</h3>
                <div className="price">
                  ₹1059 <small>/month</small>
                </div>
              </div>
            </div>

            <ul>
              <li>All Basic features</li>
              <li>Personalized workout plans</li>
              <li>Nutrition tracking</li>
            </ul>

            <Link to="/signup" className="join-btn full-btn green-btn">
              Subscribe Now
            </Link>
          </div>

          {/* PREMIUM */}
          <div className="pricing-card card">
            <div className="pricing-head">
              <div className="icon orange">👑</div>
              <div>
                <h3>Premium</h3>
                <div className="price">
                  ₹2099 <small>/month</small>
                </div>
              </div>
            </div>

            <ul>
              <li>All Standard features</li>
              <li>4 personal training sessions/month</li>
              <li>Advanced body composition analysis</li>
            </ul>

            <Link to="/signup" className="join-btn full-btn">
              Subscribe Now
            </Link>
          </div>

        </section>

        {/* ================= FAQ ================= */}
        <section className="faq-section">
          <div className="card">
            <h3>Frequently Asked Questions</h3>

            <div className="faq-grid">
              <div>
                <h4>Can I cancel my subscription anytime?</h4>
                <p className="muted">Yes! You can cancel at any time with no fees.</p>

                <h4>Can I upgrade or downgrade?</h4>
                <p className="muted">Yes — change plans any time in account settings.</p>
              </div>

              <div>
                <h4>Do you offer a free trial?</h4>
                <p className="muted">7-day free trial for new members.</p>

                <h4>Any additional fees?</h4>
                <p className="muted">No hidden fees. Monthly price is all-inclusive.</p>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">© 2025 FitTrack</footer>
      </main>
    </>
  );
}

export default Pricing;
