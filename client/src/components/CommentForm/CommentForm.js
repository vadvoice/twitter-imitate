import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import { Form, Button, Input } from 'antd';

import './CommentForm.css';

const {TextArea} = Input;

class CommentForm extends Component {
    state = {
        commentContent: ''
    }
    submitPost = (e) => {
        e.preventDefault()
        const {commentContent} = this.state
        const {auth, post, updatePosts} = this.props

        axios.post('comment/', {
            content: commentContent,
            user: auth.authInfo._id,
            target: post._id
        })
            .then(res => {
                updatePosts()
            })
            .catch(err => console.error(err))
    }

    commentContentFilling = (e) => {
        const target = e.target
        this.setState({
            [target['name']]: target.value
        })
    }

    textAreaAdjust(event) {
        event.target.style.height = "1px";
        event.target.style.height = (30+event.target.scrollHeight)+"px";
    }

    render() {
        const {commentContent} = this.state

        return(
            <article>
                <Form
                    id={"comment-form"}
                    className={"post-form"}
                    onSubmit={this.submitPost}
                >
                    <TextArea
                        onChange={this.commentContentFilling}
                        onKeyUp={this.textAreaAdjust}
                        form={"post-form"}
                        name={"commentContent"}
                        rows={2}
                        minLength={10}
                        placeholder={"What do you think about it?"}
                    ></TextArea>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className=""
                        disabled={!commentContent.length}
                    >Leave a comment</Button>
                </Form>
            </article>
        )
    }
}

CommentForm.propTypes = {
    post: PropTypes.object
};

export default CommentForm;