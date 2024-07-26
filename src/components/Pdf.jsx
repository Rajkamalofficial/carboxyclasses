"use client"
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { FaTimes, FaLock } from 'react-icons/fa';
import { Image } from '@nextui-org/react';
import NextImage from "next/image";

const Pdf = ({ title, CoverImage, png }) => {

  const notify = () => toast("COMING SOON!!!", {
    position: 'top-right',
    className: 'toast-message',
  });

  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const imageStyle = {
    objectFit: "cover",
  }

  

  if (!png) {
    return (
      <>
        <div className="subject-tile relative" onClick={notify}>
          <Image style={imageStyle} src={CoverImage} alt={title} className="subject-logo z-10" />
          <h3 className="subject-name">{title}</h3>
          <div className="absolute rounded-md top-0 left-0 w-full h-full bg-gray-500 opacity-50 flex justify-center items-center z-20">
          <span className="text-black text-lg"><FaLock size='50px'></FaLock></span>
          </div>
        </div>
      </>
    )
  }

  return (

    <div className=''>
      <span className='subject-tile ' onClick={(e) => { handleModalOpen() }} >
        <Image style={imageStyle} src={CoverImage} alt={title} className="subject-logo" />
        <h3 className="subject-name">{title}</h3>
      </span>

      {showModal && (
        <>
          <div onClick={handleModalClose} className="z-30 backdrop-blur-md backdrop-saturate-150 bg-overlay/30 w-screen h-screen fixed inset-0"></div>
          <div className="Modal divide-y divide-slate-200 top-16 rounded-lg z-40 popup fixed left-1/2 flex flex-col w-full md:w-[720px] lg:w-[768px] items-center p-0">
            <header className="flex justify-between w-full bg-white text-black rounded-t-lg">
              <span className="mx-auto pl-9 pt-2 pb-2">{title}</span>
              <button onClick={handleModalClose} className=' px-3 mr-2 hover:bg-slate-200 rounded-full'> <FaTimes/> </button>
            </header>
            <div className="body overflow-y-scroll scrollbar-hide bg-white px-3">
              {png && (
                <div className=''>
                  {png.map((image, index) => (
                    <Image style={{width: '100%', objectFit: 'contained', borderRadius:0}} key={index} src={image.image} alt={image.image} />
                  ))}
                </div>
              )}
            </div>
            {/* <footer className="flex rounded-b-lg w-full justify-center footer pt-2 pb-2 bg-white text-black">
              Space for ads
            </footer> */}
          </div>
        </>
      )}
    </div>
  );
};

export default Pdf;