/* eslint-disable max-len */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Link } from "react-router-dom";
import '../../App.css';
import logo from '../../images/logo.png';

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer-one">
          <img src={logo} alt="eRecriut" />
          <p>Your Number One Teachers Recruit Platform. We ensure that only qualified and well trained teachers are recruited in schools in developing areas in the country</p>
          <p>We have passion for education and it is our dream that everyone gets quality education both those in developing areas</p>
        </div>
        <div className="footer-two">
          <h3>LINKS:</h3>
          <p><Link style={{ color: '#ffffff' }} to="/">Home</Link></p>
          <p><Link style={{ color: '#ffffff' }} to="/about-us">About Us</Link></p>
          <p><Link style={{ color: '#ffffff' }} to="/vacancies">Vacancies</Link></p>
          <p><Link style={{ color: '#ffffff' }} to="/contact-us">Contact Us</Link></p>
        </div>
        <div className="footer-three">
          <h3>OPENINGS:</h3>
          <p>Basic Three Teacher</p>
          <p>Basic Four Teacher</p>
          <p>Basic Two Teacher</p>
          <p>Basic One Teacher</p>
        </div>
      </div>
      <div className="small">Developed By Team-048 As #BuildForSDG Project</div>
    </footer>
  );
}

export default Footer;
