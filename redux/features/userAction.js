import { server } from "../store";
import axios from "axios"
import AsyncStorege from "@react-native-async-storage/async-storage"

export const login = (email,password) => async (dispatch) => {
   try {
       dispatch({
           type:"loginRequest"
       })
       const  data = await axios.post(`${server}/user/login`, {
          email,password
       }, {
            headers:{
               "Content-Type":"application/json"
           }
       })
       dispatch({
           type: "loginSuccess",
            payload:data
        
       })
       await AsyncStorege.setItem("@token",data?.token)
 console.log(data)
       

   } catch (error) {
       dispatch({
           type: 'loginFail',
           payload:error.response.data.message
       })
    
   } 
}









export const getUserData = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: "getDataRequest"
        })
        const { data } = await axios.post(`${server}/user/profile`,{email,password})
        console.log("getdata",data);
        
        dispatch({
            type: "getDataSuccess",
            payload: data?.user

        })  
        console.log(data?.message);
        

    } catch (error) {
        dispatch({
            type:'getDataFail',
            payload: error.response.data.message
        })

    }
}










export const logout = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: "logoutRequest"
        })
        const { data } = await axios.get(`${server}/user/logout`, { email, password })
        console.log("getdata", data);

        dispatch({
            type: "logoutSuccess",
            payload: data?.message

        })
        console.log(data?.message);


    } catch (error) {
        dispatch({
            type: 'logoutFail',
            payload: error.response.data.message
        })

    }
}