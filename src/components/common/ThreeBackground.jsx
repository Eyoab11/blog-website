// import { useRef } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import * as THREE from 'three';
// import { OrbitControls, Stars } from '@react-three/drei';

// const ThreeScene = ({ darkMode }) => {
//   const meshRef = useRef();
  
//   useFrame(({ clock }) => {
//     meshRef.current.rotation.x = clock.getElapsedTime() * 0.05;
//     meshRef.current.rotation.y = clock.getElapsedTime() * 0.05;
//   });

//   return (
//     <>
//       <ambientLight intensity={0.5} />
//       <pointLight position={[10, 10, 10]} />
//       <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
//       <mesh ref={meshRef}>
//         <icosahedronGeometry args={[2, 1]} />
//         <meshStandardMaterial 
//           color={darkMode ? "#fbbf24" : "#4f46e5"} 
//           wireframe 
//           transparent 
//           opacity={0.2} 
//         />
//       </mesh>
//       <OrbitControls enableZoom={false} />
//     </>
//   );
// };

// export const ThreeBackground = ({ darkMode }) => {
//   return (
//     <Canvas className="absolute top-0 left-0 w-full h-full z-0">
//       <ThreeScene darkMode={darkMode} />
//     </Canvas>
//   );
// };