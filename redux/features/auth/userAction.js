import axios from "axios"

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type:"loginRequest"
        }) 
        
        const { data } = await axios.post('http://192.168.36.179:9095/api/user/login', {
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

//get user data access


export const getUserData = () => async (dispatch) => {
    try {
        dispatch({
            type: "getUserdataRequest"
        })

        const { data } = await axios.get('http://192.168.36.179:9095/api/user/profile')
        dispatch({
            type: "getUserdataSuccess",
            payload: data?.user
        })
    } catch (error) {
        dispatch({
            type: "getUserdataFail",
            payload: error.response.data?.message
        })
    }
}










export const logout = () => async (dispatch) => {
    try {
        dispatch({
            type: "logoutRequest",
        });
        // hitting node login api request
        const { data } = await axios.get(`http://192.168.36.179:9095/api/user/logoutt`);
        dispatch({
            type: "logoutSucess",
            payload: data?.message,
        });
    } catch (error) {
        dispatch({
            type: "logoutFail",
            payload: error.response.data?.message,
        });
    }
};