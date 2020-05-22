import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import SignUpForm from './components/signUpForm';
import EducationDetails from './components/educationDetails';
import RegistrationForm from './components/registrationForm';
import Home from './components/home';
import WorkExperience from './components/workExperience';
import ConfirmDetails from './components/confirmDetails';
import Success from './components/SuccessField';
import LoginForm from './components/loginForm';
import VerifyEmail from './components/verifyEmail';
import ResetPassword from './components/resetPassword';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome To Team-048 eTeachersRecruit Application</h1>
      </header>

      <Switch>
        <Route path="/register" component={RegistrationForm} />
        <Route path="/education" component={EducationDetails} />
        <Route path="/workExperience" component={WorkExperience} />
        <Route path="/confirm" component={ConfirmDetails} />
        <Route path="/success" component={Success} />
        <Route path="/signup" component={SignUpForm} />
        <Route path="/verifyEmail" component={VerifyEmail} />
        <Route path="/login" component={LoginForm} />
        <Route path="/passwordReset" component={ResetPassword} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
