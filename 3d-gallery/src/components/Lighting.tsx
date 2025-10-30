import React from 'react'
import * as THREE from 'three'

// 参考画作位置配置聚光灯
const spotlightPositions = [
  // 前墙聚光灯
  { position: [-3.75, 6, -4] as [number, number, number], target: [-3.75, 2.1, -5.9] as [number, number, number] },
  { position: [0, 6, -4] as [number, number, number], target: [0, 2.1, -5.9] as [number, number, number] }, 
  { position: [3.75, 6, -4] as [number, number, number], target: [3.75, 2.1, -5.9] as [number, number, number] },
  
  // 右墙聚光灯
  { position: [4, 6, -3.75] as [number, number, number], target: [5.9, 2.1, -3.75] as [number, number, number] },
  { position: [4, 6, 0] as [number, number, number], target: [5.9, 2.1, 0] as [number, number, number] },
  { position: [4, 6, 3.75] as [number, number, number], target: [5.9, 2.1, 3.75] as [number, number, number] },
  
  // 后墙聚光灯
  { position: [3.75, 6, 4] as [number, number, number], target: [3.75, 2.1, 5.9] as [number, number, number] },
  { position: [0, 6, 4] as [number, number, number], target: [0, 2.1, 5.9] as [number, number, number] },
  { position: [-3.75, 6, 4] as [number, number, number], target: [-3.75, 2.1, 5.9] as [number, number, number] },
  
  // 左墙聚光灯
  { position: [-4, 6, 3.75] as [number, number, number], target: [-5.9, 2.1, 3.75] as [number, number, number] },
  { position: [-4, 6, 0] as [number, number, number], target: [-5.9, 2.1, 0] as [number, number, number] },
  { position: [-4, 6, -3.75] as [number, number, number], target: [-5.9, 2.1, -3.75] as [number, number, number] }
]

const Lighting: React.FC = () => {
  return (
    <>
      {/* 环境光 - 柔和的整体照明 */}
      <ambientLight intensity={0.3} color="#ffffff" />
      
      {/* 主照明 - 模拟天顶光源 */}
      <directionalLight
        position={[0, 10, 0]}
        intensity={0.5}
        color="#ffffff"
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      
      {/* 为每幅画作配置聚光灯 */}
      {spotlightPositions.map((spotlight, index) => {
        const targetObject = new THREE.Object3D()
        targetObject.position.set(spotlight.target[0], spotlight.target[1], spotlight.target[2])
        
        return (
          <spotLight
            key={index}
            position={spotlight.position}
            target={targetObject}
            intensity={1.2}
            angle={Math.PI / 6} // 30度角度
            penumbra={0.3} // 边缘软化
            decay={1.5}
            distance={15}
            color="#ffffff"
            castShadow
            shadow-mapSize={[1024, 1024]}
            shadow-camera-fov={45}
            shadow-camera-near={1}
            shadow-camera-far={20}
          />
        )
      })}
      
      {/* 地板补光 - 增强反射效果 */}
      <rectAreaLight
        position={[0, 0.1, 0]}
        width={12}
        height={12}
        intensity={0.3}
        color="#ffeedd"
      />
    </>
  )
}

export default Lighting