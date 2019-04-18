import React from "react";
import Comment from "./Comment";
import PropTypes from "prop-types";

const CommentSection = props => {
  // console.log(props);
  return (
    <div>
      {props.comment.map((comments, index) => (
        <Comment key={index} text={comments.text} user={comments.username} />
      ))}
      {/* <input type="text" onChange={event => 
      this.setState({
        inputText: event.target.value
      })} value={props.comments}/>
      <button>Add Comment</button> */}
    </div>
  );
};

CommentSection.propTypes = {
  comment: PropTypes.arrayOf(PropTypes.object),
 
}
export default CommentSection;
