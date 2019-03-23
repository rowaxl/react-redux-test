import React from 'react';
import { mount } from 'enzyme';
import CommentBox from '../CommentBox';

describe('test CommentBox components', () => {
    let wrapped;

    beforeEach(() => {
        wrapped = mount(<CommentBox />);
    });
    
    afterEach(() => {
        wrapped.unmount();
    });

    it('has text area and button', () => {
        expect(wrapped.find('textarea').length).toEqual(1);
        expect(wrapped.find('button').length).toEqual(1);
    });

    it('change text area value and check state changed', () => {
        const value = 'test comment';
        wrapped.find('textarea').simulate('change', { target: { value } });
        expect(wrapped.state('comment')).toEqual(value);
    });
});