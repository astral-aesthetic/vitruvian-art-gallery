import React from 'react'
import Lighting from './Lighting'
import Room from './Room'
import Paintings from './Paintings'
import FirstPersonControls from './FirstPersonControls'

const Gallery: React.FC = () => {
  try {
    console.log('[Gallery] Rendering fully enabled gallery')
    return (
      <>
        <Lighting />
        <Room />
        <Paintings />
        <FirstPersonControls />
      </>
    )
  } catch (err) {
    console.error('[Gallery] Render error:', err)
    throw err
  }
}

export default Gallery