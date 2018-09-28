import React, {Component} from 'react';
import {Button} from 'antd';
import Account from 'components/Account/Account';

import './FriendAccount.css';

class FriendAccount extends Component {
	state = {}
	render() {
		const {user} = this.props

		return <div className="component-wrapper component-wrapper-friand-account">
			<div className="accout-profile-background" style={{backgroundImage: `url(${user.background})`}}></div>
            <div className="accout-content">
                    <img async className="accout-image" src={user.avatar} alt="avatarImage" />
                    <div className="accout-profile-card">
                         <strong>{user.name}</strong>
                         <br/>
                        <small>{user.email}</small>
                    </div>
			</div>

			<Button type={"danger"}>Unfollow</Button>
		</div>
	}
}

export default FriendAccount;