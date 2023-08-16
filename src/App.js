// import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/homepage';
import Contact from './pages/contact';
import Trip from './pages/roadtrip';
import Sidebar from './components/Sidebar';
import Resume from './pages/resume';
import Portfolio from './pages/portfolio';
import Project from './pages/project';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  };

  return (
    <Router>
      <div>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <Routes>
            <Route path='/' element={<Home />} exact/>
            <Route path='/roadtrip' element={<Trip />} />
            <Route path='/resume' element={<Resume />} />
            <Route path='/contact' element={<Contact />} />
						<Route path='/portfolio' element={<Portfolio />} />
						<Route path='/portfolio/:project' element={<Project />} />
						<Route path="*" element={<div>Page not found :(</div>} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
