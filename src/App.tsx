import { useEffect, useRef } from 'react'
import { gsap } from 'gsap';
import './App.css'
import Logo from './assets/ORIVOID_logo_006.svg';
import SplitType from 'split-type'
import Rigel from './Rigel';
import downIcon from './assets/circle_chev_down.svg'

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
      y: 50
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
        <img src={Logo} alt="Logo" className='logo' />
        <div className="text" ref={textRef}>Build Your Own Decorations</div>
        <div className="see_more" onClick={handleSeeMore}>
          See More
          <img src={downIcon} alt="Logo" className="downIcon" />
        </div>
      </div>
      <div id='rigel-container'>
        <Rigel />
      </div>
    </div>
  )
}

export default App
