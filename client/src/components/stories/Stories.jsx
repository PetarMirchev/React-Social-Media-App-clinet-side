import React, { useContext } from 'react';
import './stories.scss';
import { AuthContext } from '../../context/authContext';

const Stories = () => {

    const {currentUser} = useContext(AuthContext)

    //TEMP DATA for TESTING
    const stories = [
        {
          id: 1,
          name: "Gogo",
          img: "https://images.unsplash.com/photo-1626236104436-1e5aa5dd6792?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c3Rvcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
        },
        {
          id: 2,
          name: "Pepi",
          img: "https://images.unsplash.com/photo-1578852612716-854e527abf2e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c3Rvcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
        },
        {
          id: 3,
          name: "Ani",
          img: "https://plus.unsplash.com/premium_photo-1664046912344-df11b4ae17ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c3Rvcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
        },
        {
          id: 4,
          name: "Mimi",
          img: "https://plus.unsplash.com/premium_photo-1664100478033-7f71a67363d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHN0b3J5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
        },
      ];



  return (
    <div className='stories'>
        <div className="story">
                <img src={currentUser.profilePic} alt=""/>
                <span>{currentUser.name}</span>
                <button>+</button>
        </div>

        {stories.map(story => (
            <div className="story" key={story.id}>
                <img src={story.img} alt=""/>
                <span>{story.name}</span>
            </div>
        ))}
    </div>
  )
}

export default Stories;