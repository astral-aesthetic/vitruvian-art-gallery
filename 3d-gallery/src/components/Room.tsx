import React from 'react'
import { useTexture } from '@react-three/drei'
import { asset } from '@/lib/utils'
import { usePlane } from '@react-three/cannon'
import * as THREE from 'three'

const Room: React.FC = () => {
  const floorTexture = useTexture(asset('textures/dark_walnut_wood_floor_seamless_texture_3d.jpg'))
  
  floorTexture.wrapS = floorTexture.wrapT = THREE.RepeatWrapping
  floorTexture.repeat.set(8, 6)
  
  const [floorRef] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, 0, 0],
    material: { friction: 0.4, restitution: 0.1 }
  }))
  
  const [frontWallRef] = usePlane(() => ({
    position: [0, 4, -6],
    rotation: [0, 0, 0]
  }))
  
  const [backWallRef] = usePlane(() => ({
    position: [0, 4, 6],
    rotation: [0, Math.PI, 0]
  }))
  
  const [leftWallRef] = usePlane(() => ({
    position: [-6, 4, 0],
    rotation: [0, Math.PI / 2, 0]
  }))
  
  const [rightWallRef] = usePlane(() => ({
    position: [6, 4, 0],
    rotation: [0, -Math.PI / 2, 0]
  }))
  
  const [ceilingRef] = usePlane(() => ({
    rotation: [Math.PI / 2, 0, 0],
    position: [0, 8, 0]
  }))

  return (
    <group>
      <mesh ref={floorRef} receiveShadow>
        <planeGeometry args={[12, 12]} />
        <meshStandardMaterial 
          map={floorTexture} 
          roughness={0.3}
          metalness={0.1}
        />
      </mesh>
      
      <mesh ref={frontWallRef} receiveShadow>
        <planeGeometry args={[12, 8]} />
        <meshStandardMaterial 
          color="#fdfdfd" 
          roughness={0.1}
          metalness={0.05}
        />
      </mesh>
      
      <mesh ref={backWallRef} receiveShadow>
        <planeGeometry args={[12, 8]} />
        <meshStandardMaterial 
          color="#fdfdfd" 
          roughness={0.1}
          metalness={0.05}
        />
      </mesh>
      
      <mesh ref={leftWallRef} receiveShadow>
        <planeGeometry args={[12, 8]} />
        <meshStandardMaterial 
          color="#fdfdfd" 
          roughness={0.1}
          metalness={0.05}
        />
      </mesh>
      
      <mesh ref={rightWallRef} receiveShadow>
        <planeGeometry args={[12, 8]} />
        <meshStandardMaterial 
          color="#fdfdfd" 
          roughness={0.1}
          metalness={0.05}
        />
      </mesh>
      
      <mesh ref={ceilingRef} receiveShadow>
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