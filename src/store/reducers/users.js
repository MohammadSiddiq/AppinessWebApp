import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    users: [],
    loading: true
};

const fetchUsersStart = ( state, action ) => {
    return updateObject( state, { loading: true } );
};

const fetchUsersSuccess = ( state, action ) => {
    return updateObject( state, {
        users: action,
        loading: false
    } );
};

const fetchUsersFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.FETCH_USERS_START: return fetchUsersStart( state, action );
        case actionTypes.FETCH_USERS_SUCCESS: return fetchUsersSuccess( state, action );
        case actionTypes.FETCH_USERS_FAIL: return fetchUsersFail( state, action );
        default: return state;
    }
};

export default reducer;



