import React, {Component} from 'react'
import { Form, Button, Input } from 'antd';
import axios from 'axios';

const {TextArea} = Input;

class PostForm extends Component {
    state = {
        postContent: ''
    }

    componentDidMount() {
        this.refs['postFormContent'].focus()
    }

    submitPost = (e) => {
        e.preventDefault()
        const {postContent} = this.state
        const {auth} = this.props

        axios.post('post/create', {
            content: postContent,
            author: auth.authInfo._id
        })
            .then(res => this.props.updatePosts())
            .catch(err => console.error(err))
    }

    postContentFilling = (e) => {
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
        const {postContent} = this.state

        return(
            <article>
                <Form
                    id={"post-form"}
                    className={"post-form"}
                    ref={"postForm"}
                    onSubmit={this.submitPost}
                >
                    <TextArea
                        onChange={this.postContentFilling}
                        onKeyUp={this.textAreaAdjust}
                        form={"post-form"}
                        name={"postContent"}
                        ref="postFormContent"
                        rows={2}
                        minLength={5}
                        placeholder={"How is going?"}
                    ></TextArea>
                    <Button
                        type="primary"
                        htmlType="submit"
                        disabled={!postContent.length}
                    >Post</Button>
                </Form>
            </article>
        )
    }
}

export default PostForm;