import React from 'react';
import './posts.scss';
import Post from '../post/Post';

const Posts = () => {

  //temp data
  const posts = [
  {
    id: 1,
    name: "Random Name",
    userId: 1,
    profilePic:
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    desc: "Lorem ipsum dolor sit amet, consectetur",
    img: "https://images.unsplash.com/photo-1519417688547-61e5d5338ab0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9zdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
  },
  {
    id: 2,
    name: "Random Name",
    userId: 2,
    profilePic:
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    desc: "Lorem ipsum dolor sit amet, consectetur",
    img: "https://images.unsplash.com/photo-1592762224962-5f98a3a00621?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBvc3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    id: 3,
    name: "Random Name",
    userId: 3,
    profilePic:
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    desc: "Lorem ipsum dolor sit amet, consectetur",
    img: "https://images.unsplash.com/photo-1585416294584-b849d9e571ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cG9zdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
  },
  ];



  return (
    <div className='posts'>
        {posts.map( post => (
          <Post post={post} key={post.id}/>
        ))}
    </div>
  )
}

export default Posts