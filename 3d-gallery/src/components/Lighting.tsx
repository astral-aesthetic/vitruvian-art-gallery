import React from 'react'

const Lighting: React.FC = () => {
  return (
    <>
      {/* Ambient light - soft overall illumination */}
      <ambientLight intensity={0.6} color="#ffffff" />
      
      {/* Main directional light - top-down lighting */}
      <directionalLight
        position={[5, 10, 5]}
        intensity={0.8}
        color="#ffffff"
      />
      
      {/* Fill light - from the side */}
      <directionalLight
        position={[-5, 6, -5]}
        intensity={0.4}
        color="#ffffff"
      />
    </>
  )
}

export default Lighting