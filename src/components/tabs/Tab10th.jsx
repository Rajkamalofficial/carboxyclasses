import React from 'react';
import Tile from './Tile';
import classtabs from "@/data/classtabs.json"

const Tab10th = () => {

  const tileData = classtabs.class10th;

  return <div className="">
    <div className="tile-container">
      {tileData.map((tile) => (
        <Tile key={tile.image} image={tile.image} title={tile.title} />
      ))}
    </div>

  </div>;
};

export default Tab10th;