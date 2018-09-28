import React, {Component} from 'react';
import PropTypes from 'prop-types';

import CommentForm from 'components/CommentForm/CommentForm'

import './ExpandedPostItem.css';

class ExpandedPostItem extends Component {
    render() {
        const {post, auth, updatePosts} = this.props
        return(
            <div
                className="extended-post-item-wrap"
            >
                <img className="post-item-avatar" src={post.author.avatar} alt="avatarImage"/>
                <strong>{post.content}</strong>
                <CommentForm
                    post={post}
                    auth={auth}
                    updatePosts={updatePosts}
                />
                <ul className="extended-post-item-comments">{post.comments.map((comment, index) => <li key={index}><img className="post-item-avatar" src={comment.user.avatar} alt="avatarImage"/>{comment.content}</li>)}</ul>
            </div>

        )
    }
}

ExpandedPostItem.propTypes = {
    post: PropTypes.object
};

export default ExpandedPostItem;