import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    video:null,
    status:false
}

const videoSlice = createSlice({
    name:"video",
    initialState,
    reducers:{
        setVideo:(state,action) => {
            state.status = true
            state.video = action.payload
        },
    }
})

export const {setVideo} = videoSlice.actions;

export default videoSlice.reducer;