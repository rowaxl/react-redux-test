import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import CommentBox from './CommentBox';
import CommentList from './CommentList';

class App extends Component { 
    render() {
        return (
            <div>
                <Header />
                <Route path='/post' component={CommentBox}/>
                <Route path='/' exact component={CommentList}/>
            </div>
        );
    };
}

export default App;