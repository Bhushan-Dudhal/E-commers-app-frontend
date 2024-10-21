import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./features/userReducer";


export default configureStore({
    reducer: {
       user:userReducer 
    }
})


export const server ='http://192.168.51.179:9095/api'