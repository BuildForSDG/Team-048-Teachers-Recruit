/* eslint-disable max-len */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Jumbotron,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle
} from 'reactstrap';
import './Pages.css';

function Showcase() {
  return (
    <section className="show">
      <Jumbotron className="about-showcase">
        <h1 className="display-4">Opportunities On eRecruit Platform</h1>
      </Jumbotron>
    </section>
  );
}

function Opportunities() {
  return (
    <section className="container">
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

class VacancyPage extends React.Component {
  render() {
    return (
      <div>
        <Showcase />
        <main className="main">
          <Opportunities />
          <br />
          <br />
        </main>
      </div>
    );
  }
}

export default VacancyPage;
