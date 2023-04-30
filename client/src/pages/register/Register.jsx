import React from 'react'
import './register.scss'
import { Link } from "react-router-dom";


const Register = () => {
  return (
    <div className='register'>
      <div className="card">
        <div className="left">
          <h1>Social Media</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut enim, 
            accusantium veniam dolores provident dolor minus doloribus vel cupiditate 
            velit modi temporibus ipsam consequuntur quo quis atque dolore? Blanditiis.
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
              <button>Login</button>
          </Link> 
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type='text' placeholder='username'/>
            <input type='email' placeholder='email'/>
            <input type='password' placeholder='password'/>
            <input type='text' placeholder='name'/>
            <Link to="/register">
              <button>Register</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register;