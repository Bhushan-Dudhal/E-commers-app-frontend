import { createReducer } from "@reduxjs/toolkit";

// export const userReducer = createReducer({}, (builder) => {
//     console.log("call user Reducer ");
    
//     // LOGIN CASE
//     builder.addCase("loginRequest", (state, action) => {
//         state.loading = true;
//     });
//     builder.addCase("logingSuccess", (state, action) => {
//         state.loading = false;
//         state.message = action.payload.message;
//         state.isAuth = true;
//         // state.token = action.payload.token;
//     });
//     builder.addCase("loginFail", (state, action) => {
//         state.isAuth = false;
//         state.error = action.payload;
//     });

//     builder.addCase('clearError', (state) => {
//         state.error=null
//     })

//     builder.addCase('clearMessage', (state) => {
//     state.message=null
//     })
//     // ERROR MESSAGE CASE

// });


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
})