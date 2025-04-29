import { createSlice } from "@reduxjs/toolkit";

const loadStateFromLocalStorage = () => {
    try {
      const serializedState = localStorage.getItem("userState");
      if (serializedState === null) return {}; // If no saved state, return an empty object
      return JSON.parse(serializedState); // Return parsed state if found
    } catch (e) {
      console.error("Could not load state from localStorage", e);
      return {}; // Return empty object in case of error
    }
  };
  
  // Function to save state to localStorage
  const saveStateToLocalStorage = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem("userState", serializedState);
    } catch (e) {
      console.error("Could not save state to localStorage", e);
    }
  };
  
  // Initialize the state from localStorage if available
  const initialState = loadStateFromLocalStorage() || {
    name: '',
    email: '',
    username: '',
    designation: '',
    about: '',
    title: '',
    isAuthenticated: false,
  };


const UserDataSlice = createSlice({
    name:'UserData',
    initialState,
    reducers:{
        setUserData:(state,action)=>{
            Object.assign(state, action.payload);
            saveStateToLocalStorage(state);
        }
    }

})

export const {setUserData} = UserDataSlice.actions;
export default UserDataSlice.reducer;