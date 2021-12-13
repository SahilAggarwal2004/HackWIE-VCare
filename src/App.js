import './App.css';
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
import About from './components/About';
import Contact from './components/Contact';
import video from "./media/bg.mp4"

function App() {
  return (
    <>
      <Router>
        <video autoPlay loop muted src={video} type="video/mp4" />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<><Navbar /><Home /></>} />
          <Route path="/threat" element={<><Navbar /><Threat /></>} />
          <Route path="/solution" element={<><Navbar /><Solution /></>} />
          <Route path="/about" element={<><Navbar /><About /></>} />
          <Route path="/contact" element={<><Navbar /><Contact /></>} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
