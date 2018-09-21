import React from 'react';
import App from 'containers/App/App'
import SignUp from 'components/SignUp/SignUp'
import SignIn from 'components/SignIn/SignIn'
import Header from 'components/Header/Header'

import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
  } from 'react-router-dom'

// import {
//     BrowserRouter as Router,
//     Route,
//     Link,
//     Switch,
//     Redirect
//   } from 'react-router-dom'

const Root = (props)  => {
    return (
        <div className="Root-component">
            <Header />
            <main>
                <Switch>
                    <Route path="/app" component={ App } ></Route>
                    <Route path="/signup" component={ SignUp } ></Route>
                    <Route path="/signin" component={ SignIn } ></Route>
                </Switch>
            </main>
        </div>
    );
}


export default Root;
