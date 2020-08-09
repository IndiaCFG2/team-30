import React, { useState } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import Header from "../../../layout/Header";

var firebase = require("firebase");
const Login = () => {
  const uiConfig = {
    signInSuccessUrl: "/teachers/dashboard",
    signInOptions: [firebase.auth.PhoneAuthProvider.PROVIDER_ID],
  };

  return (
    <div>
      <div style={{ marginTop: "50px" }}>
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </div>
    </div>
  );
};

export default Login;
