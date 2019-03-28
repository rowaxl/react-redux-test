import commentReducer from 'reducers/comments';
import { ADD_COMMENT } from 'actions/types';

describe('test comments reducers', () => {
    it('test add comment action', () => {
        const newComment = 'New Comment';

        const action = {
            type: ADD_COMMENT,
            payload: newComment
        };
    
        const newState = commentReducer([], action);

        expect(newState).toEqual([newComment]);
    });
});