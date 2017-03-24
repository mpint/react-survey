import React, { PropTypes } from 'react';

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      submitted: false
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
        submitted: true
    });

    return this.props.submit(this.refs.username.value, this.refs.password.value);
  }

  render() {
    const renderStatus = (status) => {
      console.log('status', status);
      const message = status.isSending ?
        'working...' : (!status.isSending && !status.success) ?
          'bad credentials' :
          null;

      return (<small>{ message }</small>);
    }

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
        <div className="form-group">
          { this.state.submitted && renderStatus(this.props.status) }
        </div>
      </form>
    );
  }
}

LoginForm.propTypes = {
  submit: PropTypes.func.isRequired,
  status: PropTypes.object.isRequired
};

export default LoginForm;
