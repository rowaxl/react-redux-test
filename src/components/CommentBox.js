import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';
import requireAuth from 'components/requireAuth';

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
        console.log(this.props);
        return (
            <div>
                <form onSubmit={this.onSubmitForm}>
                    <h4>Add a comment</h4>
                    <textarea className="submit-comments" onChange={this.onCommentChange} value={this.state.comment} />
                    <div>
                        <button>Submit</button>
                    </div>
                </form>
                <button className="fetch-comments" onClick={this.props.fetchComments}>Fetch</button>
            </div>
        );
    };
}

export default connect(null, actions)(requireAuth(CommentBox));