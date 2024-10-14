import { server } from "../../store";
import axios from "axios";

//action  login

export const login = (email,password) => async (dispatch) => {
    try {
        dispatch({
            type:'loginRequest'
        })

        const { data } = await axios.post(`${server}/user/login`, { email, password }, {
        headers: {
                'Content-Type':'application/json',
        }
        })
        console.log(data);
        
        
        dispatch({
            type:'logingSuccess',
           payload:data?.message
        })
        
    } catch (error) {
        dispatch({
            type: "loginFailed",
            payload:error.response.data.message
       })
        
    }
}

