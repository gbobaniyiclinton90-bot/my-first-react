import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <a className="footer-logo" href="#home"><span>C.</span> clintontech</a>
          <p>Practical technology and learning for a world that keeps moving.</p>
        </div>

        <div className="footer-column">
          <h2>Explore</h2>
          <a href="#programs">What we do</a>
          <a href="#about">About us</a>
          <a href="#contact">Get in touch</a>
        </div>

        <div className="footer-column">
          <h2>Say hello</h2>
          <a href="mailto:hello@clintontech.com">hello@clintontech.com</a>
          <a href="#contact">Start a conversation <span aria-hidden="true">↗</span></a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© Clinton Tech</span>
        <span>Built for what's next.</span>
      </div>
    </footer>
  );
}

export default Footer;
