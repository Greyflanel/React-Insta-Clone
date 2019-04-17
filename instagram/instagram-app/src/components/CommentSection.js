import React from "react";
import Comment from "./Comment";

const CommentSection = props => {
  // console.log(props);
  return (
    <div>
      {props.comment.map((comments, index) => (
        <Comment key={index} text={comments.text} />
      ))}
    </div>
  );
};
export default CommentSection;
