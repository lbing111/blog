import React from 'react';
import UserInput from './UserInput.js'
import Paper from 'material-ui/Paper';

const style = {
  margin: '10% 35%',
  width: '30%',
  textAlign: 'center',
  display: 'inline-block',
};

const PaperExampleSimple = () => (
  <Paper style={style}>
    <UserInput />
  </Paper>
);

export default PaperExampleSimple;
