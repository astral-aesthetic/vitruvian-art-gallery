import React from 'react'
import Lighting from './Lighting'
import Room from './Room'
import FirstPersonControls from './FirstPersonControls'

const Gallery: React.FC = () => {
  try {
    console.log('[Gallery] Rendering with Room and FirstPersonControls enabled')
    return (
      <>
        <Lighting />
        <Room />
        <FirstPersonControls />
        {/* DISABLED COMPONENTS - To be re-enabled:
          <Sky />
          <Paintings />
        */}
      </>
    )
  } catch (err) {
    console.error('[Gallery] Render error:', err)
    throw err
  }
}

export default Gallery