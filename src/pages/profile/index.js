import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Profile extends Component {
  render() {
    return (
      <div>
        ProfilePage
        <Link to="/">Home Page</Link>
      </div>
    )
  }
}

export default Profile;