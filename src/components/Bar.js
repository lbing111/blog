/**
 * Created by liubing on 16/7/15.
 */
import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import UserInput from './UserInput.js.js'

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

export default class TabsExampleControlled extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'a',
    };
  }

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };

render() {
  return (
    <div>
      <h2 style={styles.headline}>登陆</h2>
      <UserInput/>
    </div>
  );
}
}
