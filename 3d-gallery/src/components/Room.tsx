import React from 'react'
import * as THREE from 'three'

const Room: React.FC = () => {
  return (
    <group>
      {/* Floor */}
      <mesh receiveShadow position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[12, 12]} />
        <meshStandardMaterial 
          color="#8B6F47"
          roughness={0.3}
          metalness={0.1}
        />
      </mesh>
      
      {/* Back wall */}
      <mesh receiveShadow position={[0, 4, -6]}>
        <planeGeometry args={[12, 8]} />
        <meshStandardMaterial 
          color="#fdfdfd" 
          roughness={0.1}
          metalness={0.05}
        />
      </mesh>
      
      {/* Front wall */}
      <mesh receiveShadow position={[0, 4, 6]}>
        <planeGeometry args={[12, 8]} />
        <meshStandardMaterial 
          color="#fdfdfd" 
          roughness={0.1}
          metalness={0.05}
        />
      </mesh>
      
      {/* Left wall */}
      <mesh receiveShadow position={[-6, 4, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[12, 8]} />
        <meshStandardMaterial 
          color="#fdfdfd" 
          roughness={0.1}
          metalness={0.05}
        />
      </mesh>
      
      {/* Right wall */}
      <mesh receiveShadow position={[6, 4, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <planeGeometry args={[12, 8]} />
        <meshStandardMaterial 
          color="#fdfdfd" 
          roughness={0.1}
          metalness={0.05}
        />
      </mesh>
      
      {/* Ceiling */}
      <mesh receiveShadow position={[0, 8, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[12, 12]} />
        <meshStandardMaterial 
          color="#f8f8f8" 
          roughness={0.2}
          metalness={0.0}
        />
      </mesh>
    </group>
  )
}

export default Room