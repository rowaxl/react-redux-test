import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addComment } from '../actions';

class CommentBox extends Component {
    state = { comment: '' };

    onCommentChange = event => {
        this.setState({ comment: event.target.value });
    }

    onSubmitForm = event => {
        event.preventDefault();

        this.props.addComment(this.state.comment);
        this.setState({ comment: '' });
    }

    render() {
        return (
            <form onSubmit={this.onSubmitForm}>
                <h4>Add a comment</h4>
                <textarea onChange={this.onCommentChange} value={this.state.comment} />
                <div>
                    <button>Submit</button>
                </div>
            </form>
        );
    };
}

export default connect(null, { addComment })(CommentBox);