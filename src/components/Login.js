import React from 'react';
import UserInput from './UserInput.js'
import Paper from 'material-ui/Paper';

const style = {
  margin: '10% 35%',
  width: '30%',
  textAlign: 'center',
  display: 'inline-block',
};

const LoginPaper = () => (
  <Paper style={style} zDepth={2} rounded={false}>
    <UserInput />
  </Paper>
);

export default LoginPaper;
