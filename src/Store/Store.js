import { configureStore } from "@reduxjs/toolkit";
import UserDataSliceReducer from './UserDataSlice'
import AllPostsSliceReducer from './AllPostsSlice';

export const Store = configureStore({
    reducer:{
        UserData:UserDataSliceReducer,
        AllPosts:AllPostsSliceReducer
    }
})