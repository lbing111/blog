require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

// import WelcomeComponent from './Button'
import Login from './Login'

const style = {
  textAlign: 'center'
};


class AppComponent extends React.Component {
  render() {
    return (
      <Login style={style}/>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
