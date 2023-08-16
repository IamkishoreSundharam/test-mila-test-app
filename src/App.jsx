import { useState } from 'react'
import Home from "./Home";
import Secondpage from "./2ndpage";
import Thirdpage from "./3rdpage";
import Nav from "./nav"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        
         <Nav/>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/second" element={<Secondpage/>}/>
        <Route path="/third" element={<Thirdpage/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
