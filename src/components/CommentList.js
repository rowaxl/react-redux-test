import React, { Component } from 'react';
import { connect } from 'react-redux';
import {ulid} from 'ulid';

class CommentList extends Component { 
    render() {
        console.log('this.props: ', this.props);
        return (
            <ul>
                {this.props.comments.map(comment => <li key={ulid()}>{comment}</li> )}
            </ul>
        );
    };
}

const mapStateToProps = state => {
    return { comments: state.comments };
}

export default connect(mapStateToProps)(CommentList);