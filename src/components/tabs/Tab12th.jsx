import React from 'react';
import Tile from './Tile';
import classtabs from "@/data/classtabs.json"

const Tab12th = () => {

  const tileData = classtabs.class12th;

  return <div className="">
    <div className="tile-container">
      {tileData.map((tile) => (
        <Tile key={tile.image} image={tile.image} title={tile.title} link={tile.link} />

      ))}
    </div>

  </div>;
};

export default Tab12th;