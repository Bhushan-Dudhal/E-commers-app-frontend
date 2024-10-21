import { createReducer } from "@reduxjs/toolkit"

export const userReducer = createReducer({token:null}, (builder) => {
    builder.addCase("loginRequest", (state, action) => {
        state.loading = true
    })

    builder.addCase("loginSuccess", (state, action) => {
        state.loading = false
        state.message = action.payload
        state.isAuth = true
        state.token=action.payload.token
    })

    builder.addCase("loginFail", (state, action) => {
        state.isAuth = false
        state.error = action.payload;
    })


    builder.addCase("clearError", (state) => {
        state.error = null
    })

    builder.addCase("clearMessage", (state) => {
        state.message=null
    })




    builder.addCase("getDataRequest", (state, action) => {
        state.loading = true
    })

    builder.addCase("getDataSuccess", (state, action) => {
        state.loading = false
        // state.message = action.payload
        state.isAuth = true
        state.user = action.payload
        console.log(state?.user);
        
    })

    builder.addCase("getDataFail", (state, action) => {
        state.isAuth = false
        state.error = action.payload;
    })



    builder.addCase("logoutRequest", (state, action) => {
        state.loading = true
    })

    builder.addCase("logoutSuccess", (state, action) => {
        state.loading = false
        state.isAuth = false
        state.user = null
        state.message=action.payload
    })

    builder.addCase("logoutFail", (state, action) => {
        state.isAuth = false
        state.error = action.payload;
    })


})