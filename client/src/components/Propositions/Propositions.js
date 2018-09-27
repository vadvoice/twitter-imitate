import React, {Component} from 'react';
import axios from 'axios';
import {Button} from 'antd';

import './Propositions.css'

class Propositions extends Component {
	state = {
		users: []
	}

	componentWillMount() {
		this.getUsers()
	}

	getUsers = () => {
	    axios.get('/user')
	      .then(res => {
	        this.setState({
	          users: res.data.users
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
		          {users.map((user, i) => <div key={i}>
		          	<strong>{user.name}</strong>
		          	<small>{user.email}</small>
		          	<Button
		          		size="small"
						type="primary"
						onClick={() => this.followRequest(user)}
		          	>Follow</Button>
		          </div>)}
		        </div>
			</div>
			)
	}
}

export default Propositions;