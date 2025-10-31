import React from 'react'
import Lighting from './Lighting'
import Room from './Room'
import FirstPersonControls from './FirstPersonControls'

const Gallery: React.FC = () => {
  return (
    <>
      <Lighting />
      <Room />
      <FirstPersonControls />
    </>
  )
}

export default Gallery