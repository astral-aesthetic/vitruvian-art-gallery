import React from 'react'
import Room from './Room'
import Paintings from './Paintings'
import Lighting from './Lighting'
import FirstPersonControls from './FirstPersonControls'

const Gallery: React.FC = () => {
  return (
    <>
      <Lighting />
      <Room />
      <Paintings />
      <FirstPersonControls />
    </>
  )
}

export default Gallery