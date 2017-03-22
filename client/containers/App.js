import React, { Component, PropTypes } from 'react';
import NavBar from '../components/NavBar';
import config from '../config';

class App extends Component {
  componentWillMount = () => {
    console.log('yo')
  }

  getChildContext = () =>  {
    return {config};
  }

  render() {
    return (
      <div>
        <NavBar />
        { this.props.children }
      </div>
    );
  }
}

App.childContextTypes = {
  config: PropTypes.object.isRequired
};

export default App;
