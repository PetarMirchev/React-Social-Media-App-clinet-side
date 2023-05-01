import React from 'react'
import './rightBar.scss';

const RightBar = () => {
  return (
    <div className='rightBar'>
        <div className="container">

          <div className="item">
              <span>Suggestions</span>
                <div className="user">
                  <div className="userInfo">
                    <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt=""/>
                    <span>Random Name</span>
                  </div>
                  <div className="buttons">
                    <button>follow</button>
                    <button>dismiss</button>
                  </div>
                </div>

                <div className="user">
                  <div className="userInfo">
                    <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt=""/>
                    <span>Random user</span>
                  </div>
                  <div className="buttons">
                    <button>follow</button>
                    <button>dismiss</button>
                  </div>
                </div>
          </div>


          <div className="item">
              <span>Activities</span>
              <div className="user">
                  <div className="userInfo">
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt=""/>
                    <p>
                      <span>Random user</span> post new images
                    </p>
                  </div>
                  <span>2 min ago</span>
              </div>

              <div className="user">
                  <div className="userInfo">
                    <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt=""/>
                    <p>
                      <span>Random user</span> post new images
                    </p>
                  </div>
                  <span>9 min ago</span>
              </div>

              <div className="user">
                  <div className="userInfo">
                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt=""/>
                    <p>
                      <span>Random user</span> post new images
                    </p>
                  </div>
                  <span>49 min ago</span>
              </div>

              <div className="user">
                  <div className="userInfo">
                    <img src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt=""/>
                    <p>
                      <span>Random user</span> post new images
                    </p>
                  </div>
                  <span>58 min ago</span>
              </div>
   

          </div>

          <div className="item">
            <span>Online Friends</span>
           
            <div className="user">
                  <div className="userInfo">
                    <img src="https://plus.unsplash.com/premium_photo-1674777843203-da3ebb9fbca0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt=""/>
                    <div className="online" />
                      <span>Friend user</span>          
                  </div>
            </div>

            <div className="user">
                  <div className="userInfo">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt=""/>
                    <div className="online" />
                      <span>Friend user</span>          
                  </div>
            </div>

            <div className="user">
                  <div className="userInfo">
                    <img src="https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt=""/>
                    <div className="online" />
                      <span>Friend user</span>          
                  </div>
            </div>

            <div className="user">
                  <div className="userInfo">
                    <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt=""/>
                    <div className="online" />
                      <span>Friend user</span>          
                  </div>
            </div>

            <div className="user">
                  <div className="userInfo">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt=""/>
                    <div className="online" />
                      <span>Friend user</span>          
                  </div>
            </div>

            <div className="user">
                  <div className="userInfo">
                    <img src="https://plus.unsplash.com/premium_photo-1669138512601-e3f00b684edc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt=""/>
                    <div className="online" />
                      <span>Friend user</span>          
                  </div>
            </div>

            <div className="user">
                  <div className="userInfo">
                    <img src="https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt=""/>
                    <div className="online" />
                      <span>Friend user</span>          
                  </div>
            </div>

            <div className="user">
                  <div className="userInfo">
                    <img src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt=""/>
                    <div className="online" />
                      <span>Friend user</span>          
                  </div>
            </div>

          </div>

        </div>
    </div>
  );
}

export default RightBar;