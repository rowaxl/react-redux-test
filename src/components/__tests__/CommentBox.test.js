import React from 'react';
import { mount } from 'enzyme';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import CommentBox from '../CommentBox';
import reducers from '../../reducers';

describe('test CommentBox components', () => {
    let wrapped;

    beforeEach(() => {
        wrapped = mount(
            <Provider store={createStore(reducers)}>
                <CommentBox />
            </Provider>
        );
    });
    
    afterEach(() => {
        wrapped.unmount();
    });

    it('has a text area and a button', () => {
        expect(wrapped.find('textarea').length).toEqual(1);
        expect(wrapped.find('button').length).toEqual(1);
    });

    it('change text area value and check state changed', () => {
        const value = 'test comment';
        wrapped.find('textarea').simulate('change', { target: { value } });
        wrapped.update();

        expect(wrapped.prop('comment')).toEqual(value);
        expect(wrapped.find('textarea').prop('value')).toEqual(value);
    });

    it('when click submit button, textarea will be clean', () => {
        // set comments
        const value = 'new comment';
        wrapped.find('textarea').simulate('change', { target: { value } });
        wrapped.update();

        // do Submit
        wrapped.find('form').simulate('submit');
        wrapped.update();
        expect(wrapped.find('textarea').prop('value')).toEqual('');
    });
});