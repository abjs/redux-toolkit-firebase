import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {GoogleAuthProvider,auth} from "../firebase";
import {
  setActiveUser,
  UserLogout,
} from "../features/userSlice";
function GoogleAuth() {
  const dispatch = useDispatch();
  const logout = useSelector(UserLogout);
  const SignIn = () => {
    auth.signInWithPopup(GoogleAuthProvider).then((e) => {
      console.log(e);
      dispatch(
        setActiveUser({
          userName: e.user.displayName,
          userEmail: e.user.email,
          userPhotoURL: e.user.photoURL,
          useremailVerified:e.user.emailVerified,
          logout: false,
          login: true,
        })
      );
    })
    .catch((e) => {
      console.log(e);
    });
    ;
  };
  return (
    <div className="GoogleAuth">
      <div className="GoogleAuthData">
        {logout &&
          <button onClick={SignIn}>Login With Google</button>
        }
      </div>
    </div>
  );
}

export default GoogleAuth;
