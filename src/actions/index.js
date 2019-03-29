import { ADD_COMMENT, FETCH_COMMENTS } from 'actions/types';
import comments from 'api/comments';

export const addComment = comment => {
    return { type: ADD_COMMENT, payload: comment };
}

export const fetchComments = async () => {
    const response = await comments.get();

    return {
        type: FETCH_COMMENTS,
        payload: response.data
    };
}