import React from "react";
import "./Footer.css";
// import logo from "../../assets/logo.png";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  // FaFax,
  FaEnvelope,
  // FaGlobe,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
    {/* <div>
      <h1>
        Footer
      </h1>
    </div> */}
    <section id="footer">
      <div className="container footer">
        {/* <div className="footer-box">
          <h4>Useful Links</h4>
          <div className="footer-links">
            <a href="#">&bull; Support</a>
            <a href="#">&bull; About</a>
            <a href="#">&bull; Learn</a>
            <a href="#">&bull; Hosting</a>
            <a href="#">&bull; Messenger</a>
          </div>
        </div>
        <div className="footer-box">
          <h4>Support</h4>
          <div className="footer-links">
            <a href="#">&bull; Support</a>
            <a href="#">&bull; About</a>
            <a href="#">&bull; Learn</a>
            <a href="#">&bull; Hosting</a>
            <a href="#">&bull; Messenger</a>
          </div>
        </div> */}
        <div className="footer-box">
          <h4>Contact Us</h4>
          <div className="footer-contact u-text-small">
            <div>
              <FaMapMarkerAlt /> &nbsp; UIUC
            </div>
            <div>
              <FaPhoneAlt /> &nbsp; (217)-979-7479
            </div>
            <div>
              <FaEnvelope />&nbsp;<a href='mailto:chiragr2@illinois.edu'>&nbsp; chiragr2@illinois.edu</a>
            </div>
          </div>
        </div>
        <div className="footer-box">
          <p className="u-text-small"> Coded by chirag5241, govgovnahr </p>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Footer;
