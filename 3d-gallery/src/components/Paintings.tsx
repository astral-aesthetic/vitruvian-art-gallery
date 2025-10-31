import React from 'react'
import Painting from './Painting'

// 画作数据配置
const paintingsData = [
  // 前墙 (3幅)
  {
    id: 1,
    imageSrc: '/images/Velazquez_Las_Meninas_Baroque_Art_Painting_Museum.jpg',
    position: [-3.75, 2.1, -5.9] as [number, number, number],
    rotation: [0, 0, 0] as [number, number, number],
    title: '宫娥'
  },
  {
    id: 2, 
    imageSrc: '/images/Raphael-Saint-Catherine-Alexandria-Renaissance-Painting.jpg',
    position: [0, 2.1, -5.9] as [number, number, number],
    rotation: [0, 0, 0] as [number, number, number],
    title: '圣凯瑟琳'
  },
  {
    id: 3,
    imageSrc: '/images/caravaggio_the_taking_of_christ_baroque_painting.jpg', 
    position: [3.75, 2.1, -5.9] as [number, number, number],
    rotation: [0, 0, 0] as [number, number, number],
    title: '基督被捕'
  },
  
  // 右墙 (3幅)
  {
    id: 4,
    imageSrc: '/images/rembrandt_self_portrait_art_museum_masterpiece.jpg',
    position: [5.9, 2.1, -3.75] as [number, number, number],
    rotation: [0, -Math.PI / 2, 0] as [number, number, number],
    title: '伦勃朗自画像'
  },
  {
    id: 5,
    imageSrc: '/images/impressionist_paintings_art_gallery_exhibition.jpg',
    position: [5.9, 2.1, 0] as [number, number, number],
    rotation: [0, -Math.PI / 2, 0] as [number, number, number], 
    title: '印象派作品集'
  },
  {
    id: 6,
    imageSrc: '/images/classical_landscape_fjord_oil_painting.jpg',
    position: [5.9, 2.1, 3.75] as [number, number, number],
    rotation: [0, -Math.PI / 2, 0] as [number, number, number],
    title: '峡湾风景'
  },
  
  // 后墙 (3幅)
  {
    id: 7,
    imageSrc: '/images/abstract_art_museum_exhibition.jpg',
    position: [3.75, 2.1, 5.9] as [number, number, number],
    rotation: [0, Math.PI, 0] as [number, number, number],
    title: '抽象艺术'
  },
  {
    id: 8,
    imageSrc: '/images/classical_still_life_painting_fruits_bread_gallery_art.jpg',
    position: [0, 2.1, 5.9] as [number, number, number],
    rotation: [0, Math.PI, 0] as [number, number, number],
    title: '静物画'
  },
  {
    id: 9,
    imageSrc: '/images/vincent_van_gogh_the_siesta_oil_painting.jpg',
    position: [-3.75, 2.1, 5.9] as [number, number, number],
    rotation: [0, Math.PI, 0] as [number, number, number],
    title: '午休'
  },
  
  // 左墙 (3幅) 
  {
    id: 10,
    imageSrc: '/images/seascape_painting_maritime_art_gallery_coast.jpg',
    position: [-5.9, 2.1, 3.75] as [number, number, number],
    rotation: [0, Math.PI / 2, 0] as [number, number, number],
    title: '海景画'
  },
  {
    id: 11,
    imageSrc: '/images/classical_still_life_flower_painting_art_gallery.jpg',
    position: [-5.9, 2.1, 0] as [number, number, number],
    rotation: [0, Math.PI / 2, 0] as [number, number, number],
    title: '花草静物'
  },
  {
    id: 12,
    imageSrc: '/images/19th-century-boy-folk-art-portrait-painting-museum-collection.jpg',
    position: [-5.9, 2.1, -3.75] as [number, number, number],
    rotation: [0, Math.PI / 2, 0] as [number, number, number],
    title: '19世纪男孩肖像'
  }
]

const Paintings: React.FC = () => {
  return (
    <group>
      {paintingsData.map((painting) => (
        <Painting
          key={painting.id}
          imageSrc={painting.imageSrc}
          position={painting.position}
          rotation={painting.rotation}
          title={painting.title}
        />
      ))}
    </group>
  )
}

export default Paintings