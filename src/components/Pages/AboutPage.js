/* eslint-disable max-len */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import {
  Jumbotron,
  Button
} from 'reactstrap';
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
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem modi eum aliquam consequuntur aitecto deserunt optio illo cumque, dolor, ad accusantium eaque Lorem ipsum dolor sit amet consectetur.</p>
        <p>Adipisicing elit. Dolorem modi eum aliquam consequuntur architecto deserunt optio illo cumque, dolor, ad accusantium eaque praesentium vitae totam unde nihil! Reiciendis cupiditate sit distincti quae inventore corrupti tempore!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem modi eum aliquam consequuntur architecto deserunt optio illo cumque, dolor, ad accusantium eaque Lorem ipsum dolor sit amet consectetur.</p>
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
          <Button color="primary">Get In Touch</Button>
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
        <p>To be the number platform for recruiting qualified teachers in Africa</p>
      </div>
      <div className="intro-box">
        <h2>Our Mission</h2>
        <p>Keep ensuring our process remains transparent to everyone, thereby gaining trust</p>
      </div>
      <div className="intro-box">
        <h2>Our Values</h2>
        <p>We value transparency, hard-work, deligence in service and honesty.</p>
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
