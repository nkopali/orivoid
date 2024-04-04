import { useEffect, useRef } from 'react'
import { gsap } from 'gsap';
import './App.css'
import Logo from './assets/orivoid_logo.svg'
import LogoMod from './assets/vectorpaint.svg'
import SplitType from 'split-type'
import Rigel from './Rigel';

function App() {

  const textRef = useRef(null);

  useEffect(() => {
    // GSAP animation
    const split = new SplitType(".text", { types: "words", wordClass: "word" });

    gsap.to(".word", {
      opacity: 1,
      y: 50,
      stagger: 0.09,
      duration: 1,
    });

    gsap.to(".logo", {
      opacity: 1,
      duration: 4,
    });

    gsap.to(".see_more", {
      y: 9,
      duration: 0.5,
      yoyo: true,
      repeat: -1,

    });

  }, []);

  const handleSeeMore = () => {
    const targetElement = document.getElementById("rigel-container");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div>
      <div className="centered-container">
        <img src={LogoMod} alt="Logo" className="logo" />
        <div className="text" ref={textRef}>Build Your Own Decorations</div>
        <div className="see_more" onClick={handleSeeMore}>
          (↓See More↓)
        </div>
      </div>
      <div id='rigel-container'>
        <Rigel />
      </div>
    </div>
  )
}

export default App
