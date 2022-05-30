import React from 'react'
import Signup from '../Signup/Signup'
import './back.css'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'

const Backcircle = (props) => {
  return (
      <>
    <div className='back' style={{backgroundColor:props.bg}}>
        <p><Link to='/Feltteachers/'>Back</Link></p>
    <div className='circleone'></div>
    <motion.div  animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "20%", "50%"],
    }} 
    transition={{ duration: 3.5 }}
    className='circletwo'></motion.div>
    <div className='circlethree'></div>
    <div className='circlefour'></div>
    </div>
    
      </>
    
  )
}

export default Backcircle