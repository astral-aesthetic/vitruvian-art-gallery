import React from 'react'
import Room from './Room'
import Paintings from './Paintings'
import Lighting from './Lighting'
import FirstPersonControls from './FirstPersonControls'

const Gallery: React.FC = () => {
  try {
    console.log('[Gallery] Rendering three.js gallery scene')
    return (
      <>
        <Lighting />
        <Room />
        {/* <Sky sunPosition={[0, 1, 0]} /> - Disabled for debugging */}
        {/* <Paintings /> - Disabled for debugging */}
        <FirstPersonControls />
      </>
    )
  } catch (err) {
    console.error('[Gallery] Render error:', err)
    throw err
  }
}

export default Gallery