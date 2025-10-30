import React from 'react'
import { useTexture } from '@react-three/drei'
import * as THREE from 'three'

interface PaintingProps {
  imageSrc: string
  position: [number, number, number]
  rotation: [number, number, number]
  title: string
}

const Painting: React.FC<PaintingProps> = ({ imageSrc, position, rotation, title }) => {
  const texture = useTexture(imageSrc)
  
  return (
    <group position={position} rotation={rotation}>
      {/* 画框 */}
      <mesh receiveShadow castShadow>
        <boxGeometry args={[1.6, 1.3, 0.05]} />
        <meshStandardMaterial 
          color="#3D352E" 
          roughness={0.4}
          metalness={0.2}
        />
      </mesh>
      
      {/* 画作 */}
      <mesh position={[0, 0, 0.026]} receiveShadow>
        <planeGeometry args={[1.5, 1.2]} />
        <meshStandardMaterial 
          map={texture} 
          roughness={0.7}
          metalness={0.0}
        />
      </mesh>
      
      {/* 画作标签 (可选) */}
      <mesh position={[0, -0.8, 0.01]}>
        <planeGeometry args={[0.8, 0.1]} />
        <meshBasicMaterial color="#ffffff" opacity={0.9} transparent />
      </mesh>
    </group>
  )
}

export default Painting