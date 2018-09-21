import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'

const Navigation = (props) => {
    return(
        <div className="component-wrapper componet-wrapper-navigation">
            <Link to={`/app`}>App</Link>
            <Link to={`/signup`}>Sign up</Link>
            <Link to={`/signin`}>Sign in</Link>
        </div>
    )
}

export default Navigation;