import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import video from "./media/bg.mp4"

function App() {
  return (
    <>
      <Router>
        <video className="bg-image" autoPlay loop muted src={video} type="video/mp4" />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
