import React, { Component } from "react";
import PostContainer from "./components/PostContainer";
import dummyData from "./dummy-data";
import SearchBar from "./components/SearchBar";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      username: "Richard",
      inputText: "",
      newComment: ""
    };
  }

  componentDidMount() {
    this.setState({ posts: dummyData });
  }

  // addComment = (postId, newComment) => {
  //   this.setState({
  //     posts: this.state.posts.map((post, id) => {
  //       if (postId === id) {
  //         return {
  //           ...post,
  //           comments: [...post.comments, newComment]
  //         };
  //       }
  //     })
  //   });
  // };
handleChange = (event) => {
  this.setState({
    inputText: event.target.value
   
  })
}

submit = (event) => {
 this.setState({
   newComment: this.state.inputText, 
   inputText: "" 
 })

}


  render() {
    return (
      <div className="App">
        <SearchBar />
        {this.state.posts.map(post => (
          <PostContainer key={post.id} post={post} />
        ))}
        <input type="text" key={this.state.id} name="inputText" value={this.state.inputText} 
        onChange={(event) => this.handleChange(event)}
        />
        <div>
          {this.state.newComment}
        </div>
        <button onClick={this.submit}>Add Comment</button> 
          
      </div>
    );
  }
}

export default App;
