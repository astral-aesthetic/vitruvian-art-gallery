import React, { useState, useEffect } from 'react'
import * as THREE from 'three'

interface PaintingProps {
  imageSrc: string
  position: [number, number, number]
  rotation: [number, number, number]
  title: string
}

const Painting: React.FC<PaintingProps> = ({ imageSrc, position, rotation, title }) => {
  const [texture, setTexture] = useState<THREE.Texture | null>(null)
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    // Reset state when image source changes
    setTexture(null)
    setError(false)

    const loader = new THREE.TextureLoader()
    loader.load(
      imageSrc,
      (tex) => {
        console.log(`Loaded texture: ${imageSrc}`)
        setTexture(tex)
        setError(false)
      },
      undefined,
      (error) => {
        console.warn(`Failed to load texture: ${imageSrc}`, error)
        setError(true)
        setTexture(null)
        // Will render fallback color
      }
    )
  }, [imageSrc])

  return (
    <group position={position} rotation={rotation}>
      {/* Frame */}
      <mesh>
        <boxGeometry args={[1.6, 1.3, 0.05]} />
        <meshStandardMaterial 
          color="#3D352E" 
          roughness={0.4}
          metalness={0.2}
        />
      </mesh>
      
      {/* Painting */}
      <mesh position={[0, 0, 0.026]}>
        <planeGeometry args={[1.5, 1.2]} />
        {texture ? (
          <meshStandardMaterial 
            map={texture} 
            roughness={0.7}
            metalness={0.0}
          />
        ) : (
          <meshStandardMaterial 
            color="#8B8680" 
            roughness={0.7}
            metalness={0.0}
          />
        )}
      </mesh>
      
      {/* Label */}
      <mesh position={[0, -0.8, 0.01]}>
        <planeGeometry args={[0.8, 0.1]} />
        <meshBasicMaterial color="#ffffff" opacity={0.9} transparent />
      </mesh>
    </group>
  )
}

export default Painting