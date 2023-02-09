import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
       currentUser : null,
       isFetching : false,
       error: false
    },
    reducers: {
       loginStart: (state)=>{
        state.isFetching = true;
       },
       // We need action here because we are to send/add username and password as payload.
       loginSuccess:(state, action)=> {
        state.isFetching = false;
        state.currentUser = action.payload;
       },
       loginFailure:(state)=>{
        state.isFetching=false;
        state.error = true;
       }, 
     },
});

export const {  loginStart, loginSuccess, loginFailure  } = userSlice.actions;
export default userSlice.reducer;