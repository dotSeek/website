import Link from "next/link";

export default function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6 footer-about">
            <Link
              href="/"
              className="logo d-flex align-items-center me-auto me-xl-0"
            >
              <img src="/assets/img/logo.png" alt="Logo" />
              {/* <h1 className="sitename">{siteName}</h1> */}
            </Link>
            <div className="footer-contact pt-3">
              <p>58 King Edwards Road</p>
              <p>Swansea, UK SA14LN</p>
              <p className="mt-3">
                <strong>Phone:</strong> <span>+44 7587 925198</span>
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <span>seekingsupport@dotseek.co.uk</span>
              </p>
            </div>
            <div className="social-links d-flex mt-4">
              <a href="#">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li>
                <a href="#">Web App Development</a>
              </li>
              <li>
                <a href="#">Mobile App Development</a>
              </li>
              <li>
                <a href="#">Automation Tools</a>
              </li>
              <li>
                <a href="#">Data Analytics</a>
              </li>
              <li>
                <a href="#">AI Solutions</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#">About Dotseek</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Partners</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Legal</h4>
            <ul>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <a href="#">Cookies Policy</a>
              </li>
              <li>
                <a href="#">Security</a>
              </li>
              <li>
                <a href="#">Disclaimer</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container copyright text-center mt-4">
        <p>
          © {new Date().getFullYear()}{" "}
          <strong className="px-1 sitename">Dotseek</strong>{" "}
          <span>All Rights Reserved</span>
        </p>
        {/* <div className="credits">
          Designed by <a href="https://dotseek.co.uk/">Dotseek Team</a>
        </div> */}
      </div>
    </footer>
  );
}
