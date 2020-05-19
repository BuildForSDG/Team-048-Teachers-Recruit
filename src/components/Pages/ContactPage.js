/* eslint-disable max-len */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import {
  Jumbotron,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import './Pages.css';

function Showcase() {
  return (
    <section className="show">
      <Jumbotron className="about-showcase">
        <h1 className="display-4">Get In Touch With eRecruit Platform</h1>
      </Jumbotron>
    </section>
  );
}

function ContactForm() {
  return (
    <Form className="container">
      <FormGroup>
        <Label for="name">Name</Label>
        <Input type="text" name="name" id="name" placeholder="Name" />
      </FormGroup>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input type="email" name="email" id="email" placeholder="Email" />
      </FormGroup>
      <FormGroup>
        <Label for="message">Message</Label>
        <Input type="textarea" name="message" id="Message" />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
}

class ContactPage extends React.Component {
  render() {
    return (
      <div>
        <Showcase />
        <main className="main">
          <br />
          <br />
          <ContactForm />
          <br />
          <br />
        </main>
      </div>
    );
  }
}

export default ContactPage;
