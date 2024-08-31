import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Post from '/src/components/Post/Post.jsx'

function PostAPI() {
    const [posts, setPosts] = useState([])
  // const [isLit, setLit] = useState(true);

  // const clickHandler = () => {
  //   console.log("I am click handler")
  //   setLit(!isLit)
// }

    useEffect(() => {
        axios.get('https://my-json-server.typicode.com/minzamammalik/jsonplaceholder/posts')
        .then(response => {
            console.log('response', response)
            setPosts(response.data)
        })
        .catch(error => {
            console.log('error', error)
        })
    }, [])

    

  return (
    
    <div>
    
        
       {
            posts.map(eachPost => {
                return (
                    <>
                        <Post
                         name={eachPost.name}
                         profilePhoto={eachPost.profilePhoto}
                         date={eachPost.date}
                         postText={eachPost.postText}
                         postImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHhqLRUJ9cJJaiLrPMKJ8RxoN9t6U2ZmS9Iw&s"
                        ></Post>
                    </>
                )
            })
       }



    </div>
  )
}

export default PostAPI
