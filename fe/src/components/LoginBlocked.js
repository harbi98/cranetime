import * as React from 'react';
import '../App.min.css';
import { Typography, Link } from '@mui/material';

function LoginBlocked() {
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
          <div className="login-center login-blocked">
            <Typography variant="h5" className="login-blocked__title" sx={{marginBottom: '30px'}}>You have been temporarily blocked</Typography>
            <Typography className="login-blocked__text">Due to too many failed login attempts. You can try again in <strong>10 minutes</strong>. If this continues contact your site coordinator to reset your account.</Typography>
          </div>
          <div className="login-footer">
            <Typography className='text-small'>Cranetime © 2021</Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginBlocked;
