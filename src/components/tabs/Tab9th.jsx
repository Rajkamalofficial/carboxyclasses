import React from 'react';
import Tile from './Tile'

const Tab9th = () => {

  const tileData = [
    {
      image: '/science.png',
      title: 'Science'
    },
    {
      image: '/social-studies.png',
      title: 'Social Studies'
    },
    {
      image: '/maths.png',
      title: 'Mathemetics'
    },
    {
      image: '/english.png',
      title: 'English'
    },
    {
      image: '/hindi.png',
      title: 'Hindi'
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

export default Tab9th;