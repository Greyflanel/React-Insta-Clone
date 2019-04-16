import React from 'react';
import Comment from './Comment'

const CommentSection = props => {
    console.log(props);
    
    return (
            <div>
                {props.user.comments.map( com => (
            
    
                <Comment key={props.user} text={props.user}/>
                
           </div>
    )
}

export default CommentSection;