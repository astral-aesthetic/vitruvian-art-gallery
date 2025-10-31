import React from 'react'

const Lighting: React.FC = () => {
  console.log('[Lighting] Rendering basic lighting')
  
  return (
    <>
      {/* 环境光 - 柔和的整体照明 */}
      <ambientLight intensity={0.5} color="#ffffff" />
      
      {/* 主照明 - 模拟天顶光源 */}
      <directionalLight
        position={[0, 10, 0]}
        intensity={0.8}
        color="#ffffff"
      />
    </>
  )
}

export default Lighting