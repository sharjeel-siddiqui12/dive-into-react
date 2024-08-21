import React from 'react'
import './Post.css'


function Post(props) {
  
    return (
      <div className='post'>
          <img src={props.profilePhoto} alt="profilePhoto" />

          {props.name}
          {props.date}
          {props.postText}
          {props.postImage}

          <img src="./" alt="post" />
          <img src="./" alt="post" />
          <img src="./" alt="post" />

      </div>
    )
  }
  
export default Post
  