import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import SignIn from './Components/SignIn';
import NavBar from './Components/NavBar';
import SignUp from './Components/SignUp';
import Main from './Components/Main';
import Test from './Components/Test';



function App() {

  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/newuser' element={<SignUp/>} />
        <Route path='/main' element={<Main/>} />
        <Route path='/test' element={<Test/>} />




      </Routes>
    </Router>

  );
}

export default App;
