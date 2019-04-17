import React, { Component } from "react";
import PostContainer from "./components/PostContainer";
import dummyData from "./dummy-data";
import SearchBar from "./components/SearchBar";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

componentDidMount() {
  this.setState({ posts: dummyData})
}
 
  render() {
    return (
      <div className="App">
       <SearchBar/>
        {this.state.posts.map(post => (
          <PostContainer key={post.id} post={post} />
        ))}  
      </div>
    );
  }
}

export default App;
