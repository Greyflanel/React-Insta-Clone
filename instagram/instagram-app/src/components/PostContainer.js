import React from "react";
import CommentSection from "./CommentSection";

const PostContainer = props => {
  console.log(props);
  
  return (
    <div>
      <h1>{props.user.username}</h1>
      <img src={props.user.imageUrl} alt="User avatar" />
      <CommentSection key={props.user.id} comment={props.user.comments}/>
      <p>{}</p>
    </div>
  );
};

export default PostContainer;
