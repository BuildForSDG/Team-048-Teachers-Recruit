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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem modi eum aliquam consequuntur aitecto deserunt</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem modi eum aliquam consequuntur aitecto deserunt</p>
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
          <p>Basic Three Teacher</p>
          <p>Basic Three Teacher</p>
        </div>
      </div>
      <div className="small">Developed By Team-048 As #BuildForSDG Project</div>
    </footer>
  );
}

export default Footer;
