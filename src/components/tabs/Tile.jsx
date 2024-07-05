import React from 'react';
import Link from 'next/link';

const Tile = ({ image, title, link }) => {

  return (
    <Link href={link}>
      <div className="subject-tile">
        <img src={image} alt={title} className="subject-logo" />
        <h3 className="subject-name">{title}</h3>
      </div>
    </Link>
  );
};

export default Tile;