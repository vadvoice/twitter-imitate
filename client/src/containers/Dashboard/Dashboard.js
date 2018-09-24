import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dashboard extends Component {
    render() {
        return(
            <div className="Dashboard container">
                <h1>Dashboard</h1>
                
            </div>
        )
    }
}

function putStateToProps(state) {
    return({
        ...state
    })
}

function putActionsToProps(dispatch) {
    return {}
}

export default connect(putStateToProps, putActionsToProps)(Dashboard)