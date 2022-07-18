// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/homepage';
import Contact from './pages/contact';
import Trip from './pages/roadtrip';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} exact/>
            <Route path='/roadtrip' element={<Trip/>} />
            <Route path='/contact' element={<Contact/>} />
        </Routes>
      </div>
    </Router>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
