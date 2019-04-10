import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from 'actions';

class Header extends Component {
    renderButton = () => {
        if (this.props.auth) {
            return <button onClick={this.onClick}>SignOut</button>
        }
        return <button  onClick={this.onClick}>SignIn</button>
    }

    onClick = () => {
        if (this.props.auth) {
            this.props.changeAuth(false);
        } else {
            this.props.changeAuth(true);
        }
    }

    render() {
        return (
            <div style={headerStyle}>
                <Link to='/'>Home</Link>
                <Link to='/post'>Post</Link>
                { this.renderButton() }
            </div>
        )
    }
};

const headerStyle = {
    display: "inline-flex",
    width: "20vw",
    justifyContent: "space-between"
};

const mapStateToProps = state => {
    return { auth: state.auth };
}

export default connect(mapStateToProps, actions)(Header);