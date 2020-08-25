import { ADD_COMMENT, FETCH_COMMENTS, CHANGE_AUTH } from './types';
import axios from 'axios';

export const addComment = comment => {
    return { type: ADD_COMMENT, payload: comment };
}

export const fetchComments = async () => {
    const response = await axios.get('http://jsonplaceholder.typicode.com/comments');

    const action = {
        type: FETCH_COMMENTS,
        payload: response.data
    };

    return action;
}

export const changeAuth = isLoggedIn => {
    return {
        type: CHANGE_AUTH,
        payload: isLoggedIn
    }
}