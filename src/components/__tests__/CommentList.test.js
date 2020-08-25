import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Root from '../../Root';
import CommentList from '../CommentList';

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
        const tree = renderer.create(wrapped).toJSON().children;

        expect(tree.every((comment, i) => comment.children[0] === comments[i])).toBeTruthy();
    });
});
