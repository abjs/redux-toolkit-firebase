import React from "react";
import { useSelector } from "react-redux";
import { GoogleAuthProvider, auth } from "../firebase";
import { UserLogout } from "../features/userSlice";
function GoogleAuth() {
  const logout = useSelector(UserLogout);
  const SignIn = () => {
    auth
      .signInWithPopup(GoogleAuthProvider)
      .then((e) => {
        console.log("Google Sign In With Popup Sussess");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div className="GoogleAuth">
      <div className="GoogleAuthData">
        {logout && <button onClick={SignIn}>Login With Google</button>}
      </div>
    </div>
  );
}

export default GoogleAuth;
