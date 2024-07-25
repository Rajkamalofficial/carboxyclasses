"use client"
import React, { useState } from 'react';
import { toast } from 'react-toastify';

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

  if (!png) {
    return (
      <>
        <div className="subject-tile relative" onClick={notify}>
          <img src={CoverImage} alt={title} className="subject-logo" />
          <h3 className="subject-name">{title}</h3>
          <div className="absolute rounded-md top-0 left-0 w-full h-full bg-gray-500 opacity-50 flex justify-center items-center">
            <span className="text-white text-lg">COMING SOON!</span>
          </div>
        </div>
      </>
    )
  }

  return (

    <div className=''>
      <span className='subject-tile ' onClick={(e) => { handleModalOpen() }} >
        <img src={CoverImage} alt={title} className="subject-logo" />
        <h3 className="subject-name">{title}</h3>
      </span>

      {showModal && (
        <>
          <div onClick={handleModalClose} className="z-10 backdrop-blur-md backdrop-saturate-150 bg-overlay/30 w-screen h-screen fixed inset-0"></div>
          <div className="Modal top-16 rounded-lg z-20 popup fixed left-1/2 flex flex-col w-full md:w-[720px] lg:w-[768px] items-center p-0">
            <div className="header flex justify-between w-full pt-2 pb-2 bg-white text-black rounded-t-lg">
              <span className="mx-auto pl-9">{title}</span>
              <button onClick={handleModalClose} className='text-[18px] px-3 text-black rounded-full mr-2'>x</button>
            </div>
            <div className="body overflow-y-scroll scrollbar-hide bg-white px-3">
              {png && (
                <div className=''>
                  {png.map((image, index) => (
                    <img key={index} src={image.image} alt={image.image} />
                  ))}
                </div>
              )}
            </div>
            {/* <div className="flex rounded-b-lg w-full justify-center footer pt-2 pb-2 bg-white text-black">
              Space for ads
            </div> */}
          </div>
        </>
      )}
    </div>
  );
};

export default Pdf;