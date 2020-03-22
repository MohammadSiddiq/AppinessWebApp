import * as actionTypes from './actionTypes';
import axios from '../../axios-users';


export const fetchUsersSuccess = ( users ) => {
    return {
        type: actionTypes.FETCH_USERS_SUCCESS,
        users: users
    };
};

export const fetchUsersFail = ( error ) => {
    return {
        type: actionTypes.FETCH_USERS_FAIL,
        error: error
    };
};

export const fetchUsersStart = () => {
    return {
        type: actionTypes.FETCH_USERS_START
    };
};

export const fetchUsers = (token) => {
    console.log("fetchUsers: "+token);
    if(token != null) {
        return dispatch => {
            dispatch(fetchUsersStart());
            axios.get( 'http://localhost:4000/user')
                .then( res => {
                    const fetchedUsers = [];
                    for ( let key in res.data ) {
                        fetchedUsers.push( {
                            ...res.data[key],
                            id: key
                        } );
                    }
                    dispatch(fetchUsersSuccess(fetchedUsers));
                } )
                .catch( err => {
                    dispatch(fetchUsersFail(err));
                } );
        };
    } else {
        return dispatch => { dispatch(fetchUsersFail("User Auth Failed")) };
    }
    
};