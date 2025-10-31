import React, { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { useSphere } from '@react-three/cannon'
import { PointerLockControls } from '@react-three/drei'
import * as THREE from 'three'

const FirstPersonControls: React.FC = () => {
  const { camera } = useThree()
  const controlsRef = useRef<any>()
  
  // 物理主体 - 玩家胶囊体
  const [playerRef, api] = useSphere(() => ({
    mass: 1,
    type: 'Dynamic',
    position: [0, 1.7, 3],
    material: {
      friction: 0.4,
      restitution: 0.1
    },
    fixedRotation: true // 防止翻倒
  }))
  
  const velocity = useRef([0, 0, 0])
  const direction = useRef(new THREE.Vector3())
  const frontVector = useRef(new THREE.Vector3())
  const sideVector = useRef(new THREE.Vector3())
  
  // 键盘状态
  const keys = useRef({
    forward: false,
    backward: false,
    left: false,
    right: false
  })
  
  // 键盘事件监听
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
  
  // 更新循环
  useFrame(() => {
    // 更新相机位置
    if (playerRef.current) {
      camera.position.copy(playerRef.current.position)
    }
    
    // 计算移动方向
    frontVector.current.set(0, 0, Number(keys.current.backward) - Number(keys.current.forward))
    sideVector.current.set(Number(keys.current.left) - Number(keys.current.right), 0, 0)
    
    direction.current
      .subVectors(frontVector.current, sideVector.current)
      .normalize()
      .multiplyScalar(2.5) // 移动速度 2.5 m/s
      .applyEuler(camera.rotation)
    
    // 应用速度
    api.velocity.set(direction.current.x, velocity.current[1], direction.current.z)
  })
  
  // 监听速度变化
  React.useEffect(() => {
    const unsubscribe = api.velocity.subscribe((v) => {
      velocity.current = v
    })
    return unsubscribe
  }, [api.velocity])
  
  return (
    <>
      <mesh ref={playerRef} visible={false}>
        <sphereGeometry args={[0.3]} />
      </mesh>
      
      <PointerLockControls ref={controlsRef} />
    </>
  )
}

export default FirstPersonControls