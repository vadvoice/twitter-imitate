import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import AccoutForm from 'components/AccoutForm/AccoutForm'
import { UPDATE_AUTH } from 'actions/types';

import './AccountSettings.css'

class AccountSettings extends Component {

    state = {}

    submitData = (values) => {
        const {auth} = this.props
        axios.post(`user/update/${auth.authInfo._id}`, values)
            .then(res => {
                this.props.updateAuth(auth)
            })
            .catch(err => console.error('this error: ', err))
    }

    render() {
        const {auth} = this.props
        return(
            <div className="component-wrapper component-wrapper-account">
                <h1>Account Settings</h1>
                <AccoutForm auth={auth} submitAction={this.submitData}/>
            </div>
        )
    }
}

const putStateToProps = (state) => {
    return({
        ...state
    })
}

function putActionsToProps(dispatch) {
  return {
    updateAuth: (auth) => dispatch({
      type: UPDATE_AUTH,
      payload: auth
    })
  }
}

export default connect(putStateToProps, putActionsToProps)(AccountSettings);