import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Previous extends Component {
  render() {
    return (
      <div>
        GameHistoryPage
        <Link to="/">Home Page</Link>
      </div>
    )
  }
}

export default Previous;