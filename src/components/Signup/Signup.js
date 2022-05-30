import React from 'react'
import { Link } from 'react-router-dom'
import Backcircle from '../Backcircles/Backcircle'
import './signup.css'


const Signup = () => {
  return (
      <>
      <Backcircle bg='black'/>
    <div className='form'>
    <form>
        <h3>Sign up as a teacher</h3>
        <input type='text' name='firstname' placeholder='First Name'></input>
        <input type='text' name='lastname' placeholder='Last Name'></input>
        <div>
            <input type='email' name='email' placeholder='Email Address'></input>
            <input type='tel' name='telephonr' placeholder='Phone'></input>
        </div>
        <input type='password' name='password' placeholder='Password'></input>
        <input type='password' name='password' placeholder='Confirm Password'></input>
        <input type='password' name='password' placeholder='Passcode'></input>
        <Link to='/Feltteachers/findteachers'> <button type='submit'>Sign up</button></Link>
        <p>Already have an account? <span><Link to='/Feltteachers/login'>Login</Link></span></p>

    </form>
    </div>
      </>
  )
}

export default Signup