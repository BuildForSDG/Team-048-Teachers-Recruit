import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import logo from '../../images/logo.png';
import '../../App.css';

const GuestNavbar = () => {
  // http://e-teachers-recruit.herokuapp.com/api/v1/user/login
  // http://e-teachers-recruit.herokuapp.com/api/v1/user/registration
  // http://e-teachers-recruit.herokuapp.com/api/v1/user/reset-password

  const [modal, setModal] = useState(false);
  const toggleM = () => setModal(!modal);

  const [modal2, setModal2] = useState(false);
  const toggleM2 = () => setModal2(!modal2);

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const signin = async (event) => {
    event.preventDefault();
    const data = {
      email: document.querySelector('#email').value,
      password: document.querySelector('#password').value
    };
    const resp = await fetch('http://e-teachers-recruit.herokuapp.com/api/v1/user/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
    const json = await resp.json();
    // eslint-disable-next-line no-console
    console.log(json);
    return json;
  };

  const signup = async (event) => {
    event.preventDefault();
    const data = {
      first_name: document.querySelector('#first_name').value,
      last_name: document.querySelector('#last_name').value,
      username: document.querySelector('#username').value,
      email: document.querySelector('#email').value,
      phone: document.querySelector('#phone').value,
      password: document.querySelector('#password').value,
      password_confirmation: document.querySelector('#password_confirmation').value
    };
    const resp = await fetch('http://e-teachers-recruit.herokuapp.com/api/v1/user/registration', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
    const json = await resp.json();
    // eslint-disable-next-line no-console
    console.log(json);
    return json;
  };

  return (
    <div>
      <Navbar light className="fixed-top" expand="md">
        <NavbarBrand href="/"><img src={logo} alt="eTeachersRecruit" /></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about-us">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/vacancies">Vacancies</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact-us">Contact Us</NavLink>
            </NavItem>
          </Nav>

          <Nav className="ml-auto" navbar>
            <Button color="primary" onClick={toggleM}>Signup</Button>
            <Modal isOpen={modal} toggle={toggleM}>
              <ModalHeader toggle={toggleM}>Modal title</ModalHeader>
              <ModalBody>
                <Form className="contact">
                  <FormGroup>
                    <Label for="first_name">First Name</Label>
                    <Input type="text" name="first_name" id="first_name" placeholder="First Name" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="last_name">Last Name</Label>
                    <Input type="text" name="last_name" id="last_name" placeholder="Last Name" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="username">Username</Label>
                    <Input type="text" name="username" id="username" placeholder="Username" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" name="email" id="email" placeholder="Email" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="phone">Phone Number</Label>
                    <Input type="text" name="phone" id="phone" placeholder="Phone Number" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="password">Password</Label>
                    <Input type="password" name="password" id="password" placeholder="Password" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="password_confirmation">Confirm Password</Label>
                    <Input type="password" name="password_confirmation" id="password_confirmation" placeholder="Confirm Password" />
                  </FormGroup>
                </Form>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={signup}>Signup</Button>
                {' '}
                <Button color="secondary" onClick={toggleM}>Cancel</Button>
              </ModalFooter>
            </Modal>

            <Button onClick={toggleM2}>Signin</Button>
            <Modal isOpen={modal2} toggle={toggleM2}>
              <ModalHeader toggle={toggleM2}>Sign in</ModalHeader>
              <ModalBody>
                <Form className="contact">
                  <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" name="email" id="email" placeholder="Email" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="password">Password</Label>
                    <Input type="password" name="password" id="password" placeholder="Password" />
                  </FormGroup>
                </Form>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={signin}>Signin</Button>
                {' '}
                <Button color="secondary" onClick={toggleM2}>Cancel</Button>
              </ModalFooter>
            </Modal>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default GuestNavbar;
