require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

import WelcomeComponent from './welcome'

class AppComponent extends React.Component {
  render() {
    return (
      <div>
        <WelcomeComponent checked={true} context="hehe" />
        <WelcomeComponent checked={true} context="hehe" />
        <div className="index">
          <div className="notice">This is the entry of blog.</div>
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
