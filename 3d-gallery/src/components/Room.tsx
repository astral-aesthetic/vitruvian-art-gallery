import React from 'react'
import { useTexture } from '@react-three/drei'
import { asset } from '@/lib/utils'
import * as THREE from 'three'

const Room: React.FC = () => {
  const floorTexture = useTexture(asset('textures/dark_walnut_wood_floor_seamless_texture_3d.jpg'))
  
  floorTexture.wrapS = floorTexture.wrapT = THREE.RepeatWrapping
  floorTexture.repeat.set(8, 6)

  return (
    <group>
      <mesh receiveShadow position={[0, 0, 0]}>
        <planeGeometry args={[12, 12]} />
        <meshStandardMaterial 
          map={floorTexture} 
          roughness={0.3}
          metalness={0.1}
        />
        <mesh position={[0, 0, 0.001]} rotation={[-Math.PI / 2, 0, 0]} />
      </mesh>
      
      <mesh receiveShadow position={[0, 4, -6]}>
        <planeGeometry args={[12, 8]} />
        <meshStandardMaterial 
          color="#fdfdfd" 
          roughness={0.1}
          metalness={0.05}
        />
      </mesh>
      
      <mesh receiveShadow position={[0, 4, 6]}>
        <planeGeometry args={[12, 8]} />
        <meshStandardMaterial 
          color="#fdfdfd" 
          roughness={0.1}
          metalness={0.05}
        />
      </mesh>
      
      <mesh receiveShadow position={[-6, 4, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[12, 8]} />
        <meshStandardMaterial 
          color="#fdfdfd" 
          roughness={0.1}
          metalness={0.05}
        />
      </mesh>
      
      <mesh receiveShadow position={[6, 4, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <planeGeometry args={[12, 8]} />
        <meshStandardMaterial 
          color="#fdfdfd" 
          roughness={0.1}
          metalness={0.05}
        />
      </mesh>
      
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