import React from 'react';

import App from 'containers/App/App'
import News from 'containers/News/News'
import Dashboard from './containers/Dashboard/Dashboard';

import SignUp from 'components/SignUp/SignUp'
import SignIn from 'components/SignIn/SignIn'
import Header from 'components/Header/Header'
import Account from 'components/Account/Account'

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
                    <Route path="/account" component={ Account } ></Route>
                    <Route path="/news" component={ News } ></Route>
                </Switch>
            </main>
        </div>
    );
}


export default Root;
