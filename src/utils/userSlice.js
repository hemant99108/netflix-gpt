import { createSlice } from "@reduxjs/toolkit";


const userSlice=createSlice(
    {
        name:'user',
        initialState:null,

        //as soon as we login these reducers will be dispatched 
        reducers:{
            addUser:(state,action)=>{
                return action.payload;
                 },
            
            removeUser:(state,action)=>{
                return null;
            },

        },
    }
);

export const {addUser,removeUser}=userSlice.actions

export default userSlice.reducer

