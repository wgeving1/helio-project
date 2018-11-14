import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Playing extends Component {
  render() {
    return (
      <div>
        GamePlayingPage
        <Link to="/">Home Page</Link>
      </div>
    )
  }
}

export default Playing;