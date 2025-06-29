import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaWhatsapp
} from 'react-icons/fa';

import { BsTelephoneFill, BsEnvelopeFill } from 'react-icons/bs';



function PayilagamLandingPage() {
  return (
    <div>

      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-container">
          <div className="top-left">
            <BsTelephoneFill className="icon" /> +91 8344777333 &nbsp;&nbsp;
            <BsEnvelopeFill className="icon" /> info@payilagam.com
          </div>
          <div className="top-right">
            <FaFacebookF className="icon" />
            <FaTwitter className="icon" />
            <FaGooglePlusG className="icon" />
            <FaLinkedinIn className="icon" />
            <FaYoutube className="icon" />
            <FaInstagram className="icon" />
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="/" className="logo">
            <img
              src="https://payilagam.com/wp-content/uploads/2021/05/cam_logo_new.png"
              alt="Payilagam Logo"
            />
          </a>
          <ul className="nav-links">
            <li><a href="#" className="active">Home</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">Resources</a></li>
            <li><a href="#">Placement</a></li>
            <li><a href="#">Video Reviews</a></li>
            <li><a href="#">About Us</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-container">
          <div className="hero-text">
            <h1>Best Software Training <br /> Institute In <br />Chennai</h1>
            <div className="hero-subtext">
              <img src="https://payilagam.com/wp-content/uploads/2025/05/@Fd2X@HoSi5376-136x136.png" alt="icon" />
              <p>100% Project Oriented Training</p>
            </div>
            <button className="hero-button">Enroll Now</button>
          </div>
          <div className="hero-image">
            <img src="https://payilagam.com/wp-content/uploads/2025/05/@Fd2X@HoSi8805-846x970.png" alt="student" />
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="footer">
        <div className="footer-container">
          <div>Video Tutorials</div>
          <div>Video Reviews</div>
          <div>Projects Portfolio</div>
        </div>
      </div>

      {/* WhatsApp Floating */}
      <div className="whatsapp-button">
        <a
          href="https://wa.me/918344777333"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp size={24} />
        </a>
      </div>

    </div>
  );
};

export default PayilagamLandingPage;
