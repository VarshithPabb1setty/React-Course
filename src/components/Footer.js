const Footer = () => {
  return (
    <div className="footer">
      <div className="copy-right">
        <h3>My Food App</h3>
        <h6>Varshith Pvt. Ltd.</h6>
      </div>

      <div className="footer-items">
        <div className="company">
          <h4>Company</h4>
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Team</li>
          </ul>
        </div>

        <div className="contact-us">
          <h4>Contact Us</h4>
          <ul>
            <li>Help&Support</li>
            <li>Partner With Us</li>
            <li>Ride With Us</li>
          </ul>
        </div>

        <div className="we-deliver-to">
          <h4>We Deliver To</h4>
          <ul>
            <li>San Jose</li>
            <li>Sunnyvale</li>
            <li>Milpitas</li>
            <li>Santa Cruz</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
