import React from 'react';
import Link from 'next/link';

const Tile = ({ image, title, link }) => {

  if (!link) {
    return (
    <div className="subject-tile">
      <img src={image} alt={title} className="subject-logo" />
      <h3 className="subject-name">{title}</h3>
    </div>
  )}

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