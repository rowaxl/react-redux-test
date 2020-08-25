import { addComment, fetchComments, changeAuth } from '..';
import { ADD_COMMENT, FETCH_COMMENT, CHANGE_AUTH } from '../types';

describe('addComment action test', () => {
    it('has the correct type', () => {
        const action = addComment();
        expect(action.type).toEqual(ADD_COMMENT);
    });

    it('has the correct payload', () => {
        const newComment = 'A new comment';
        const action = addComment(newComment);
        expect(action.payload).toEqual(newComment);
    });
});

describe('fetchComments action test', () => {
    it('has the correct type', () => {
        const action = fetchComments();
        expect(action.type).toEqual(FETCH_COMMENT);
    });

    it('has the correct payload', async () => {
        const action = await fetchComments();
        expect(action.payload.length).toBeGreaterThanOrEqual(0);
    });
});

describe('changeAuth action test', () => {
    it('has the correct type', () => {
        const action = changeAuth(true);
        expect(action.type).toEqual(CHANGE_AUTH);
    });

    it('has the correct payload', () => {
        const isLoggedIn = true;
        const action = changeAuth(isLoggedIn);
        expect(action.payload).toEqual(isLoggedIn);
    });
});
