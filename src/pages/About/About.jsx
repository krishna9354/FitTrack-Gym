import "./about.css";
import LoginNavbar from "../../components/LoginNavbar/LoginNavbar";

// ✅ IMPORT TEAM IMAGES (CORRECT WAY)
import krishnaImg from "../../assets/krishna.jpg";
import pranayImg from "../../assets/pranay.jpg";
import priyanshuImg from "../../assets/priyanshu.jpg";
import princeImg from "../../assets/prince.jpg"; // optional placeholder

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
            <img
              src="https://images.unsplash.com/photo-1558611848-73f7eb4001d1?auto=format&fit=crop&w=1200&q=80"
              alt="Gym"
            />
          </div>
        </section>

        {/* TEAM SECTION */}
        <section className="team-section">
          <h3>Meet Our Team</h3>

          <div className="grid-4">
            {/* KRISHNA GARG */}
            <a
              href="https://vite-portf.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="team-link"
            >
              <div className="team-card card">
                <img src={krishnaImg} alt="Krishna Garg" />
                <div className="info">
                  <h4>Krishna Garg</h4>
                  <small>Team Leader</small>
                </div>
              </div>
            </a>

            {/* PRANAY MAHESHWARI */}
            <a
              href="https://pranay1307.github.io/myportfolio/"
              target="_blank"
              rel="noopener noreferrer"
              className="team-link"
            >
              <div className="team-card card">
                <img src={pranayImg} alt="Pranay Maheshwari" />
                <div className="info">
                  <h4>Pranay Maheshwari</h4>
                  <small>Team Member</small>
                </div>
              </div>
            </a>

            {/* PRIYANSHU SINGH */}
            <a
              href="https://priyanshurai0708-alt.github.io/MY_PORTFOLIO/"
              target="_blank"
              rel="noopener noreferrer"
              className="team-link"
            >
              <div className="team-card card">
                <img src={priyanshuImg} alt="Priyanshu Singh" />
                <div className="info">
                  <h4>Priyanshu Singh</h4>
                  <small>Team Member</small>
                </div>
              </div>
            </a>

            {/* PRINCE PAL */}
            <a
              href="https://prince-jod.github.io/Portfolio/"
              target="_blank"
              rel="noopener noreferrer"
              className="team-link"
            >
              <div className="team-card card">
                <img src={princeImg} alt="Prince Pal" />
                <div className="info">
                  <h4>Prince Pal</h4>
                  <small>Team Member</small>
                </div>
              </div>
            </a>
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
