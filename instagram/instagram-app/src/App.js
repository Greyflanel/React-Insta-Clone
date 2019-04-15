import React, { Component } from 'react';
import PostContainer from './components/PostContainer'
import dummyData from './dummy-data';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
     posts : dummyData
    }
  }
  render() {
    return (
      <div className="App">
      {this.state.posts.map(post => (
        <PostContainer key={post.id} user={post}/>
      ))}
      </div>
    );
  }
}

export default App;
