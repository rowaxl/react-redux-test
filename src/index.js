import React from 'react';
import ReactDOM from 'react-dom';
import { BrowseRouter, Route } from 'react-router-dom';
import App from 'components/App';
import Root from 'Root';

ReactDOM.render(
    <Root>
        <BrowseRouter>
            <Route path='/' component={App}></Route>
        </BrowseRouter>
    </Root>,
document.querySelector('#root'));
