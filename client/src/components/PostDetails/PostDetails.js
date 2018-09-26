import React from 'react';
import PropTypes from 'prop-types';
import {Icon} from 'antd';

import './PostDetails.css';

const matchedActionStyle = { fontSize: '16px', color: '#08c' }

function isMatched(post, action, auth) {
	return post[`${action}s`].length && post[`${action}s`].find(actionId => actionId === (auth.authInfo && auth.authInfo._id))
}

const PostDetails = (props) => {
	return(
			<div>
				<p>
					<small><strong>{props.post.author.name}</strong> <i>{props.post.author.email}</i></small>
				</p>
				{
					props.postActions.map((action, index) => <span key={index}>
						<Icon
							onClick={(e) => props.postAction(e, action)}
							type={action}
							style={isMatched(props.post, action, props.auth) ? matchedActionStyle : {}}
						/>
						<small>{props.post.counters && props.post.counters[action]}</small>
					</span>)
				}
			{/*
				<Icon type="message" theme="outlined" />
				<Icon type="retweet" theme="outlined" />
				<Icon type="heart" theme="outlined" />
				<Icon type="mail" theme="outlined" />
			*/}

			</div>
		)
}

PostDetails.propTypes = {
	post: PropTypes.object,
	auth: PropTypes.object,
	postActions: PropTypes.arrayOf(PropTypes.string).isRequired,
	postAction: PropTypes.func.isRequired
}

export default PostDetails;