import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import CommentBox from '../CommentBox';
import CommentList from '../CommentList';

describe('Check App\'s components', () => {
    let wrapped;

    beforeEach(() => {
        wrapped = shallow(<App />);
    });

    it('Check App contains comment box', () => {
        expect(wrapped.find(CommentBox).length).toEqual(1);
    });
    
    it('Check App contains comment list', () => {
        expect(wrapped.find(CommentList).length).toEqual(1);
    });

    
});