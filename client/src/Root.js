import React from 'react';

import App from 'containers/App/App'
import Posts from 'containers/Posts/Posts'
import Dashboard from './containers/Dashboard/Dashboard';

import SignUp from 'components/SignUp/SignUp'
import SignIn from 'components/SignIn/SignIn'
import Header from 'components/Header/Header'
import AccountSettings from 'components/AccountSettings/AccountSettings'

import {
    Route,
    Switch,
} from 'react-router-dom'

const Root = (props)  => {
    return (
        <div className="Root-component">
            <Header />
            <main>
                <Switch>
                    <Route path="/app" component={ App } ></Route>
                    <Route path="/signup" component={ SignUp } ></Route>
                    <Route path="/signin" component={ SignIn } ></Route>
                    <Route path="/dashboard" component={ Dashboard } ></Route>
                    <Route path="/account-settings" component={ AccountSettings } ></Route>
                    <Route path="/posts" component={ Posts } ></Route>
                </Switch>
            </main>
        </div>
    );
}


export default Root;
