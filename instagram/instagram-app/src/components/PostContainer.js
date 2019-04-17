import React from "react";
import CommentSection from "./CommentSection";

const PostContainer = props => {
  // console.log(props);

  return (
    <div>
     <img src={props.post.thumbnailUrl} alt="User thumbnail"/>  
      <h1>{props.post.username}</h1>
      <img src={props.post.imageUrl} alt="User avatar" />
      <CommentSection key={props.post.id} comment={props.post.comments} />
    </div>
  );
};

export default PostContainer;
