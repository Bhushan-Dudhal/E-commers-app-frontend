import { createReducer } from "@reduxjs/toolkit";


export const userReducer = createReducer({}, (builder) => {
    builder.addCase("loginRequest", (state, action) => {
        state.loading = true;
    })
    builder.addCase("loginSuccess", (state, action) => {
        state.loading = false
        state.message = action.payload
        state.isAuth=true
    })
    builder.addCase("loginFail",(state,action)=> {
        state.isAuth = false
        state.error=action.payload
    })

    builder.addCase("clearError", (state) => {
        state.error=null
    })

    builder.addCase('clearMessage', (state) => {
        state.message=null
    })
    

//get user data
    builder.addCase("getUserdataRequest", (state, action) => {
        state.loading = true;
    })
    builder.addCase("getUserdataSuccess", (state, action) => {
        state.loading = false
        state.isAuth = true
        state.user=action.payload
    })
    builder.addCase("getUserdataFail", (state, action) => {
        state.isAuth = false
        state.error = action.payload
    })


    //logout
    builder.addCase("logoutRequest", (state, action) => {
        state.loading = true;
    });
    builder.addCase("logoutSucess", (state, action) => {
        state.loading = false;
        state.isAuth = false;
        state.user = null;
        state.message = action.payload;
    });
    builder.addCase("logoutFail", (state, action) => {
        state.isAuth = false;
        state.error = action.payload;
    });


})





