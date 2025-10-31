import React from 'react'
import Lighting from './Lighting'
import Room from './Room'
import Paintings from './Paintings'
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