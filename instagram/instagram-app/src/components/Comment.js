import React from "react";

const Comment = props => {
  // console.log(props);
  return (
    <div>
      <h5>{props.user}</h5>
      <p>{props.text}</p>
    </div>
  );
};

export default Comment;
