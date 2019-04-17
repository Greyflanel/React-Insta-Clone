import React from "react";
import Comment from "./Comment";

const CommentSection = props => {
//   console.log(props);
  return (
    <div>
      {props.comment.map((comments, index) => (
        <Comment key={index} text={comments.text} user={comments.username} />
      ))}
      <input type="text"/>
      <button>Add Comment</button>
    </div>
  );
};
export default CommentSection;
