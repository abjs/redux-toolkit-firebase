import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  useremailVerified: false,
  userName: null,
  userEmail: null,
  userPhotoURL: null,
  logout: true,
  login: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setActiveUser: (state, action) => {
      state.useremailVerified = action.payload.useremailVerified;
      state.userName = action.payload.userName;
      state.userEmail = action.payload.userEmail;
      state.userPhotoURL = action.payload.userPhotoURL;
      state.logout = action.payload.logout;
      state.login = action.payload.login;
    },
    setUserLogout: (state) => {
      state.useremailVerified = false;
      state.userName = null;
      state.userEmail = null;
      state.userPhotoURL = null;
      state.logout = true;
      state.login = false;
    },
  },
});

const setuseremailVerified = (state) => state.user.useremailVerified;
const setUserName = (state) => state.user.userName;
const setUserEmail = (state) => state.user.userEmail;
const setUserPhotoURL = (state) => state.user.userPhotoURL;
const UserLogin = (state) => state.user.login;
const UserLogout = (state) => state.user.logout;
export default userSlice.reducer;
export const { setActiveUser, setUserLogout } = userSlice.actions;
export {
  setuseremailVerified,
  setUserName,
  setUserEmail,
  setUserPhotoURL,
  UserLogin,
  UserLogout,
};
