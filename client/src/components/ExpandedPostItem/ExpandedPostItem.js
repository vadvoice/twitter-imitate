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
                <p>{post.content}</p>
                <CommentForm
                    post={post}
                    auth={auth}
                    updatePosts={updatePosts}
                />
                <div>{post.comments.map((comment, index) => <p key={index}>{comment.content}</p>)}</div>
            </div>

        )
    }
}

ExpandedPostItem.propTypes = {
    post: PropTypes.object
};

export default ExpandedPostItem;