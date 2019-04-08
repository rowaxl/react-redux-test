import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

class CommentBox extends Component {
    state = { comment: '' };

    componentDidMount = () => {
        this.shouldNavigateAway();
    }

    componentDidUpdate = () => {
        this.shouldNavigateAway();
    }

    shouldNavigateAway = () => {
        if (!this.props.auth) {
            this.props.history.push('/');
        }
    }

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

const mapStateToProps = state => {
    return { auth: state.auth };
}

export default connect(mapStateToProps, actions)(CommentBox);