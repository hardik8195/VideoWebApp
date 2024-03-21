import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    comment:[]
}



const commentSlice = createSlice({
    name:"comment",
    initialState,
    reducers:{
        addComment:(state,action) => {
            const comment = {
                _id:action.payload._id,
                desc:action.payload.desc
            }
            state.comment.push(comment)
        },
        setItems:(state,action) => {
            state.comment = action.payload
        }
    }
})

export const { addComment,setItems } = commentSlice.actions;

export default commentSlice.reducer;