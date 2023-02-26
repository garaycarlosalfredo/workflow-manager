import React from "react";
import { useRelayEnvironment } from "react-relay";
import SignInUserMutation from "../mutations/SignInUserMutation.mutation";
import { GoogleLogin } from "@react-oauth/google";
import { useCookies } from "react-cookie";
import "./MediaButtons.component.css";

const MediaButtons = () => {
  const environment = useRelayEnvironment();
  const [cookies, setCookie, removeCookie] = useCookies(["auth_token"]);
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
    removeCookie("auth_token", { path: "/" });
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
            setCookie("auth_token", credentialResponse.credential, {
              path: "/",
              expires: new Date(Date.now() + 60 * 60 * 1000),
            });
            googleLogin({
              credential: credentialResponse.credential,
            });
            console.log("credentialResponse", credentialResponse);
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
