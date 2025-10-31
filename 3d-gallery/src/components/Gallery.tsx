import React from 'react'
import Lighting from './Lighting'
import Room from './Room'
import Paintings from './Paintings'
import FirstPersonControls from './FirstPersonControls'

const Gallery: React.FC = () => {
  try {
    console.log('[Gallery] Rendering with Room, Paintings, and FirstPersonControls enabled')
    return (
      <>
        <Lighting />
        <Room />
        <Paintings />
        <FirstPersonControls />
        {/* DISABLED COMPONENTS - To be re-enabled:
          <Sky />
        */}
      </>
    )
  } catch (err) {
    console.error('[Gallery] Render error:', err)
    throw err
  }
}

export default Gallery