import axios from 'axios';

import * as actionTypes from './actionTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, userId) => {
    console.log("token: "+token+",userId: "+userId);
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const logout = () => {
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000);
    };
};

export const auth = (email, password, isSignup) => {
    console.log("email: "+email+",password: "+password);
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        };
        let url = 'http://localhost:4000/login';
        
        axios.get(url, authData)
            .then(response => {
                console.log(response.data);
                if(email === response.data[0].username && password === response.data[0].password ) {
                    dispatch(authSuccess("zDX23g", "hurday"));
                    dispatch(checkAuthTimeout(3600));
                }
                
            })
            .catch(err => {
                console.log("error: "+JSON.stringify(err))
                dispatch(authFail(err.response.data.error));
            });
    };
};