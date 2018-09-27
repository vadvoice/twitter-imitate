import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

import './Account.css';

class Account extends Component {

    state = {
        me: {}
    }

    componentDidMount() {
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
                <div className="accout-profile" style={{background: `url(${me.background}) center no-repeat`}}></div>
                <div className="accout-content">
                    <img async className="accout-image" src={me.avatar} alt="avatarImage" />
                    <div className="accout-profile-card">
                         <p>{me.name}</p>
                        <small>{me.email}</small>
                    </div>
                    <div className="accout-profile-stats">
                        <a>
                            <span>Posts</span>
                            <strong className="accout-profile-stats-count">{me.posts && me.posts.length}</strong>
                        </a>
                        <a>
                            <span>Following</span>
                            <strong className="accout-profile-stats-count">{me.following && me.following.length}</strong>
                        </a>
                        <a>
                            <span>Followers</span>
                            <strong className="accout-profile-stats-count">{me.followers && me.followers.length}</strong>
                        </a>
                    </div>
                </div>
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