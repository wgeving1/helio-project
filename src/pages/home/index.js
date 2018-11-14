import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div>
        Homepage
        <div>
          <aside>
            <ol>
              <li><Link to="/login">Login Page</Link></li>
              <li><Link to="/register">Register Page</Link></li>
              <li><Link to="/landing">Landing Page</Link></li>
              <li><Link to="/profile">Profile Page</Link></li>
              <li><Link to="/playing">Game Playing Page</Link></li>
              <li><Link to="/details">Game Details Page</Link></li>
              <li><Link to="/previous">Game History Page</Link></li>
            </ol>
          </aside>  
        </div>    
      </div>
    )
  }
}

export default Home;