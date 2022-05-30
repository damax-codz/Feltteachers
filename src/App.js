import logo from './logo.svg';
import './App.css';
import Nav from './components/Navbar/Nav';
import Backcircle from './components/Backcircles/Backcircle';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Forgot from './components/Forgot password/Forgot';
import Test from './components/Testpage/Test';
import 'react-toastify/dist/ReactToastify.css';
import Find from './components/Findteachers/Find';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Routes >
        <Route path='/Feltteachers/' element={<Signup />} />
        <Route path='/Feltteachers/login' element={<Login />} />
        <Route path='/Feltteachers/forgot' element={<Forgot />} />
        <Route path='/Feltteachers/test' element={<Test />} />
        <Route path='/Feltteachers/findteachers' element={<Find />} />
      </Routes>
     
      </BrowserRouter>
    </div>
  );
}

export default App;
