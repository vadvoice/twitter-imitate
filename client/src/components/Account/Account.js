import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

import './Account.css';

class Account extends Component {

    state = {
        me: {}
    }

    componentWillMount() {
        axios.get(`user/me/${this.props.auth.authInfo._id}`)
            .then(res => {
                this.setState({
                    me: res.data
                })
            })
            .catch(err => console.log(err))
    }

    render() {
        const {me} = this.state

        return(
            <div className="component-wrapper component-wrapper-account">
                <h1>Account</h1>
                <img className="accout-image" src={me.avatar} alt="avata-image" />
                <p>
                    {me.name}
                </p>
                <p>
                    {me.email}
                </p>
                <p>
                Posts: <span>{me.posts && me.posts.length}</span>
                </p>
                <p>
                Following: <span>{me.following && me.following.length}</span>
                </p>
            </div>
        )
    }
}

const putStateToProps = (state) => {
    return({
        ...state
    })
}

const putActionsToProps = (dispatch) => {
    return({})
}

export default connect(putStateToProps, putActionsToProps)(Account);