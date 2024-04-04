import React, { Suspense } from 'react';
import './Rigel.css';
import RigleImage from './assets/photos/image00007.jpeg';
import { motion, AnimatePresence } from "framer-motion"
import { Slideshow } from './SlideShow';
import { Canvas, useLoader } from '@react-three/fiber'
import { useFBX, OrbitControls } from "@react-three/drei"
import RigelGlt from './assets/models/rigelgt/RigelGlt'

function Rigel() {
    const Scene = () => {
        const fbx = useFBX("./assets/models/Poimandres.fbx");

        return <primitive object={fbx} scale={0.005} />;
    };

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
                <Canvas camera={{ position: [1, 1, 3], fov: 40 }}>
                    <ambientLight intensity={0.5} />
                    <OrbitControls />
                    <RigelGlt />
                    {/* <Scene /> */}
                </Canvas>
                {/* <Slideshow /> */}
                {/* <img src={RigleImage} alt="Rigel" /> */}
            </div>
        </div>
    );
}

export default Rigel;
