import React from 'react'
import Room from './Room'
import Paintings from './Paintings'
import Lighting from './Lighting'
import FirstPersonControls from './FirstPersonControls'
import { Sky } from '@react-three/drei'

const Gallery: React.FC = () => {
  try {
    console.log('[Gallery] Rendering three.js gallery scene')
    return (
      <>
        <Sky sunPosition={[0, 1, 0]} />
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