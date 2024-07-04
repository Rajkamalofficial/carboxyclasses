import React from 'react';
import Tile from './Tile'

const Tab11th = () => {

  const tileData = [
    {
      image: '/chemistry.png',
      title: 'Chemistry'
    },
    {
      image: '/biology.png',
      title: 'Biology'
    },
    {
      image: '/physics.png',
      title: 'Physics'
    },
    {
      image: '/english.png',
      title: 'English'
    },
    {
      image: '/maths.png',
      title: 'Mathemetics'
    },
    {
      image: '/books.png',
      title: 'Extra Books'
    },
  ];

  return <div className="">
          <div className="tile-container">
            {tileData.map((tile) => (
              <Tile key={tile.image} image={tile.image} title={tile.title} />
            ))}
          </div>
    
    </div>;
};

export default Tab11th;