import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ulid } from 'ulid';

class CommentList extends Component {
    renderComments = () => {
        return this.props.comments.map(comment =>
            <li key={ulid()}>
                { comment }
            </li>
        );
    }

    render() {
        return (
            <ul>
                {this.renderComments()}
            </ul>
        );
    };
}

const mapStateToProps = state => {
    return { comments: state.comments };
}

export default connect(mapStateToProps)(CommentList);