import React, { useState,useEffect } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import './Nav.css'

const Nav = () => {
    const [ winWidth,setWinWidth ] = useState(window.innerWidth)

    useEffect(() => {
    window.addEventListener('resize',Setting)
    window.addEventListener('load',Setting)
    setWinWidth(window.innerWidth) 
    }, [winWidth])

    function Setting(){       
        if(window.innerWidth > 600){
            document.querySelector('.side').style.width='20%'
            document.querySelector('.side').style.position='inherit'

        }
        else{
            document.querySelector('.side').style.width='0%'
        }
    }
    
  
    const slide =()=>{
        let side = document.querySelector('.side')
        let right = document.querySelector('.mainpage')
       
    
        if(side.style.width == '50%'  ){
            side.style.width='0%'
            document.body.style.overflow='scroll'
            right.removeEventListener('click',slide)
            side.style.position='initial'
        }
        else {
            side.style.width='50%'
            side.style.position='absolute'
            document.body.style.overflow='hidden'
            right.addEventListener('click',slide)
        }
    }
     
    return (
      
   
    <Navbar bg="light" id='nav'>
    <Container className='justify-content-start'>
        <div id='logo' className='me-1' onClick={window.innerWidth<600 ?slide:null}><span>T</span></div>
      <Navbar.Brand href="#home" id='nav-title'> Felt Teachers</Navbar.Brand>
    </Container>
  </Navbar>
  
  )
}

export default Nav