import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import AccoutForm from 'components/AccoutForm/AccoutForm'

import './AccountSettings.css'

class AccountSettings extends Component {

    state = {}

    submitData = (values) => {
        const {auth} = this.props
        axios.post(`user/update/${auth.authInfo._id}`, values)
            .then(res => console.log('this is response: ', res))
            .catch(err => console.error('this error: ', err))
    }

    render() {
        return(
            <div className="component-wrapper component-wrapper-account">
                <h1>Account Settings</h1>
                <AccoutForm submitAction={this.submitData}/>
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

export default connect(putStateToProps, putActionsToProps)(AccountSettings);