import React from 'react';
import Tile from './Tile'

const Tab12th = () => {

  const tileData = [
    {
      image: "/chemistry.png",
      title: 'Chemistry',
      link:  "class12th-chemistry"
    },
    {
      image: '/physics.png',
      title: 'Physics',
      link:  'class12th-physics'
    },
    {
      image: '/biology.png',
      title: 'Biology',
      link:  ''
    },
    {
      image: '/maths.png',
      title: 'Mathemetics',
      link:  ''
    },
    {
      image: '/english.png',
      title: 'English',
      link:  ''
    },
    {
      image: '/books.png',
      title: 'Extra Books',
      link:  ''
    },
  ];

  return <div className="">
    <div className="tile-container">
      {tileData.map((tile) => (
        <Tile key={tile.image} image={tile.image} title={tile.title} link={tile.link} />

      ))}
    </div>

  </div>;
};

export default Tab12th;