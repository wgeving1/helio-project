import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Landing extends Component {
  render() {
    return (
      <div>
        LandingPage
        <Link to="/">Home Page</Link>
      </div>
    )
  }
}

export default Landing;