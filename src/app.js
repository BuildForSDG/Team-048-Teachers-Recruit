/* eslint-disable max-len */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/Pages/HomePage';
import AboutPage from './components/Pages/AboutPage';
import VacancyPage from './components/Pages/VacancyPage';
import ContactPage from './components/Pages/ContactPage';
import Footer from './components/Features/Footer';
import GuestNavbar from './components/Navbar/GuestNavbar';

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <GuestNavbar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about-us" component={AboutPage} />
            <Route path="/vacancies" component={VacancyPage} />
            <Route path="/contact-us" component={ContactPage} />
          </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}

export default App;
