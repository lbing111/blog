/**
 * Created by liubing on 16/7/18.
 */
import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

const buttonStyle = {
  width: '70%',
  marginTop: '30px'
}

const canceStyle = {
  color: 'grey',
  width: '70%',
  marginTop: 30,
  marginBottom: 30
}

const inputStyle = {
  textAlign: 'center',
  width: '70%'
}

function handleSubmit (){
  console.log('login')
}

const UserInput = () => (
  <div className="login">
    <h1>Log In</h1>
    <TextField floatingLabelText='用户名' style={inputStyle} />
    <TextField floatingLabelText='密码' type='password' style={inputStyle} />
    <FlatButton style={buttonStyle} primary={true} onClick={handleSubmit} label="Login" />
    <FlatButton label="cance" style={canceStyle} primary={true} />
  </div>
);

export default UserInput;
