import React, { useEffect } from "react";
import GoogleAuth from "./auth/GoogleAuth";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./firebase";
import {
  setuseremailVerified,
  setUserLogout,
  setUserName,
  setUserEmail,
  setUserPhotoURL,
  UserLogin,
} from "./features/userSlice";
import {setActiveUser} from "./features/userSlice";
function App() {
  const dispatch = useDispatch();
  const useremailVerified = useSelector(setuseremailVerified);
  const userName = useSelector(setUserName);
  const userEmail = useSelector(setUserEmail);
  const userPhotoURL = useSelector(setUserPhotoURL);
  const login = useSelector(UserLogin);
  const SignOut = () => {
    console.log("SiginOut");
    auth
      .signOut()
      .then(() => {
        console.log("user sign out Sussess")
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    // console.log("user login ", login, "useremailVerified", useremailVerified);
    // AuthState()
    auth.onAuthStateChanged((user) => {
      if(user){
        console.log("user is Loged In")
        dispatch(
          setActiveUser({
            userName: user.displayName,
            userEmail: user.email,
            userPhotoURL: user.photoURL,
            useremailVerified: user.emailVerified,
            logout: false,
            login: true,
          })
        );
      }
      else{
        console.log("user is not loged In")
        dispatch(
          setUserLogout({
            userName,
            userEmail,
            userPhotoURL,
            useremailVerified: false,
            logout: true,
            login: false,
          })
        );
      }
    });
  });


  return (
    <div>
      {login && (
        <p className="AppUseremailVerified">
          useremailVerified: {useremailVerified ? "Verified" : "Not Verified"}
        </p>
      )}
      {useremailVerified && userName && (
        <p className="AppUserName">Name : {userName}</p>
      )}
      {useremailVerified && userEmail && (
        <p className="AppUserEmail">Email : {userEmail}</p>
      )}
      {userPhotoURL !== null && <img src={userPhotoURL} alt="" />}
      <GoogleAuth />
      {!useremailVerified && login && <button>Send Email For Verification</button>}
      {login && <button onClick={SignOut}>Sign Out</button>}
    </div>
  );
}

export default App;
