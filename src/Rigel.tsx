import React from 'react';
import './Rigel.css';
import RigleImage from './assets/photos/image00007.jpeg';
import { motion, AnimatePresence } from "framer-motion"
import { Slideshow } from './SlideShow';

function Rigel() {
    return (
        <div className="container">
            <div className="text-side">
                <h1>RIGEL</h1>
                <p> Introducing
                    RIGEL, the quirky
                    centerpiece
                    of our DIY
                    assembly artwork!
                    Rotate and reorder
                    its head to match
                    your mood swings
                    it's mood-altering
                    art at its finest!</p>
            </div>
            <div className="image-side">
                <Slideshow />
                {/* <img src={RigleImage} alt="Rigel" /> */}
            </div>
        </div>
    );
}

export default Rigel;
