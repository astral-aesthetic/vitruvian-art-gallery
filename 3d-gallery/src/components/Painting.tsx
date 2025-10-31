import React from 'react'
import * as THREE from 'three'

interface PaintingProps {
  imageSrc: string
  position: [number, number, number]
  rotation: [number, number, number]
  title: string
}

const Painting: React.FC<PaintingProps> = ({ imageSrc, position, rotation, title }) => {
  // Simplified version without texture loading to prevent matrix errors
  const [texture, setTexture] = React.useState<THREE.Texture | null>(null)
  
  React.useEffect(() => {
    const textureLoader = new THREE.TextureLoader()
    textureLoader.load(
      imageSrc,
      (loadedTexture) => {
        setTexture(loadedTexture)
      },
      undefined,
      (error) => {
        console.warn(`[Painting] Failed to load texture for ${title}:`, error)
      }
    )
  }, [imageSrc, title])
  
  return (
    <group position={position} rotation={rotation}>
      {/* Frame */}
      <mesh receiveShadow castShadow>
        <boxGeometry args={[1.6, 1.3, 0.05]} />
        <meshStandardMaterial 
          color="#3D352E" 
          roughness={0.4}
          metalness={0.2}
        />
      </mesh>
      
      {/* Painting - solid color fallback or texture */}
      <mesh position={[0, 0, 0.026]} receiveShadow>
        <planeGeometry args={[1.5, 1.2]} />
        {texture ? (
          <meshStandardMaterial 
            map={texture} 
            roughness={0.7}
            metalness={0.0}
          />
        ) : (
          <meshStandardMaterial 
            color="#404040" 
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