/* eslint-disable max-len */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './App.css';
import HomePage from './components/Pages/HomePage';
import GuestNavbar from './components/Navbar/GuestNavbar';
import logo from './images/logo.png';

function Header() {
  return (
    <header className="App-header">
      <GuestNavbar />
    </header>
  );
}

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
          <p>Home</p>
          <p>About</p>
          <p>Vacancies</p>
          <p>Contact</p>
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

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <HomePage />
        <Footer />
      </>
    );
  }
}

export default App;
