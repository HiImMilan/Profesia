import logo from './logo.svg';
import Navbar from './components/navbar/Navbar.js';
import LandingDiv from './components/elements/LandingDiv.js';
import JobSearchDiv from './components/elements/JobSearchDiv.js';
import './App.css';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <LandingDiv/>
        <JobSearchDiv/>
    </div>
  );
}

export default App;
