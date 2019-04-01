import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from 'Root';
import App from 'components/App';

describe('integration test', () => {
    beforeEach(() => {
        moxios.install();
        moxios.stubRequest('https://jsonplaceholder.typicode.com/comments', {
            status: 200,
            response: [{name:'Fetched Comment 1'},{name:'Fetched Comment 2'},{name:'Fetched Comment 3'}]
        });
    });

    afterEach(() => {
        moxios.uninstall();
    });

    it('can fetch a list of comments and display', done => {
        // render
        const wrapped = mount(
            <Root>
                <App />
            </Root>
        );

        // find fetch comment button and click
        wrapped.find('.fetch-comments').simulate('click');

        // show list 
        moxios.wait(() => {
            wrapped.update();
            expect(wrapped.find('li').length).toEqual(3);
            wrapped.unmount();
            done();
        });
    });
});
