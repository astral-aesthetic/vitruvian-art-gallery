import React, { useState, useEffect } from 'react'
import * as THREE from 'three'

const Room: React.FC = () => {
  const [floorTexture, setFloorTexture] = useState<THREE.Texture | null>(null)

  useEffect(() => {
    const loader = new THREE.TextureLoader()
    loader.load(
      '/images/abstract_art_museum_exhibition.jpg',
      (tex) => {
        tex.wrapS = THREE.RepeatWrapping
        tex.wrapT = THREE.RepeatWrapping
        tex.repeat.set(8, 6)
        setFloorTexture(tex)
      },
      undefined,
      (error) => {
        console.warn('Failed to load floor texture', error)
        // Continue without texture
      }
    )
  }, [])

  return (
    <group>
      {/* Floor */}
      <mesh position={[0, 0, 0]}>
        <planeGeometry args={[12, 12]} />
        {floorTexture ? (
          <meshStandardMaterial 
            map={floorTexture} 
            roughness={0.3}
            metalness={0.1}
          />
        ) : (
          <meshStandardMaterial 
            color="#8B7355" 
            roughness={0.3}
            metalness={0.1}
          />
        )}
      </mesh>
      
      {/* Front Wall */}
      <mesh position={[0, 4, -6]}>
        <planeGeometry args={[12, 8]} />
        <meshStandardMaterial 
          color="#fdfdfd" 
          roughness={0.1}
          metalness={0.05}
        />
      </mesh>
      
      {/* Back Wall */}
      <mesh position={[0, 4, 6]} rotation={[0, Math.PI, 0]}>
        <planeGeometry args={[12, 8]} />
        <meshStandardMaterial 
          color="#fdfdfd" 
          roughness={0.1}
          metalness={0.05}
        />
      </mesh>
      
      {/* Left Wall */}
      <mesh position={[-6, 4, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[12, 8]} />
        <meshStandardMaterial 
          color="#fdfdfd" 
          roughness={0.1}
          metalness={0.05}
        />
      </mesh>
      
      {/* Right Wall */}
      <mesh position={[6, 4, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <planeGeometry args={[12, 8]} />
        <meshStandardMaterial 
          color="#fdfdfd" 
          roughness={0.1}
          metalness={0.05}
        />
      </mesh>
      
      {/* Ceiling */}
      <mesh position={[0, 8, 0]} rotation={[Math.PI / 2, 0, 0]}>
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