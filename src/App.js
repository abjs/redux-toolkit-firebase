import React, { useEffect } from "react";
import GoogleAuth from "./auth/GoogleAuth";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./firebase";
import {
  setUserLogout,
  setUserName,
  setUserEmail,
  setUserPhotoURL,
  UserLogin
} from "./features/userSlice";
function App() {
  const dispatch = useDispatch();
  const userName = useSelector(setUserName);
  const userEmail = useSelector(setUserEmail);
  const userPhotoURL = useSelector(setUserPhotoURL);
  const login = useSelector(UserLogin);
  const SignOut = () => {
    console.log("SiginOut");
    auth
      .signOut()
      .then(() => {
        dispatch(
          setUserLogout({
            userName,
            userEmail,
            userPhotoURL,
            // logout: true,
            // login: false,
          })
        );
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    console.log("user login ",login);
  }, [login]);
  return (
    <div>
      {userName && <p className="AppUserName">Name : {userName}</p>}
      {userEmail && <p className="AppUserEmail">Email : {userEmail}</p>}
      {userPhotoURL !== null && <img src={userPhotoURL} alt="" />}
      <GoogleAuth />
      {login && <button onClick={SignOut}>Sign Out</button>}
    </div>
  );
}

export default App;
