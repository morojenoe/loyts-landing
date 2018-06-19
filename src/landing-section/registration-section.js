import React, { Component } from 'react';
import RegistrationForm from './registration-form';

class RegistrationSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRegistered: false,
    };
  }

  registrationIsSuccessfull() {
    return (
      <div className="content-text">
        <p className="content-text-title">
          Registration is successful
        </p>
        <p className="content-text-subtitle">
          Download the app on your smartphone and sign in
        </p>
      </div>
    );
  }

  render() {
    if (this.state.isRegistered) {
      return this.registrationIsSuccessfull();
    }
    return (
      <RegistrationForm onRegister={() => this.setState({ isRegistered: true })} />
    );
  }
}

export default RegistrationSection;
