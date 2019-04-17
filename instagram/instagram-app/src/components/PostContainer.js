import React from "react";
import CommentSection from "./CommentSection";
import SearchBar from "./SearchBar";

const PostContainer = props => {
  // console.log(props);

  return (
    <div>
      <SearchBar pic={props.post.thumbnailUrl}/>
      <h1>{props.post.username}</h1>
      <img src={props.post.imageUrl} alt="User avatar" />
      <CommentSection key={props.post.id} comment={props.post.comments} />
    </div>
  );
};

export default PostContainer;
