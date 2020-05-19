/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './App.css';

function Header() {
  return (
    <header className="App-header">
      <h1>Welcome To Team-048 eTeachersRecruit Application</h1>
    </header>
  );
}

function Footer() {
  return (
    <footer className="App-footer">
      <small>Developed By Team-048 As #BuildForSDG Project</small>
    </footer>
  );
}

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main className="main" />
        <Footer />
      </>
    );
  }
}

export default App;
