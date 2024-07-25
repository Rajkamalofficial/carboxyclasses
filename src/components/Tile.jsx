"use client"
import React from 'react';
import { toast } from 'react-toastify';
import Link from 'next/link';

const Tile = ({ image, title, link }) => {

  const notify = () => toast("COMING SOON!!!", {
    position: 'top-right',
    className: 'toast-message',
  });

  if (!link) {
    return (
      <>
        <div className="subject-tile relative" onClick={notify}>
          <img src={image} alt={title} className="subject-logo" />
          <h3 className="subject-name">{title}</h3>
          <div className="absolute rounded-md top-0 left-0 w-full h-full bg-gray-500 opacity-50 flex justify-center items-center">
            <span className="text-white text-lg">COMING SOON!</span>
          </div>
        </div>
      </>
    )
  }

  return (

    <Link href={link}>
      <span className="subject-tile" >
        <img src={image} alt={title} className="subject-logo" />
        <h3 className="subject-name">{title}</h3>
      </span>
    </Link>
  );
};

export default Tile;