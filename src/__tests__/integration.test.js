import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import App from 'components/App';

describe('integration test', () => {
    it('can fetch a list of comments and display', () => {
        // render
        const wrapped = mount(
            <Root>
                <App />
            </Root>
        );

        // find fetch comment button and click
        wrapped.find('.fetch-comments').simulate('click');

        // show list 
        expect(wrapped.find('li').length).toEqual(500);
    });
});
