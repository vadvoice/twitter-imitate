import React, {Component} from 'react';
import axios from 'axios';
import {Button} from 'antd';

import './Propositions.css'

class Propositions extends Component {
	state = {
		users: {
			potentialFriends: [],
			friends: []
		}
	}

	componentWillMount() {
		this.getUsers()
	}

	getUsers = () => {
        const {auth} = this.props

        axios.get(`user/friends/${auth.authInfo._id}`)
	      .then(res => {
	        this.setState({
	          users: res.data.friends
	        })
	      })
	      .catch(err => {
	        console.error('error: ', err.response)
	      })
	}

	followRequest = (user) => {
		axios.post(`/user/update/${this.props.auth.authInfo._id}`, {
			following: user._id
		})
			.then(res => console.log('response: ', res))
			.catch(err => console.error('error: ', err))
	}

	render() {
		const {users} = this.state
		return(
			<div className="container component-account-wrapper">
				<h3>Freands you may know</h3>
				<div className="users-wrapper">
		          {users.potentialFriends.map((user, i) => <div key={i}>
		          	<p>
			          	<strong>{user.name}</strong>
			          	<br />
			          	<small>{user.email}</small>
		          	</p>
		          	<Button
		          		size="small"
						type="primary"
						onClick={() => this.followRequest(user)}
		          	>Follow</Button>
		          	<hr/>
		          </div>)}
		        </div>
			</div>
			)
	}
}

export default Propositions;