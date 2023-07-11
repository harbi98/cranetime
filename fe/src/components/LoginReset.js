import * as React from 'react';
import '../App.min.css';
import { styled } from '@mui/material/styles';
import { Typography, TextField, Button, Link } from '@mui/material';

const ResetButton = styled(Button)({
  borderRadius: 3,
  padding: '21px 20px',
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  paddingLeft: '50px',
  paddingRight: '50px',
  lineHeight: 1.5,
  backgroundColor: '#0f72bd',
  borderColor: '#0f72bd',
  color: '#ffffff',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    backgroundColor: '#004f8a',
    borderColor: '#004f8a',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#0f72bd',
    borderColor: '#0f72bd',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});

function Login() {
  return (
    <div className="container">
      <div className="login-sidebar">
        <div className="login-sidebar-logo">
          <Link href="/">
            <img className='login-logo' src={require("../images/logo.png")} alt="Logo"/>
          </Link>
        </div>
        <div className="login-sidebar-info">
          <div className="login-sidebar-title">
            <h1 className='login-sidebar-title'>The construction logistics platform.</h1>
            <h2 className='login-sidebar-subtitle'>Liftinig Industry Standards.</h2>
          </div>
        </div>
        <div className="login-sidebar-bottom">
          <img className='login-logo-bottom' src={require("../images/logo_bottom.png")} alt="Bottom Logo"/>
        </div>
      </div>
      <div className="login-main">
        <div className="login-inner">
          <div className="login-center">
            <Typography className="login__title text__big">Reset your password</Typography>
            <div className="login-feilds">
              <div className="form-row">
                <Typography className="text__small">Email Address</Typography>
                <div className="form-group">
                  <div className="form-cell">
                    <div className="form__field">
                      <TextField type="email" name="login_email" className="input"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="login__buttons">
                <ResetButton variant='contained' href='/'>Reset Password</ResetButton>
            </div>
          </div>
          <div className="login-footer">
            <Typography className='text-small'>Cranetime © 2021</Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
