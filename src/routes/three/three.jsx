/** @jsxImportSource react */

import { qwikify$ } from "@builder.io/qwik-react";
import { useRef, useState, Suspense } from "react";
import { Canvas, useLoader, prop } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls, useGLTF, PerspectiveCamera } from "@react-three/drei";
export function ThreeJSReact() {
  return (
    <Canvas camera={{ position: [0, 1, 1.5]}}>
        <Suspense>
              <Model  castshadow/>
           </Suspense>
      
      <ambientLight args={[0xffffff]} intensity={1} />
      <directionalLight position={[5, 5, 5]} intensity={2} color="white" />
     
     
      {/* <OrbitControls  /> */}
      {/* <PerspectiveCamera /> */}
      <OrbitControls  enableZoom={true} zoom={5} enablePan={true} />
    </Canvas>
  );
}
const Model = () => {
    const gltf = useLoader(GLTFLoader, "./donut-training.glb")
    return (
        <>
            <primitive  position={[0, 0, 0]} object={gltf.scene} scale={1} />
        </>
    );
};

export const ThreeJS = qwikify$(ThreeJSReact);
