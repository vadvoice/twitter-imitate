import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import {Modal} from 'antd';
import PostForm from 'components/PostForm/PostForm';
import PostItem from 'components/PostItem/PostItem';
import ExpandedPostItem from 'components/ExpandedPostItem/ExpandedPostItem';
import Account from 'components/Account/Account';
import Propositions from 'components/Propositions/Propositions';

import {Button} from 'antd';

import './Posts.css';

class Posts extends Component {
  state = {
    selected: [],
    posts: [],
    post: {},
    postVisible: false,
  }

  componentDidMount() {
    axios.get('post')
      .then(res => {
        this.setState({posts: res.data})
      })
      .catch(err => console.error('err: ', err))
  }

  updateList = () => {
    axios.get('post')
      .then(res => {
        this.setState({posts: res.data})
      })
      .catch(err => console.error('err: ', err))
  }

  showPost = (post) => {
    this.setState({post}, this.openModalWindow)
  }

  openModalWindow = () => {
    this.setState({
      postVisible: !this.state.postVisible
    })
  }

  handleCancel = () => {
    this.setState({
      postVisible: !this.state.postVisible
    })
  }

  handleOk = () => {
    this.setState({
      postVisible: !this.state.postVisible
    })
  }

  // check tocke verification request
  checkAuth = () => {
    axios.get('user/auth')
      .then(res => console.log('response:', res))
      .catch(err => console.error('error:', err))
  }

  render() {
    const {posts, post, postVisible} = this.state
    const {auth} = this.props

    return (
      <div className="posts container">
        <div className="posts-wrapper">
          <article>
            <Account />
          </article>
          <main>
            <PostForm
              updatePosts={this.updateList}
              auth={auth}
            />
            <div>
              {posts.map((postsItem, index) => <PostItem
                  key={index}
                  post={postsItem}
                  auth={auth}
                  actionShow={this.showPost}
                  updatePosts={this.updateList}
                  showPost={this.showPost}
                ></PostItem>)}
            </div>
            <Modal
              title="Post"
              visible={postVisible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
            >
              <ExpandedPostItem
                post={post}
                auth={auth}
                updatePosts={this.updateList}
              />
            </Modal>
          </main>
          <aside>
            <Propositions
              auth={auth}
            />
          </aside>
        </div>
      </div>
    );
  }
}

function putStateToProps(state) {
  return({
    ...state
  })
}

function putActionsToProps(dispatch) {
  return {}
}

export default connect(putStateToProps, putActionsToProps)(Posts);
