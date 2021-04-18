import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    userName:null,
    userEmail:null,
    userPhotoURL:null,
    logout:true,
    login:false
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setActiveUser:(state,action)=>{
            state.userName =action.payload.userName
            state.userEmail=action.payload.userEmail
            state.userPhotoURL=action.payload.userPhotoURL
            state.logout=action.payload.logout
            state.login=action.payload.login
        },
        setUserLogout:(state)=>{
            state.userName=null
            state.userEmail=null
            state.userPhotoURL=null
            state.logout=true
            state.login=false
        }
    }
});

export const {setActiveUser,setUserLogout} = userSlice.actions
export const setUserName = state => state.user.userName
export const setUserEmail = state => state.user.userEmail
export const setUserPhotoURL = state => state.user.userPhotoURL
export const UserLogin = state => state.user.login
export const UserLogout = state => state.user.logout
export default userSlice.reducer