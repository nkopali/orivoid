import './Rigel.css';
import { Slideshow } from './SlideShow';
import { gsap } from 'gsap';
import { Canvas, useLoader, useThree } from '@react-three/fiber'
import { Box, OrbitControls, useGLTF } from '@react-three/drei';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import { AmbientLight } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import Rigel3D from './Rigel3D';
import Rigel3DCentre from './Rigel3DCentre';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// function Scene() {
//     const fbx = useLoader(FBXLoader, '../RIGEL_layered_ascii_001.fbx')
//     return <primitive object={fbx} />
// }

// function Scene2() {
//     const gltf = useLoader(GLTFLoader, '../RIGEL_layered_001.gltf')
//     gltf.scene.position.set(100, 10, 10)
//     gltf.scene.scale.set(10, 10, 10)
//     return <primitive object={gltf.scene} />
// }

function CameraFOVAnimation() {
    const { camera } = useThree(); // This hook gives you access to the Three.js camera

    useEffect(() => {
        gsap.to(camera, {
            fov: 40,
            duration: 10,
            onUpdate: () => camera.updateProjectionMatrix(),
        });
    }, [camera]);

    return null;
}

function useIsVisible(ref) {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) =>
            setIntersecting(entry.isIntersecting)
        );

        observer.observe(ref.current);

        return () => {
            observer.disconnect();
        };
    }, [ref]);

    return isIntersecting;
}

function Rigel() {
    const canvas = useRef();
    const isVisible = useIsVisible(canvas);

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
                <Canvas ref={canvas} camera={{ position: [2, 1, 1], fov: 2 }} style={{ backgroundColor: '#E5E5E5', width: '90%', height: "90%" }} className='rigel-canvas'>
                    <OrbitControls enablePan={false} enableRotate={true} autoRotate={true} />
                    <ambientLight intensity={0.5} />
                    <Rigel3DCentre />
                    <directionalLight position={[5, 10, 0]} intensity={1} />
                    <directionalLight position={[-5, 10, 0]} intensity={1} />
                    {isVisible ? <CameraFOVAnimation /> : null}
                </Canvas>
                {/* <Slideshow /> */}
            </div>
        </div>
    );
}

export default Rigel;
