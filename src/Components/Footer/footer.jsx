import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>About Us</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam viverra justo in enim pulvinar, id maximus quam ultricies.</p>
        </div>
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Connect With Us</h3>
          <ul className="social-links">
            <li><a href="#"><i className="fab fa-facebook-f"></i></a>Facebook</li>
            <li><a href="#"><i className="fab fa-twitter"></i></a>Twitter</li>
            <li><a href="#"><i className="fab fa-instagram"></i></a>Instagram</li>
            <li><a href="#"><i className="fab fa-linkedin-in"></i></a>Linkedin</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Subscribe to Our Newsletter</h3>
          <form className="subscribe-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 AgriSwift. All rights reserved.</p>
        <ul className="footer-terms">
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
