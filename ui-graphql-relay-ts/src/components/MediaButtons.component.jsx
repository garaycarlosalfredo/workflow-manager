import React from "react";
import { useRelayEnvironment } from "react-relay";
import SignInUserMutation from "../mutations/SignInUserMutation.mutation";
import { GoogleLogin } from "@react-oauth/google";
import "./MediaButtons.component.css";

const MediaButtons = () => {
  const environment = useRelayEnvironment();
  const googleLogin = (values) => {
    SignInUserMutation(environment, values)
      .then((response) => {
        console.log("response: ", response);
      })
      .catch((err) => {
        console.log("err = ", err);
      });
  };
  const formLogin = (values) => {
    SignInUserMutation(environment, values)
      .then((response) => {
        console.log("response: ", response);
      })
      .catch((err) => {
        console.log("err = ", err);
      });
  };
  return (
    <div>
      <div className="form-login-button-container">
        <button
          className="form-login-button"
          onClick={() =>
            formLogin({
              credential: "formulario",
            })
          }
        >
          SIGN
        </button>
      </div>
      <div className="google-login-button-container">
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            googleLogin({
              credential: credentialResponse.credential,
            });
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </div>
    </div>
  );
};

export default MediaButtons;
