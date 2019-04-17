import React from "react";
import CommentSection from "./CommentSection";
import PropTypes from "prop-types";

const PostContainer = props => {
  // console.log(props);

  return (
    <div>
     <img src={props.post.thumbnailUrl} alt="User thumbnail"/>  
      <h1>{props.post.username}</h1>
      <img src={props.post.imageUrl} alt="User avatar" />
      <h6>likes {props.post.likes}</h6>
      <h6>{props.post.timestamp}</h6>
      <CommentSection key={props.post.id} comment={props.post.comments} />
    </div>
  );
};

PostContainer.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    likes: PropTypes.number,
    comments: PropTypes.arrayOf(PropTypes.object),
    
  })
}
export default PostContainer;
