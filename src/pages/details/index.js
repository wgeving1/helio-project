import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Details extends Component {
  render() {
    return (
      <div>
        GameDetails
        <Link to="/">Home Page</Link>
      </div>
    )
  }
}

export default Details;