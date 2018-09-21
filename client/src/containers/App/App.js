import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FETCH_USERS, NEW_USER, SELECT_USER } from 'actions/types';

import User from 'components/User/User'
import SelectedUser from 'components/SelectedUser/SelectedUser';
import Button from 'antd/lib/button';

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

  render() {
    const { selected } = this.state

    return (
      <div className="App">
        <header>
          <Button
              type="primary"
              onClick={ this.getAllPosts }
            >Fetch users</Button>
          <div className="selection-block">
            { this.state.selected.map( (seletedItem, index) => <SelectedUser key={ index } user={ seletedItem } remove={ this.handleRemove } />) }
          </div>
        </header>
        <div className="users-wrapper">
          { this.props.users.items.map((user, i) => <User key={ i } isSelected={this.state.selected.includes(user)} setUser={ this.handleSelect } user={ user }/>) }
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
