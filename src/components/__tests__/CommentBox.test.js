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
        wrapped.update();

        expect(wrapped.state('comment')).toEqual(value);
        expect(wrapped.find('textarea').prop('value')).toEqual(value);
    });

    it('when click submit button, textarea will be clean', () => {
        const value = 'new comment';
        wrapped.find('textarea').simulate('change', { target: { value } });
        wrapped.update();

        wrapped.find('form').simulate('submit');
        expect(wrapped.find('textarea').prop('value')).toEqual('');
    })
});