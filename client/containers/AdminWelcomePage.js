import React, { Component } from 'react';

class AdminWelcomePage extends Component {
  render() {
    return (
      <div className="admin-welcome-page">
        <div className="d-flex justify-content-center align-items-center message">
          <small>
            Use the buttons above to create new
            survey questions or list the existing ones
          </small>
        </div>
      </div>
    );
  };
};

export default AdminWelcomePage;
