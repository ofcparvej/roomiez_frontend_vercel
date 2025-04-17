
import {createSlice} from '@reduxjs/toolkit'

const authSlice=createSlice({
    name:'auth',
    initialState:{
       email:"",
       accountType:"",
       isAuth:false},
    reducers:{
        logInUser:(state,action)=>{
            state.email=action.payload.email;
            state.accountType=action.payload.accountType;
            state.isAuth=true;
            console.log("all state data",action.payload);
            console.log("state email is",state.email);
            console.log("state email is",state.accountType);
            // console.log("state username is",state.username);
            // console.log("state id is",state.id);
            // console.log("Authenticated? ",state.isAuth)
        },
        logOutUser:(state,action)=>{
            state.email="";
            state.accountType="",
            state.isAuth=false;
        },
    }
})
console.log(authSlice.actions);
export default authSlice.reducer;
export const {logInUser,logOutUser}=authSlice.actions;