import { createReducer } from "@reduxjs/toolkit";

export const userReducer = createReducer({}, (builder) => {
    builder.addCase("loginRequest", (state, action) => {
        state.loading = true;
    });
    builder.addCase('logingSuccess', (state, action) => {
        state.loading = false
        state.message = action.payload
        state.isAuth =true
    })
    builder.addCase('loginFailed', (state, action) => { 
        state.isAuth = false
        state.error = action.payload;

    })

    builder.addCase('clearError', (state) => {
        state.error = null
    })

    builder.addCase('clearMassage', (state) => {
        state.message=null
    })
})