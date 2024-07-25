import React from 'react';
import Tile from './Tile';
import classtabs from "@/data/classtabs.json";
import { ToastContainer, toast } from 'react-toastify';

const Tab12th = () => {

  const tileData = classtabs.class12th;

  return <div className="">
    <div className="tile-container test">
      {tileData.map((tile) => (
        <Tile key={tile.image} image={tile.image} title={tile.title} link={tile.link} />
      ))}
    </div>
    <div className='toast-container'>
      <ToastContainer draggablePercent={10} autoClose={2000} />
    </div>
  </div>;
};

export default Tab12th;