import React, { useContext } from 'react';
import "./comments.scss";
import { AuthContext } from '../../context/authContext';


//temp data comments
const comments = [
    {
        id: 1,
        desc: "Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, consectetur adip.",
        name: "Gogo",
        userId: 1,
        profilePicture: "https://plus.unsplash.com/premium_photo-1670573802857-aeae2b087487?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    },
    {
        id: 2,
        desc: "Lorem ipsum dolor sit amet, consectetur adip.",
        name: "Anita",
        userId: 2,
        profilePicture: "https://plus.unsplash.com/premium_photo-1669138512601-e3f00b684edc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    },
    {
        id: 3,
        desc: "Lorem ipsum dolor sit amet, consectetur adip.",
        name: "Kris",
        userId: 3,
        profilePicture: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    },
];




const Comments = () => {

    // user status 
    const {currentUser}= useContext(AuthContext);



  return (
    <div className='comments'>
        <div className="write">
            {/* user post comment (logged user) */}
            <img src={currentUser.profilePic} alt=""/>
            <input type="text" placeholder="write comment...." />
            <button>Send</button>
        </div>

        {
            comments.map( (comment) => (
                <div className="comment">
                    <img src={comment.profilePicture} alt=""/>
                    <div className="info">
                        <span>{comment.name}</span>
                        <p>{comment.desc}</p>
                    </div>
                    <span className='date'>1 hour ago</span>
                </div>  ))
        }     
    </div>
  );
};

export default Comments