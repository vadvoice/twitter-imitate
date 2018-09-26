import React, {Component} from 'react';
import axios from 'axios';
import {Button} from 'antd';

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

	render() {
		const {users} = this.state
		return(
			<div className="container container-wrapper">
				<h2>Freands you may know</h2>
				<div className="users-wrapper">
		          {users.map((user, i) => <div>
		          	<p key={i}>{user.name}</p>
		          	<Button
						type="primary"
		          	>Follow</Button>
		          </div>)}
		        </div>
			</div>
			)
	}
}

export default Propositions;