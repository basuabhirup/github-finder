import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    users: [],
    loading: false
  }

  componentDidMount() {
    this.setState({ laoding: true });
    axios
      .get('https://api.github.com/users')
      .then(res => this.setState({ users: res.data, loading: false }));
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
        
      </div>
    );
  }  
}

export default App;
