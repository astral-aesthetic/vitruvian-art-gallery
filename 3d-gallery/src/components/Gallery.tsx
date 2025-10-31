import React from 'react'
import Lighting from './Lighting'
import FirstPersonControls from './FirstPersonControls'

const Gallery: React.FC = () => {
  try {
    console.log('[Gallery] Rendering with FirstPersonControls enabled')
    return (
      <>
        <Lighting />
        <FirstPersonControls />
        {/* DISABLED COMPONENTS - To be re-enabled:
          <Room />
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