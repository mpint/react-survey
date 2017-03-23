import React, { PropTypes } from 'react';

class LoginForm extends React.Component {
  constructor() {
    super();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    return this.props.submit(this.refs.username.value, this.refs.password.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label for="InputEmail">Username</label>
          <input required ref="username" type="text" className="form-control" id="InputEmail" placeholder="Enter username" />
        </div>
        <div className="form-group">
          <label for="InputPassword">Password</label>
          <input required ref="password" type="password" className="form-control" id="InputPassword" placeholder="Password" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
};

LoginForm.propTypes = {
  submit: PropTypes.func.isRequired
};

export default LoginForm;
