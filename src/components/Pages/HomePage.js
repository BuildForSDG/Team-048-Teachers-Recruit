/* eslint-disable max-len */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import GuestNavbar from '../Navbar/GuestNavbar';
import { Link } from 'react-router-dom';
import {
  Jumbotron,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle
} from 'reactstrap';
import showcase from '../../images/showcase.png';
import teacher from '../../images/teacher.jpg';
import Testimonials from '../Features/Testimonials';
import './Pages.css';

function Showcase() {
  return (
    <section className="show">
      <Jumbotron className="showcase">
        <div className="showcase-left">
          <h1 className="display-4">Welcome To eRecruit Platform</h1>
          <p className="lead">Your Number Teachers Recruit Platform. We ensure that only qualified and well trained teachers are recruited in schools in developing areas in the country</p>
          <p className="lead">
            <Link className="btn btn-primary" to="/about-us">Learn More</Link>
          </p>
        </div>
        <div className="showcase-right">
          <img src={showcase} alt="eTeachersRecruit" />
        </div>
      </Jumbotron>
    </section>
  );
}

function Intro() {
  return (
    <section className="intro">
      <div className="intro-box">
        <h2>Who We Are?</h2>
        <p>We are eTeachersRecruit, your number one organization to reach out to when you need only the best teachers deployed to your community</p>
      </div>
      <div className="intro-box">
        <h2>What We Do?</h2>
        <p>eTeachersRecruit ensures that only qualified and well trained teachers are recruited in schools in developing areas in the country and beyond</p>
      </div>
      <div className="intro-box">
        <h2>Why Us?</h2>
        <p>We have passion for education and it is our dream that everyone gets quality education both those in developing areas and beyond</p>
      </div>
    </section>
  );
}

function AboutUs() {
  return (
    <section className="section about container">
      <div className="about-left">
        <img src={teacher} alt="eTeachersRecruit" />
      </div>
      <div className="about-right">
        <h2>About eRecruit Platform</h2>
        <p>eTeachersRecruit is a solution that will help substantially increase the supply of qualified teachers in developing countries</p>
        <p>We are Your Number One Teachers Recruit Platform. We ensure that only qualified and well trained teachers are recruited in schools in developing areas in the country and beyond.</p>
        <p>We have passion for education and it is our dream that everyone gets quality education both those in developing areas</p>
        <br />
        <Link className="btn btn-primary" to="/about-us">Learn More</Link>
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
          <Link className="btn btn-primary" to="/contact-us">Get In Touch</Link>
        </div>
      </div>
    </section>
  );
}

function Opportunities() {
  return (
    <section className="section container">
      <h2 className="op-h2">Opportunities</h2>
      <br />
      <br />
      <div className="opportunities">
        <Card>
          <CardBody>
            <CardTitle>English Teacher For Basic Two</CardTitle>
            <CardSubtitle>
              <span>Location:</span>
              Okon Community School, Adabia, Abia State, Nigeria
            </CardSubtitle>
            <br />
            <Link className="btn btn-primary" to="/">View</Link>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <CardTitle>English Teacher For Basic Two</CardTitle>
            <CardSubtitle>
              <span>Location:</span>
              Okon Community School, Adabia, Abia State, Nigeria
            </CardSubtitle>
            <br />
            <Link className="btn btn-primary" to="/">View</Link>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <CardTitle>English Teacher For Basic Two</CardTitle>
            <CardSubtitle>
              <span>Location:</span>
              Okon Community School, Adabia, Abia State, Nigeria
            </CardSubtitle>
            <br />
            <Link className="btn btn-primary" to="/">View</Link>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <CardTitle>English Teacher For Basic Two</CardTitle>
            <CardSubtitle>
              <span>Location:</span>
              Okon Community School, Adabia, Abia State, Nigeria
            </CardSubtitle>
            <br />
            <Link className="btn btn-primary" to="/">View</Link>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <GuestNavbar />
        <Showcase />
        <Intro />
        <main className="main">
          <AboutUs />
          <GetInTouch />
          <Opportunities />
          <Testimonials />
        </main>
      </div>
    );
  }
}

export default HomePage;
