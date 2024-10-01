import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import { HomePage } from './component/HomePage';
import Education from './component/Education';
import Skils from './component/Skils';
import Contact from './component/Contact';
import Aos from 'aos';
import "aos/dist/aos.css"
import { useEffect } from 'react';

function App() {
  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <>
      <Navbar />
      <div className="container">
        <HomePage/>
        <Education/>
        <Skils/>
        <Contact/>
      </div>
    </>
  );
}

export default App;
