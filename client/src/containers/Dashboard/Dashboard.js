import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { UPDATE_AUTH } from 'actions/types';

import Account from 'components/Account/Account';
import FriendAccount from 'components/FriendAccount/FriendAccount';
import PostItem from 'components/PostItem/PostItem';
import {Button, Tabs} from 'antd';

import './Dashboard.css';

const TabPane = Tabs.TabPane;

class Dashboard extends Component {
    state = {
        friends: {
            potentialFriends: [],
            friends: []
        }
    }

    componetDicMount() {
        this.props.updateAuth(this.props.autn)
    }

    getFriends = (e) => {
        const {auth} = this.props
        axios.get(`user/friends/${auth.authInfo._id}`)
            .then(res => {
                const {friends} = res.data
                if(friends) {
                    this.setState({
                        friends: res.data.friends
                    })
                }
            })
            .catch(err => console.error('error:', err))
    }

    callback = (key) => {
      switch(+key) {
        case 1:
            this.getFriends()
            break
        case 5:
            this.getFriends()
            break
        default:
            console.log(key)
      }
    }

    showPost = (post) => {
        console.log('show')
    }

    updatePosts = (e) => {
        console.log('update post')
    }

    render() {
        const {friends} = this.state
        const {auth} = this.props

        return(
            <div className="Dashboard container">
                <header className="Dashboard-header">
                    <Account />
                </header>
                <Tabs defaultActiveKey="1" onChange={this.callback}>
                    <TabPane tab="Account" key="1">
                        <h1>Special info</h1>
                    </TabPane>
                    <TabPane tab="Tweets" key="2">
                        {auth.authInfo.posts.map((p, index) => <PostItem
                                key={index}
                                post={p}
                                actionShow={this.showPost}
                                showPost={this.showPost}
                                updatePosts={this.updatePosts}
                                auth={auth}
                            >{p.content}</PostItem>)}
                    </TabPane>
                    <TabPane tab="Followers" key="3">
                        {auth.authInfo.followers.map((f, index) => <FriendAccount
                                key={index}
                                user={f}
                                auth={auth}
                            />)}
                    </TabPane>
                    <TabPane tab="Following" key="4">
                        {auth.authInfo.following.map((f, index) => <FriendAccount
                                key={index}
                                user={f}
                                auth={auth}
                            />)}
                    </TabPane>
                    {/*
                        <TabPane tab="Friends" key="5">
                            <div className="already-friends">
                                {friends.potentialFriends.map((friend, index) => <div key={index}>
                                    <FriendAccount user={friend} auth={auth} />
                                </div>)}
                            </div>
                        </TabPane>
                    */}
                </Tabs>

            </div>
        )
    }
}

function putStateToProps(state) {
    return({
        ...state
    })
}

function putActionsToProps(dispatch) {
  return {
    updateAuth: (auth) => dispatch({
      type: UPDATE_AUTH,
      payload: auth
    })
  }
}
export default connect(putStateToProps, putActionsToProps)(Dashboard)