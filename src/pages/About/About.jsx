import "./about.css";
import LoginNavbar from "../../components/LoginNavbar/LoginNavbar";

function About() {
  return (
    <>
      {/* LOGIN NAVBAR */}
      <LoginNavbar />

      {/* MAIN */}
      <main className="container">
        {/* ABOUT SECTION */}
        <section className="about-section">
          <div className="about-text">
            <h2>About FitTrack</h2>

            <p>
              <strong>Mission:</strong> To empower individuals to achieve their
              fitness goals through innovative technology and expert guidance.
            </p>

            <p>
              <strong>Vision:</strong> To become the world’s leading fitness
              platform delivering personalized wellness solutions.
            </p>

            <div className="social-icons">
              <div className="icon">f</div>
              <div className="icon">ig</div>
              <div className="icon">tw</div>
              <div className="icon">in</div>
            </div>
          </div>

          <div className="about-image">
            <img src="/assets/lower.jpg" alt="Gym" />
          </div>
        </section>

        {/* TEAM SECTION */}
        <section className="team-section">
          <h3>Meet Our Team</h3>

          <div className="grid-4">
            <div className="team-card card">
              <img src="/assets/krishna.jpg" alt="Krishna Garg" />
              <div className="info">
                <h4>Krishna Garg</h4>
                <small>Team Leader</small>
              </div>
            </div>

            <div className="team-card card">
              <img src="/assets/pranay.jpg" alt="Pranay Maheshwari" />
              <div className="info">
                <h4>Pranay Maheshwari</h4>
                <small>Team Member</small>
              </div>
            </div>

            <div className="team-card card">
              <img src="/assets/priyanshu.jpg" alt="Priyanshu Singh" />
              <div className="info">
                <h4>Priyanshu Singh</h4>
                <small>Team Member</small>
              </div>
            </div>

            <div className="team-card card">
              <img src="/assets/prince.jpg" alt="Prince Pal" />
              <div className="info">
                <h4>Prince Pal</h4>
                <small>Team Member</small>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-large">
          <h3>50K+ Active Members</h3>
          <p>Join a growing community of fitness enthusiasts.</p>
        </section>

        {/* FOOTER */}
        <footer className="footer">© 2025 FitTrack</footer>
      </main>
    </>
  );
}

export default About;
