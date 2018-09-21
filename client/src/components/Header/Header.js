import React, {Component} from 'react';
import {connect} from 'react-redux';
import { LOGOUT } from 'actions/types';

import Navigation from 'components/Navigation/Navigation'

class Header extends Component {
    render() {
        const {auth, logoutAction} = this.props
        const isLogged = auth.authInfo.auth
        return(
            <div className="componet-wrapper componet-wrapper-header">
                <Navigation isLogged={isLogged} logoutAction={logoutAction} />
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