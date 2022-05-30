import {React ,useState,useEffect} from 'react'
import './find.css'
import ListGroup from 'react-bootstrap/ListGroup'

const Find = () => {
    const [ winWidth,setWinWidth ] = useState(window.innerWidth)
    const [ science,setScience ] = useState([
    "MATHEMATICS","ENGLISH LANGUAGE","PHYSICS","CHEMISTRY","FUTHER MATHS","BIOLOGY","GEOGRAPHY","AGRICULTURAL SCIENCE","CIVIC EDUCATION"
   ])
  const [ art,setArt ] = useState([
    "MATHEMATICS","ENGLISH LANGUAGE","GOVERNMENT","ECONOMICS","LIT-IN-ENG","CIVIC EDUCATION","COMMERCE","C-R-S","MUSIC",
   ])
  const [ commercial,setCommercial ] = useState([
    "MATHEMATICS","ENGLISH LANGUAGE","GOVERNMENT","ECONOMICS","FINANCIAL ACCOUNTING ","CIVIV EDUCATION","COMMERCE","C-R-S","FOOD AND NUTRITION",
   ])
  const [ nursery,setNusery ] = useState([
    "MATHEMATICS","ENGLISH LANGUAGE","PHYSICS","CHEMISTRY","FUTHER MATHS","BIOLOGY","GEOGRAPHY","AGRICULTURAL SCIENCE","CIVIC EDUCATION",
   ])
   const [ subjects,setSubjects ] = useState(science)

   const [ profile,setProfile ] = useState([
    'Samuel Alex','Samuel Alex','Samuel Alex','Samuel Alex','Samuel Alex','Samuel Alex','Samuel Alex','Samuel Alex',
    'Samuel Alex','Samuel Alex','Samuel Alex','Samuel Alex','Samuel Alex','Samuel Alex','Samuel Alex','Samuel Alex'
   ])
   const [ teacherLoaded,setTeacherLoaded ] = useState(false)

   function loadTeachers(){
       
       document.querySelectorAll('.teacherprofile').forEach(item=>item.style.display='flex')
       document.querySelectorAll('.subjects').forEach(item=>item.style.display='none')
       document.querySelector('.loadteachers').style.display='none'
       document.querySelector('.find').style.height='100rem'
       document.querySelector('.teacherpage').style.display='flex'
       document.querySelector('.teacherpage').style.flexWrap='wrap'
}


  return (
    <div className='find'>
    <div className='search'>
        <input type='text' placeholder='search' />
        <p>search for qualified teachers by subject category</p>

    </div>

        <div className='findings'>
        <div className='selection'>
    <ListGroup defaultActiveKey="#link1" className='rounded-5 '>
    <ListGroup.Item action  href="#link1"  onClick={()=>{setTeacherLoaded(true);setSubjects(science);}}>
      Science
    </ListGroup.Item>
    <ListGroup.Item  action  href="#link2" onClick={()=>{setSubjects(art);setTeacherLoaded(true)}}>
      Arts
    </ListGroup.Item>
    <ListGroup.Item action  href="#link3" onClick={()=>{setSubjects(commercial);setTeacherLoaded(true);}}>
      Commercial
    </ListGroup.Item>
    <ListGroup.Item action  href="#link4" onClick={()=>{setSubjects(nursery);setTeacherLoaded(true);}}>
      Nursery and Primary
    </ListGroup.Item>
  </ListGroup>


        </div>
        <div className='teacherpage'>
            
           {
               subjects.map((item,index)=>{
                   return(
                       <div className='subjects' key={index}>{item}</div>
                   )
                })
           }
           <div className='loadteachers'>
         <button onClick={()=>{loadTeachers();setTeacherLoaded(true)}}>Find Teachers</button>
           </div>

          

           {
               profile.map((item,index)=>{
                   return(
                       <div className='teacherprofile' key={index}>
                          <img src='https://scontent-los2-1.xx.fbcdn.net/v/t1.6435-9/73352352_2428733597384878_8387839531566497792_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEX3xd1FJ9xXoiL96UjRlouprp3dhZfiF2mund2Fl-IXaXbJiZrx_BJK1DWOM_ksrw0Jh1iAHqFmLQIA3uBoGbg&_nc_ohc=_KhK4HqcAdEAX_xWXhv&tn=JVxKDR0AS-q16Qpc&_nc_ht=scontent-los2-1.xx&oh=00_AT95afBNei1yia-naRsI8cAZ5XvGuL0BLvGB3n9UPGYpUQ&oe=62B9548F'  alt='profile'/>
                          <h5>{item}</h5>
                          <p>Lorem Ipsum Donor Lorem Ipsum Donor Lorem Ipsum</p>
                          <button>Profile</button>
                      </div>
                  )
                })
            }
           
        </div>
        </div>
    </div>
  )
}

export default Find