import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import SocialLinks from './components/SocialLinks';
// import './index.css'
function App() {
  return <div>
    <NavBar />
    <Home />
    <Process />
    <About />
    <Portfolio />
    <Experience />
    <Contact />
    <SocialLinks />
  </div>
}

export default App;
