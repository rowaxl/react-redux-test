import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import CommentList from 'components/CommentList';

describe('test CommentList components', () => {
    let wrapped;

    beforeEach(() => {
        const initialState = {
            comments: ['Comment1', 'Comment2']
        };

        wrapped = mount(
            <Root initialState={initialState}>
                <CommentList />
            </Root>
        );
    });

    it('creates one LI element per one comment', () => {
        expect(wrapped.find('li').length).toEqual(2);
    });

    it('shows the text for each comment', () => {
        const comments = ['Comment1', 'Comment2'];
        console.log(wrapped.render().text());
    });
});
