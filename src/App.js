import './App.css';
// import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Portfolio from './components/Portfolio';
import Education from './components/Education';
import SocialLinks from './components/SocialLinks';
import Projects from './components/Projects';
function App() {
  return <div>
    <NavBar />
    <Home />
    <Education />
    {/* <About /> */}
    <Projects />
    {/* <Portfolio /> */}
    <Experience />
    <Contact />
    <SocialLinks />
  </div>
}

export default App;
