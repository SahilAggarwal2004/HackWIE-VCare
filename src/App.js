import './App.css';
import './style2.css';
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Home from './components/Home';
import Threat from './components/Threat';
import Solution from './components/Solution';
import Contact from './components/Contact';
import Success from './components/Success';
import { useState } from 'react';

function App() {

  const [col, setCol] = useState('col-md-4')
  const root = document.getElementById('root')

  window.addEventListener('resize', () => {
    if (root.clientWidth >= 992) { setCol('col-md-4') }
    else { setCol('col-md-6') }
  })

  return (
    <div id="width">
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<><Navbar /><Home /></>} />
          <Route path="/threat" element={<><Navbar /><Threat col={col} /></>} />
          <Route path="/solution" element={<><Navbar /><Solution col={col} /></>} />
          <Route path="/contact" element={<><Navbar /><Contact /></>} />
          <Route path="/contact/success" element={<><Navbar /><Success /></>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
