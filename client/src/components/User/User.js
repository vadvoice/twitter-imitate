import React from 'react';
import Button from 'antd/lib/button';
import PropTypes from 'prop-types'
import './User.css';

function User (props) {
    return (
        <div className="component-wrapper component-wrapper-user">
            <h4>{ props.user.name }</h4>
            <blockquote>{ props.user.about }</blockquote>
            <p><i>Age: </i><strong>{ props.user.age }</strong></p>
            <p><i>Company: </i><strong>{ props.user.company }</strong></p>
            <Button
                type="primary"
                disabled={ props.isSelected }
                onClick={ (e) => props.setUser(props.user) }
            >Button</Button>
        </div>
    )
}

User.propTypes = {
    user: PropTypes.object.isRequired,
    setUser: PropTypes.func.isRequired
};


export default User;