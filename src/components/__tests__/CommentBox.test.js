import React from 'react';
import { mount } from 'enzyme';
import CommentBox from '../CommentBox';

describe('test CommentBox components', () => {
    let wrapped;

    beforeEach(() => {
        wrapped = mount(<CommentBox />);
    });

    it('has text area and button', () => {
        expect(wrapped.find('textarea').length).toEqual(1);
        expect(wrapped.find('button').length).toEqual(1);
    });

    afterEach(() => {
        wrapped.unmount();
    })
});