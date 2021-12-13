import './App.css';
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
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
        <Navbar />
        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/threat" element={<Threat />} />
          <Route path="/solution" element={<Solution />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
