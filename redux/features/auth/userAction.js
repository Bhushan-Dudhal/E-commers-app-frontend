// import axios from "axios";
// // import { server } from "../../store";

// // action login
// export const login = (email, password) => async (dispatch) => {

//     console.log('call user action');


//     try {
//         dispatch({
//             type: "loginRequest",
//         });
//         // hitting node login api request
//         const { data } = await axios.post(`http://192.168.203.179:9095/api/user/login`,
//             { email, password },
//             {
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//             }
//         );
//         console.log('datda', data);

//         dispatch({
//             type: "logingSucess",
//             payload: data?.message
//         });
//         console.log("call data", email, password);
//         console.log("call payload", payload);



//     } catch (error) {
//         dispatch({
//             type: "loginFail",
//             payload: error.response?.data?.message || "Login failed. Please try again.",
//         });
//     }
// };
// // register action

import axios from "axios"

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type:"loginRequest"
        }) 
        
        const { data } = await axios.post('http://192.168.203.179:9095/api/user/login', {
            email, password
        },
            {
                headers: {
                "Content-Type": "application/json",
            }
            })
        dispatch({
            type: "loginSuccess",
            payload:data?.message
        })
    } catch (error) {
        dispatch({
            type: "loginFail",
            payload:error.response.data?.message
        })
    }
}