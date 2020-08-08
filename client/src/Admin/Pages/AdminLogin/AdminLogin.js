import React, { useState } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
var firebase = require("firebase");

const AdminLogin = () => {
  const uiConfig = {
    signInSuccessUrl: "/admin/dashboard",
    signInOptions: [firebase.auth.PhoneAuthProvider.PROVIDER_ID],
  };

  return (
    <div
      style={{
        marginTop: "5%",
      }}
    >
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
};

export default AdminLogin;
