import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

import './Navigation.css'

const navigationLinks = {
    app: {
        link: 'app',
        title: 'app'
    },
    signin: {
        link: 'signin',
        title: 'sign in'
    },
    signup: {
        link: 'signup',
        title: 'sign up'
    },
    dashboard: {
        link: 'dashboard',
        title: 'dashboard'
    },
    account: {
        link: 'account',
        title: 'account'
    },
    news: {
        link: 'news',
        title: 'news list'
    }
}

const loggedInLinks = ['dashboard', 'account', 'app', 'news']
const notLoggedInLinks = ['signin', 'signup', 'app']

const Navigation = (props) => {
    return(
        <div className="component-wrapper componet-wrapper-navigation">
            {
                props.isLogged ?
                    <div className="navigation--content">
                        <div className="navigation--links-wrap">
                            {loggedInLinks.map((navigationKey, i) => <Link key={i} to={`/${navigationLinks[navigationKey].link}`}>{navigationLinks[navigationKey].title}</Link>)}
                        </div>
                        <div className="navigation--actions-wrap">
                            <Button onClick={props.logoutAction}>Logout</Button>
                        </div>
                    </div>
                    :
                    <div className="navigation--links-wrap">
                        {notLoggedInLinks.map((navigationKey, i) => <Link key={i} to={`/${navigationLinks[navigationKey].link}`}>{navigationLinks[navigationKey].title}</Link>)}
                    </div>
            }
        </div>
    )
}

export default Navigation;