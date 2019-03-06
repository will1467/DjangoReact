import axios from 'axios';
import { USER_LOADING, USER_LOADED, AUTH_ERROR } from './types';
import { returnErrors } from './messages';

//CHECK TOKENS AND IMPORT USER
export const loadUser = () => (dispatch, getState) => {
    dispatch({
        type: USER_LOADING,
    })

    const token = getState().auth.token;

    const config = {
        headers: {
            'Content-Type' : 'application/json'
        }
    }

    if(token){
        config.headers['Authorization'] = "Token " + token;
    }

    axios.get("/api/auth/user", config)
    .then( (res) => {
        dispatch({
            type: USER_LOADED,
            payload: res.data
        })
    }).catch( (err) => {
        dispatch({type: returnErrors(err.response.data, err.response.status)})
        dispatch({type: AUTH_ERROR})
    })
}

