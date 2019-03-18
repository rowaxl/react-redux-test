import React, { Component } from 'react';
import CommetnBox from './CommentBox';
import CommentList from './CommentList';

class App extends Component { 
    render() {
        return (
            <div>
                <CommetnBox />
                <CommentList />
            </div>
        );
    };
}

export default App;