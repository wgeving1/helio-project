import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Login extends Component {
  render() {
    return (
      <div>
        LoginPage
        <Link to="/">Home Page</Link>
      </div>
    )
  }
}

export default Login;