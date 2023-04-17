import * as React from 'react';
import '../App.min.css';
import { styled } from '@mui/material/styles';
import { Box, Typography, TextField, Button, Link } from '@mui/material';

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
    <Box className="container">
      <Box className="login-sidebar">
        <Box className="login-sidebar-logo">
          <Link href="/">
            <img className='login-logo' src={require("../images/logo.png")} alt="Logo"/>
          </Link>
        </Box>
        <Box className="login-sidebar-info">
          <Box className="login-sidebar-title">
            <h1 className='login-sidebar-title'>The construction logistics platform.</h1>
            <h2 className='login-sidebar-subtitle'>Liftinig Industry Standards.</h2>
          </Box>
        </Box>
        <Box className="login-sidebar-bottom">
          <img className='login-logo-bottom' src={require("../images/logo_bottom.png")} alt="Bottom Logo"/>
        </Box>
      </Box>
      <Box className="login-main">
        <Box className="login-inner">
          <Box className="login-center">
            <Typography className="login__title text__big">Reset your password</Typography>
            <Box className="login-feilds">
              <Box className="form-row">
                <Typography className="text__small">Email Address</Typography>
                <Box className="form-group">
                  <Box className="form-cell">
                    <Box className="form__field">
                      <TextField type="email" name="login_email" className="input"/>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className="login__buttons">
                <ResetButton variant='contained' href='/'>Reset Password</ResetButton>
            </Box>
          </Box>
          <Box className="login-footer">
            <Typography className='text-small'>Cranetime © 2021</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Login;
