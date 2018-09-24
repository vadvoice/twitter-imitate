import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import './News.css';

class News extends Component {
  state = {
    selected: [],
    news: [],
  }

  componentDidMount() {
    axios.get('post')
      .then(res => {
        this.setState({news: res.data})
      })
      .catch(err => console.error('err: ', err))
  }

  render() {
    const {news} = this.state

    return (
      <div className="News container">
        <h1>news</h1>
        <div>
          {news.map((newsItem, index) => <p key={index}>{newsItem.content}</p>)}
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

export default connect(putStateToProps, putActionsToProps)(News);
