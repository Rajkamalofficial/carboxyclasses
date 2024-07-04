import React from 'react';
import Link from 'next/link';

const Tile = ({ image, title, link, onClick }) => {
if (!link) {
  return (
    <div onClick={() => onClick(link)} className="subject-tile">
      <img src={image} alt={title} className="subject-logo" />
      <h3 className="subject-name">{title}</h3>
    </div>
  );
}

return (
  <Link href={link}>
    <div onClick={() => onClick(link)} className="subject-tile">
      <img src={image} alt={title} className="subject-logo" />
      <h3 className="subject-name">{title}</h3>
    </div>
  </Link>
);
};

export default Tile;