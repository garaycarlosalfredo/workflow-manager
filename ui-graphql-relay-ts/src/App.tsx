import React from 'react';
import './App.css';
import './media-login-buttons.css';
import { GoogleLogin } from '@react-oauth/google';
function App() {
  return (
    <div className="App">
      <div className='media-login-buttons'>
        <GoogleLogin
          onSuccess={credentialResponse => {
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />
      </div>

    </div>
  );
}

export default App;
