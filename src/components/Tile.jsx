"use client"
import React from 'react';
import { toast } from 'react-toastify';
import {FaLock} from 'react-icons/fa'
import { Image, Link } from '@nextui-org/react';

const Tile = ({ image, title, link }) => {

  const notify = () => toast("COMING SOON!!!", {
    position: 'top-right',
    className: 'toast-message',
  });

  if (!link) {
    return (
      <>
        <div className="subject-tile relative" onClick={notify}>
          <div className="absolute rounded-md top-0 left-0 w-full h-full bg-gray-500 opacity-70 flex justify-center items-center z-20">
            <span className="text-black text-lg"><FaLock size='50px'></FaLock></span>
          </div>
          <Image src={image} alt={title} className="subject-logo z-10" />
          <h3 className="subject-name">{title}</h3>
        </div>
      </>
    )
  }

  return (

    <Link href={link} color="foreground">
      <span className="subject-tile" >
        <Image src={image} alt={title} className="subject-logo" />
        <h3 className="subject-name">{title}</h3>
      </span>
    </Link>
  );
};

export default Tile;