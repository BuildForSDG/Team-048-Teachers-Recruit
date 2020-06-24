/* eslint-disable max-len */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import {
  Jumbotron
} from 'reactstrap';
import { Link } from 'react-router-dom';
import './Pages.css';

function Showcase() {
  return (
    <section className="show">
      <Jumbotron className="about-showcase">
        <h1 className="display-4">About To eRecruit Platform</h1>
      </Jumbotron>
    </section>
  );
}

function AboutUs() {
  return (
    <section className="about container">
      <div className="about-left">
        <br />
        <br />
        <img src="https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="eTeachersRecruit" />
      </div>
      <div className="about-right">
        <br />
        <br />
        <h2>About eRecruit Platform</h2>
        <p>eTeachersRecruit is a solution that will help substantially increase the supply of qualified teachers in developing countries</p>
        <p>
          One thing is that teachers are the key to a better future for the next generation.
          <em>Show me a child with learning passion but have a &quot;bad&quot; teacher and I will show you a child that will hate education. </em>
          This is why we ensure that you do not just get a teacher but one that understand what it takes to be called a teacher
        </p>
        <p>We are Your Number One Teachers Recruit Platform. We ensure that only qualified and well trained teachers are recruited in schools in developing areas in the country and beyond.</p>
        <p>We have passion for education and it is our dream that everyone gets quality education both those in developing areas</p>
      </div>
    </section>
  );
}

function GetInTouch() {
  return (
    <section className="section">
      <div className="hero-image">
        <div className="hero-text">
          <h1>Have A Need To Reach Out To Us?</h1>
          <br />
          <Link className="btn btn-primary" to="/contact-us">Learn More</Link>
        </div>
      </div>
    </section>
  );
}

function ERecruit() {
  return (
    <section className="intro about-intro container">
      <div className="intro-box">
        <h2>Our Vision</h2>
        <p>To be the number platform for recruiting qualified teachers in Africa and beyond</p>
      </div>
      <div className="intro-box">
        <h2>Our Mission</h2>
        <p>Keep ensuring our process remains transparent to everyone, thereby gaining trust</p>
      </div>
      <div className="intro-box">
        <h2>Our Values</h2>
        <p>We value transparency, empathy, hard-work, deligence in service and honesty.</p>
      </div>
    </section>
  );
}

class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <Showcase />
        <main className="main">
          <AboutUs />
          <GetInTouch />
          <ERecruit />
        </main>
        <br />
        <br />
      </div>
    );
  }
}

export default AboutPage;
