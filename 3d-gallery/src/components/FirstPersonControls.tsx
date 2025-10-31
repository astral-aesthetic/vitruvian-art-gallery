import React, { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

const FirstPersonControls: React.FC = () => {
  const { camera } = useThree()
  const position = useRef<[number, number, number]>([0, 1.7, 3])
  
  const velocity = useRef([0, 0, 0])
  const direction = useRef(new THREE.Vector3())
  const frontVector = useRef(new THREE.Vector3())
  const sideVector = useRef(new THREE.Vector3())
  
  // Keyboard state
  const keys = useRef({
    forward: false,
    backward: false,
    left: false,
    right: false
  })
  
  // Keyboard event listeners
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.code) {
        case 'KeyW':
        case 'ArrowUp':
          keys.current.forward = true
          break
        case 'KeyS':
        case 'ArrowDown':
          keys.current.backward = true
          break
        case 'KeyA':
        case 'ArrowLeft':
          keys.current.left = true
          break
        case 'KeyD':
        case 'ArrowRight':
          keys.current.right = true
          break
      }
    }
    
    const handleKeyUp = (e: KeyboardEvent) => {
      switch (e.code) {
        case 'KeyW':
        case 'ArrowUp':
          keys.current.forward = false
          break
        case 'KeyS':
        case 'ArrowDown':
          keys.current.backward = false
          break
        case 'KeyA':
        case 'ArrowLeft':
          keys.current.left = false
          break
        case 'KeyD':
        case 'ArrowRight':
          keys.current.right = false
          break
      }
    }
    
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('keyup', handleKeyUp)
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('keyup', handleKeyUp)
    }
  }, [])
  
  // Update loop - simple camera movement without physics
  useFrame(() => {
    // Calculate movement direction
    frontVector.current.set(0, 0, Number(keys.current.backward) - Number(keys.current.forward))
    sideVector.current.set(Number(keys.current.left) - Number(keys.current.right), 0, 0)
    
    direction.current
      .subVectors(frontVector.current, sideVector.current)
      .normalize()
      .multiplyScalar(0.1) // Movement speed
      .applyEuler(camera.rotation)
    
    // Update camera position directly
    position.current[0] += direction.current.x
    position.current[1] += direction.current.y
    position.current[2] += direction.current.z
    
    camera.position.set(position.current[0], position.current[1], position.current[2])
  })
  
  return null
}

export default FirstPersonControls