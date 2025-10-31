import React from 'react'
import Lighting from './Lighting'

const Gallery: React.FC = () => {
  try {
    console.log('[Gallery] Rendering minimal scene - just lighting')
    return (
      <>
        <Lighting />
        {/* DISABLED COMPONENTS - To be re-enabled:
          <Room />
          <Sky />
          <Paintings />
          <FirstPersonControls />
        */}
      </>
    )
  } catch (err) {
    console.error('[Gallery] Render error:', err)
    throw err
  }
}

export default Gallery