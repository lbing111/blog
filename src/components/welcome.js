/**
 * Created by liubing on 16/7/14.
 */
require('styles/welcome.css')

import React from 'react';

class WelcomeComponent extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <p className="wel">{this.props.context}</p>
      </div>
    );
  }
}
WelcomeComponent.defaultProps = {
};

export default WelcomeComponent;
