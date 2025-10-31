import React from 'react'
import Room from './Room'
import Lighting from './Lighting'

const Gallery: React.FC = () => {
  try {
    console.log('[Gallery] Rendering three.js gallery scene - minimal test')
    return (
      <>
        <Lighting />
        <Room />
      </>
    )
  } catch (err) {
    console.error('[Gallery] Render error:', err)
    throw err
  }
}

export default Gallery