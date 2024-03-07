import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:null,
    status:false
}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        loginSuccess:(state,action) => {
            state.status = true
            state.user = action.payload
        },
        logout :(state) => {
            state.user = null,
            state.status = false
        }    
    }
})

export const {loginSuccess,logout} = authSlice.actions;

export default authSlice.reducer;