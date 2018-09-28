import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import PostDetails from 'components/PostDetails/PostDetails'

import './PostItem.css';

const actions = ['message', 'retweet', 'heart', 'mail']

class PostItem extends Component {
	postAction = (e, actionName) => {
		const {post, auth, updatePosts, showPost} = this.props
		e.preventDefault()
		if(['heart', 'mail'].includes(actionName)) {
			axios.post(`post/update/${post._id}`, {
				actionName,
				user: auth.authInfo._id
			})
				.then(res => {
					updatePosts()
				})
				.catch(err => console.error(err))
		}
		if(['message'].includes(actionName)) {
			showPost(post)
		}
	}
	render() {
		const {actionShow, post, auth} = this.props

		return(
	        <div
	            className="post-item-wrap"
	        >
	        	<img className="post-item-avatar" src={post.author && post.author.avatar} alt="author avatar"/>
	        	<div className="psot-item-content">
		            <p
		            	onClick={() => actionShow(post)}
		            >{post.content}</p>
		            <PostDetails postAction={this.postAction} postActions={actions} post={post || {}} auth={auth}/>	
	        	</div>
	        </div>
	    )
	}
}

PostItem.propTypes = {
	post: PropTypes.object.isRequired,
	actionShow: PropTypes.func.isRequired,
	auth: PropTypes.object,
	showPost: PropTypes.func.isRequired,
	updatePosts: PropTypes.func.isRequired,
}

export default PostItem;