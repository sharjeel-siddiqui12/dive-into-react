// import React, { useState, useEffect } from 'react'
import Post from '/src/components/Post/Post.jsx'

function Home() {
  // const [isLit, setLit] = useState(true);

  // const clickHandler = () => {
  //   console.log("I am click handler")
  //   setLit(!isLit)
// }

    

  return (
    


    
    <div className='flex flex-col align-middle'>
    
       <Post name="Sharjeel"
        profilePhoto = "data:image/jpeg;base64,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" 
        date = "2/2/2022"
        postText = "My current projects involve leveraging the MERN stack to design dynamic websites for small businesses, ensuring a responsive user experience and functionality that meets their specific needs. Additionally, I am developing custom software applications."
        postImage = "https://scontent.fkhi8-1.fna.fbcdn.net/v/t39.30808-6/457300307_915988980561856_1603506133971362440_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHaIgUGnliWmRyL3Q9bAOEoqU6Yd_XotVypTph39ei1XE5TGy5-bE-SLWRu7mZinheXdPq6rs5nLCRY_afkBWu4&_nc_ohc=NQ9qURPy_eoQ7kNvgEcvPb3&_nc_ht=scontent.fkhi8-1.fna&oh=00_AYArUNK74fQW_KxEgbYp_KuWZYBenMglSXnwBaeW9aOWhg&oe=66D81C6C"
        />
       
       <Post name="Sharjeel"
        profilePhoto = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs10cupyp3Wf-pZvdPjGQuKne14ngVZbYdDQ&s"
         date = "2/2/2022"
         postText = "My current projects involve leveraging the MERN stack to design dynamic websites for small businesses, ensuring a responsive user experience and functionality that meets their specific needs. Additionally, I am developing custom software applications."
        postImage = "https://scontent.fkhi8-1.fna.fbcdn.net/v/t39.30808-6/457327830_914618854032202_5518196789808509879_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeH6X9sr589eel2w2kg5DKxrdnKFi3WrzXp2coWLdavNen7WY3z-bYQxEpmxdMVBj7rwrBJbO3fUKHVvxQlpasPH&_nc_ohc=HJJbIgXfo2gQ7kNvgFE-RHR&_nc_ht=scontent.fkhi8-1.fna&oh=00_AYAV1X1a8EDNCalRpf0ZoJX5lNsE_wSrNKHn_NA1Im0QXg&oe=66D81B85"
        />
       <Post name="Sharjeel" 
       profilePhoto = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ22WjBWLXIFkxA6k2ezXO0xYQlvpa-Mgt2sA&s"
        date = "2/2/2022"
        postText = "My current projects involve leveraging the MERN stack to design dynamic websites for small businesses, ensuring a responsive user experience and functionality that meets their specific needs. Additionally, I am developing custom software applications."
        postImage = "https://scontent.fkhi8-1.fna.fbcdn.net/v/t39.30808-6/457327875_914618840698870_4766181786099087605_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHj_2u0o34l0uv19TqUK8K65VZ-Fwdc5ublVn4XB1zm5qoyKw79f2GIeBRMRN5UsVLLIS1_dDx7cMb7Nf-fuVdQ&_nc_ohc=RmWxQOm0WPcQ7kNvgE6bXlO&_nc_ht=scontent.fkhi8-1.fna&_nc_gid=AYDa0vpUk9d7-gIOXP35j6c&oh=00_AYBWUO7FkXQFGCgt0rKzwdZZEgqrySwPx6OmAV6QUn4RLA&oe=66D80D1D"
       />



    </div>
  )
}

export default Home
