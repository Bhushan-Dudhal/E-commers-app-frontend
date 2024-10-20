import { createReducer } from "@reduxjs/toolkit";


export const userReducer = createReducer({}, (builder) => { 
    builder.addCase("loginRequest", (state, action) => {
        state.loading = true;
    })
    builder.addCase("loginSuccess", (state, action) => {
        state.loading =false
        state.message=action.payload
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
    

    builder.addCase("getUserDataRequest", (state, action) => {
        state.loading = true;
    });
    builder.addCase("getUserDataSucess", (state, action) => {
        state.loading = false;
        state.isAuth = true;
        state.user = action.payload;
    });
    builder.addCase("getUserDataFail", (state, action) => {
        state.isAuth = false;
        state.error = action.payload;
    });
    

    //logout

    builder.addCase("logoutRequest", (state, action) => {
        state.loading = true;
    });
    builder.addCase("logoutSuccess", (state, action) => {
        state.loading = false;
        state.isAuth = false;
        state.user = null;
        state.message = action.payload;
    });
    builder.addCase("logoutFail", (state, action) => {
        state.isAuth = false;
        state.error = action.payload;
    });



    // builder.addCase("getUserDataRequest", (state, action) => {
    //     state.loading = true;
    // });
    // builder.addCase("getUserDataSucess", (state, action) => {
    //     state.loading = false;
    //     state.isAuth = true;
    //     state.user= action.payload;
    //     state.message = action.payload
    // });
    // builder.addCase("getUserDataFail", (state, action) => {
    //     state.isAuth = false;
    //     state.error = action.payload;
    // });
    // // LOGOUT
    // builder.addCase("logoutRequest", (state, action) => {
    //     state.loading = true;
    // });
    // builder.addCase("logoutSucess", (state, action) => {
    //     state.loading = false;
    //     state.isAuth = false;
    //     state.user = null;
    //     state.message = action.payload;
    // });
    // builder.addCase("logoutFail", (state, action) => {
    //     state.isAuth = false;
    //     state.error = action.payload;
    // });

   

})





