import React, { Component } from 'react';

class CommentBox extends Component { 
    render() {
        return (
            <form>
                <h4>Add a comment</h4>
                <textarea />
                <div>
                    <button>Submit</button>
                </div>
            </form>
        );
    };
}

export default CommentBox;