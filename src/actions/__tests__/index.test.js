import { addComment } from 'actions';
import { ADD_COMMENT } from 'actions/types';

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
