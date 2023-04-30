import React from 'react'
import './login.scss';
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className='login'>
      <div className="card">
        <div className="left">
          <h1>Hello User.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut enim, 
            accusantium veniam dolores provident dolor minus doloribus vel cupiditate 
            velit modi temporibus ipsam consequuntur quo quis atque dolore? Blanditiis.
          </p>
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>  
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type='text' placeholder='username'/>
            <input type='password' placeholder='password'/>
            <Link to="/login">
              <button>Login</button>
            </Link>  
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login;