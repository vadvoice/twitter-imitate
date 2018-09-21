import React, { Component } from 'react';
import {connect} from 'react-redux';

class Account extends Component {

    state = {}

    render() {
        return(
            <div className="component-wrapper component-wrapper-account">
                <h1>Account</h1>
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