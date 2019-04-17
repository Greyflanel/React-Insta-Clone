import React from "react";

import Comment from "./Comment";
import PropTypes from "prop-types";

class CommentSection extends React.Component {
   constructor(props) {
     super(props);
    //  console.log(props);
    this.state = {
        usernameComments: "Richard",
        inputText: ""
  }
}

updateComments = () => {
  this.setState({
    inputText: this.state.inputText
  })
}
  render() {
  return (
    <div>
      {this.props.comment.map((comments, index) => (
        <Comment key={index} text={comments.text} user={comments.username} />
      ))}
      <input id="commentField" type="text"
      value={this.state.inputText}
             placeholder="Comment here" onChange={event => this.setState({
               inputText: event.target.value
             })} />
      <button onClick={this.state.updateComments}>Add Comment</button>
    </div>
  );
};
}
CommentSection.propTypes = {
  comment: PropTypes.arrayOf(PropTypes.object),
 
}
export default CommentSection;
