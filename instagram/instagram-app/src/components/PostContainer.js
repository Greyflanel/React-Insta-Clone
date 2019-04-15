import React from 'react';


const PostContainer = (props) => {
    
    return (
        <div>
        <h1>{props.user.username}</h1> 
        <img src={props.user.imageUrl} alt="User avatar"/> 
      </div>
      )  
}  




export default PostContainer