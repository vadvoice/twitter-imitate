import React from 'react';
import PropTypes from 'prop-types';
import Button from 'antd/lib/button';
import './SelectedUser.css'

const SelectedUser = (props) => {
    return (
        <div className="component-wrapper component-wrapper-select-user">
            <p>
            { props.user._id }
            </p>
            <p>
            { props.user.name }
            </p>
            <p>
            { props.user.email }
            </p>
            <Button
                type="danger"
                onClick={ () => props.remove(props.user) }
            >Remove</Button>
        </div>
    )
}

SelectedUser.propTypes = {
    user: PropTypes.object.isRequired
};


export default SelectedUser;