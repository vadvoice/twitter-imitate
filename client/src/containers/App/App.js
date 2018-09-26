import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { FETCH_USERS, NEW_USER } from 'actions/types';

import User from 'components/User/User'
import SelectedUser from 'components/SelectedUser/SelectedUser';
import { Button } from 'antd';

import './App.css';

class App extends Component {
  state = {
    selected: []
  }

  getAllPosts = () => {
    fetch('users')
      .then(response => response.json())
      .then(res => {
        this.props.fetchUsers(res.users)
      })
      .catch(err => console.error(err))
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

  handleSelect = (selection) => {
      this.setState({
        selected: [...this.state.selected, selection]
      })
  }

  handleRemove = (item) => {
    if(this.state.selected.includes(item)) {
      // TODO hard to understand
      const findIndex = this.state.selected.indexOf(item)
      const copySelections = this.state.selected
      copySelections.splice(findIndex, 1)
      this.setState({
        selected: copySelections
      })
    }
  }

  renderUserDelay(user, i) {
    setTimeout(() => {
      console.log('is this trigger?')
      return 
    }, 300)
  }

  render() {
    const { selected, users: realUsers } = this.state
    const { users } = this.props

    return (
      <div className="App container">
        <header>
          <Button
            type="primary"
            onClick={ this.getAllPosts }
          >Fetch users by store events</Button>

          <Button
              type="primary"
              onClick={ this.getUsers }
            >Get real users</Button>

          <div className="selection-block">
            { selected.map( (seletedItem, index) => <SelectedUser key={ index } user={ seletedItem } remove={ this.handleRemove } />) }
          </div>
        </header>
        <div className="users-wrapper">
          { users.items.map((user, i) => <User key={ i } isSelected={selected.includes(user)} setUser={ this.handleSelect } user={ user }/>) }
        </div>

        <div className="real-users-wrapper">
          { realUsers && realUsers.map((user, i) => <p key={i}>{user.name}</p> )}
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
  return {
    fetchUsers: (items) => dispatch({
      type: FETCH_USERS,
      payload: items
    }),
    addUser: (item) => dispatch({
      type: NEW_USER,
      payload: item
    })
  }
}

export default connect(putStateToProps, putActionsToProps)(App);
