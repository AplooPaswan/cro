import React from 'react';

import { GoogleLogin } from 'react-google-login';
import Navbar from '../Navbar';
// refresh token
import { refreshTokenSetup } from './refreshToken';

const clientId =
  '427283001518-7r1m5ubnjjqh46neaaehg39f6eobgka0.apps.googleusercontent.com';

function Login() {
  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    alert(`Logged in successfully welcome ${res.profileObj.name}`);
    refreshTokenSetup(res);
        
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`
    );
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;
