import React, {Component} from 'react';
import {connect} from 'react-redux';
import history from 'config/history';
import { LOGOUT } from 'actions/types';

import Navigation from 'components/Navigation/Navigation'

class Header extends Component {
    logout = () => {
        const {logoutAction} = this.props
        history.push('/')
        logoutAction()
    }

    render() {
        const {auth} = this.props
        const isLogged = auth.authInfo._id
        return(
            <div className="componet-wrapper componet-wrapper-header">
                <Navigation history={history} isLogged={isLogged} logoutAction={this.logout} />
            </div>
        )
    }
}

function putStateToProps(state) {
    return({
      ...state
    })
}

const putActionsToProps = (dispatch) => {
    return({
        logoutAction: () => dispatch({
            type: LOGOUT,
            payload: LOGOUT
        })
    })
}

export default connect(putStateToProps, putActionsToProps)(Header);