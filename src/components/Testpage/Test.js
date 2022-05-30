import React, { useEffect, useState } from 'react'
import './test.css'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';


const Test = () => {
    

    
  const [ progress,setProgress ] = useState(10)
  const  [ questions,setQuestions] = useState([
      'A cross between a horse and a zebra is called a "Hobra"', 'The atomic number for lithium is 17',
      "The black box in a plane is black","Alliumphobia is a fear of garlic",
      "Prince Harry is taller than Prince William","Meryl Streep has won two Academy Awards",
      "Marrakesh is the capital of Morocco","Waterloo has the greatest number of tube platforms in London",
      "M&M stands for Mars and Moordale","Gin is typically included in a Long Island Iced Tea"
  ])
  const [ questionNum,setQuestionNum ] = useState(1)
  const [ time,setTime]  = useState(60)

  function Next(){
      setProgress(progress+10)
      setQuestionNum(questionNum+1)

      document.querySelectorAll('.check').forEach(item=>item.checked=false)
      if( questionNum==10 ){
          setQuestionNum(10)
          document.querySelector('.controls').innerHTML=`
          <a href='/findteachers'><span class='submittest'>Submit</span></a>` 
          document.querySelector('.submittest').addEventListener('click',Submit)
      }
  }


  function Prev(){
      setProgress(progress-10)
      setQuestionNum(questionNum-1)
  }
  function Start(){
      
      document.querySelector('.instruction').style.display='none'
      document.querySelector('.testpage').style.display='flex'
      document.querySelector('.subject').style.alignItems='center'
      document.querySelector('.subject').innerHTML=`
      <p>Instructions :</p>
      <ol>
          <li>Answer all questions before the time elapse</li>
          <li>Answer all question correctly</li>
      </ol>
      `
  }

  function Submit(){
      toast.success("You've successfully taken your test")
  }
  useEffect(()=>{
      setTimeout(()=>setTime(time-1),1000)
  },[time])


 
  return (
      
      <div className='test'>
        <ToastContainer autoClose={3000} />
        <div className='side'>
            <div className='teach'>Teacher</div>
            <div className='subject'>
            <label htmlFor="subject">Choose subject:</label>
            <select name="subjects" id="subjects">
            <option value="mathematic">Mathematcs</option>
            <option value="saab">English</option>
            <option value="mercedes">Physics</option>
            <option value="audi">Chemistry</option>
            </select>
            </div>
        </div>
        <div className='mainpage'>
            <div className='instruction'>
                <p className='profile'><Link to='Feltteachers/'>Back to Profile</Link></p>
                
                <div>
                <p>Instructions :</p>
                <ol>
                    <li>Answer all questions before the time elapse</li>
                    <li>Answer all question correctly</li>
                    <li>When the test begins, it cannot be stopped until it is complete</li>
                </ol>
                </div>
                <button onClick={Start}>Begin test</button>
            </div>
              <div className='testpage'>
                <p className='profile'>00:{time}</p>
                <div>
                    <div className='prog'>
                    <ProgressBar now={progress} max={100} />
                    <div>Question {questionNum} of 10:</div>
                    </div>
                    <p className='question'>{questions[questionNum]}</p>
                        <div className='answer'>

                                    <span>
                                  <input type="radio"  value="true" id='true' className='check' />
                                  <label htmlFor='true' >True</label><br></br>
                                    </span>
                                
                                    <span>
                                  <input type="radio"  value="false" id='false' className='check' />
                                  <label htmlFor='false'>False</label><br></br>
                                    </span>
                                

                                    <span>
                                  <input type="radio"  value="all" id='all' className='check' />
                                  <label htmlFor='all' >All of the Above</label>
                                </span>

                        </div>
                <div className='controls'>
                    <span className='prev' onClick={Prev}>Prev</span>
                    <button onClick={Next}>Next</button> 
                </div>
                </div>


            </div>

          
        </div>
    </div>
  )
}

export default Test

