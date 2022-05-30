import React, { useState } from 'react'
import Backcircle from '../Backcircles/Backcircle'
import './forgot.css'
import Spinner from 'react-bootstrap/Spinner'

const Forgot = () => {
    const [ mail,setMail ] = useState('')

    function handleChange(e){
    setMail(e.target.value)
    }
    function Verify(e){
        e.preventDefault()
        document.querySelector('.passform').innerHTML=`<div class='spinner-border' id='spin'  />`
       setTimeout(() => {
        document.querySelector('.passform').innerHTML= `<p class='done'>We've sent a password reset pls check your E-mail for confirmation</p>`
       }, 2500);
    }

  return (
    <>
    <Backcircle bg='white'/>
  <div className='forgotform'>
  <form className='passform'>
      <h3>Password Recovery</h3>
      <p>Enter your E-mail and we will send you a reset</p>
      <input type='email' name='firstname' placeholder='Email Address' onChange={handleChange}></input>
      <button type='submit' onClick={Verify}>Verify</button>
  </form>
  </div>
    </>
  )
}

export default Forgot