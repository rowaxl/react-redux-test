import commentReducer from 'reducers/comments';
import { ADD_COMMENT } from 'actions/types';

describe('test comments reducers', () => {
    it('handle add comment type', () => {
        const newComment = 'New Comment';

        const action = {
            type: ADD_COMMENT,
            payload: newComment
        };
    
        const newState = commentReducer([], action);

        expect(newState).toEqual([newComment]);
    });

    it('handle unexpected type', () => {
        const newComment = 'New Comment';

        const action = {
            type: 'EDIT_COMMENT',
            payload: newComment
        };

        const newState = commentReducer([], action);

        expect(newState).toEqual([]);
    });
});