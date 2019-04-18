import React from "react";
import PropTypes from "prop-types";

const Comment = props => {
  // console.log(props);
  return (
    <div>
      <h5>{props.user}</h5>
      <p>{props.text}</p>
    </div>
  );
};

Comment.propTypes = {
  text: PropTypes.string,
  user: PropTypes.string
}

export default Comment;
