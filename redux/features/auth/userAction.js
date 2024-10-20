import axios from "axios"

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type:"loginRequest"
        }) 
        
      const { data } = await axios.post('http://192.168.132.179:9095/api/user/login', {
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
      // console.log(data.message);
      // console.log(data.user);
      
      
    } catch (error) {
        dispatch({
            type: "loginFail",
            payload:error.response.data.message
        })
    }
}

//get user data access
export const getUserData = () => async (dispatch) => {
    try {
        dispatch({
            type: "getUserDataRequest",
        });
        // hitting node login api request
        const { data } = await axios.post(`http://192.168.132.179:9095/user/profile`);
        dispatch({
            type: "getUserDataSucess",
            payload: data?.user,
        });
    } catch (error) {
        dispatch({
            type: "getUserDataFail",
            payload: error.response.data.message,
        });
    }
};





export const logout = () => async (dispatch) => {
    try {
        dispatch({
            type: "logoutRequest",
        });
        // hitting node login api request
        const { data } = await axios.get('http://192.168.132.179:9095/user/logout');
        dispatch({
            type:"logoutSuccess",
            payload: data?.message,
        });
    } catch (error) {
        dispatch({
            type:"logoutFail",
            payload: error.response.data.message,
        });
    }
};



// export const getUserData = () => async (dispatch) => {
//   try {
//     dispatch({
//       type: "getUserDataRequest",
//     });
//     // hitting node login api request
//     const { data } = await axios.post('http://192.168.132.179:9095/user/profile');
//     dispatch({
//       type: "getUserDataSucess",
//       payload: data?.user,
//     });
//     console.log(data.user);
    
//   } catch (error) {
//     dispatch({
//       type: "getUserDataFail",
//       payload: error.response.data.message,
//     });
//   }
// };
// // LOGOUT ACTION
// export const logoutt = () => async (dispatch) => {
//   try {
//     dispatch({
//       type: "logoutRequest",
//     });
//     // hitting node login api request
//     const { data } = await axios.get('http://192.168.132.179:9095/user/logout');
//     dispatch({
//       type: "logoutSucess",
//       payload: data?.message,
//     });
//   } catch (error) {
//     dispatch({
//       type: "logoutFail",
//       payload: error.response.data.message,
//     });
//   }
// };








