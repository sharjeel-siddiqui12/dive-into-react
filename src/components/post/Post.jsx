import React from 'react'
import './Post.css'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faComment, faShare } from '@fortawesome/free-solid-svg-icons'



function Post(props) {
  
    return (
      <div className='post'>

        <div className='postHeader'>
          <img className='profilePhoto' src={props.profilePhoto} alt="profilePhoto" />

            <div>   
                {props.name} <br />
                {moment(props.date).fromNow()}
            </div>
        </div>

        <div className='postText'>
          {props.postText}
        </div>

        <div className='postImage'>
          <img src={props.postImage} alt="postImage"  /> 
        </div>

        <hr />
        <div className="postFooter">
           <div> <FontAwesomeIcon icon={faThumbsUp} /> Like </div>
           <div> <FontAwesomeIcon icon={faComment }/> Comment</div>
           <div> <FontAwesomeIcon icon={faShare} /> Share</div>
        </div>
        <hr />


       

      </div>
    )
  }
  
export default Post
  