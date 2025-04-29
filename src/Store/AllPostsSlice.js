import { createSlice } from "@reduxjs/toolkit";

const AllPostsSlice = createSlice({
    name:'AllPosts',
    initialState:[],
    reducers:{
        setAllPosts:(state,action)=>{
            return action.payload;
        }
    }
})



export const {setAllPosts} = AllPostsSlice.actions
export default AllPostsSlice.reducer