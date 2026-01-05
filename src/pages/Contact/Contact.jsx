import "./contact.css";
import LoginNavbar from "../../components/LoginNavbar/LoginNavbar";

function Contact() {
  return (
    <>
      {/* ✅ REUSED LOGIN NAVBAR */}
      <LoginNavbar />

      {/* ===== CONTACT PAGE ===== */}
      <main className="contact-page">

        <div className="contact-container">

          {/* INTRO */}
          <section className="contact-intro">
            <h2>Get In Touch</h2>
            <p>
              Have questions? We'd love to hear from you.  
              Send us a message and we'll respond as soon as possible.
            </p>
          </section>

          {/* INFO CARDS */}
          <section className="contact-info-cards">

            <div className="contact-card">
              <div className="contact-icon blue">📍</div>
              <h4>Location</h4>
              <p>Ghaziabad, 201001<br />India</p>
            </div>

            <div className="contact-card">
              <div className="contact-icon green">📞</div>
              <h4>Phone</h4>
              <p>+91 93544562XX</p>
            </div>

            <div className="contact-card">
              <div className="contact-icon orange">✉️</div>
              <h4>Email</h4>
              <p>info@fittrack.com<br />support@fittrack.com</p>
            </div>

            <div className="contact-card">
              <div className="contact-icon purple">⏰</div>
              <h4>Working Hours</h4>
              <p>
                Mon–Fri: 6AM – 10PM<br />
                Sat–Sun: 8AM – 8PM
              </p>
            </div>

          </section>

          {/* FORM + MAP */}
          <section className="contact-grid">

            <div className="contact-form">
              <h3>Send us a Message</h3>

              <form>
                <div className="contact-row">
                  <input placeholder="First Name" />
                  <input placeholder="Last Name" />
                </div>

                <input placeholder="fittrack@example.com" />
                <input placeholder="+91 XXXXXXXXXX" />
                <textarea placeholder="Tell us how we can help you..." />

                <button type="submit" className="join-btn">
                  ✈️ Send Message
                </button>
              </form>
            </div>

            <div className="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24131758.067886017!2d60.4724218025179!3d20.59368401591645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff036bd6e6f%3A0xa4a09c9d7f6285a!2sIndia!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                loading="lazy"
                title="India Map"
              />
            </div>

          </section>

          <footer className="contact-footer">
            © 2025 FitTrack
          </footer>

        </div>
      </main>
    </>
  );
}

export default Contact;
