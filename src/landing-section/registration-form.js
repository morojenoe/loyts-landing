import React from 'react';
import PropTypes from 'prop-types';
import Button from 'muicss/lib/react/button';
import Input from 'muicss/lib/react/input';
import Form from 'muicss/lib/react/form';

function RegistrationForm(props) {
  return (
    <Form onSubmit={() => props.onRegister()}>
      <Input placeholder="Email" type="email" required />
      <Input placeholder="Password" type="password" required />
      <Button variant="raised" color="primary">Sign Up</Button>
    </Form>
  );
}

RegistrationForm.propTypes = {
  onRegister: PropTypes.func.isRequired,
};

export default RegistrationForm;
