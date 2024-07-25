'use client'
import React, { useState } from 'react';
import test from "@/data/12/chemistry/test.json";

function chemicalKinetics() {
  const [showModal, setShowModal] = useState(false);
  const pdf = test.solutions;

  const handleModalOpen = () => {
    setShowModal(true);
  };
  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className='flex flex-row justify-center gap-5 pt-6 items-start'>
        <span className='p-2 subject-tile' onClick={handleModalOpen}>
          <h1 className='text-3xl font-bold'>Chemical Kinetics</h1>
        </span>
      </div>





      {showModal && (
        <>
        <div onClick={handleModalClose} className="z-10 backdrop-blur-md backdrop-saturate-150 bg-overlay/30 w-screen h-screen fixed inset-0">

        </div>
        <div className="Modal top-16 rounded-lg z-20 popup fixed left-1/2 flex flex-col w-full md:w-[720px] lg:w-[768px] items-center p-0">
          <div className="header flex justify-between w-full pt-2 pb-2 bg-white text-black rounded-t-lg">
            <span className="mx-auto pl-9">Rajkamal</span>
            <button onClick={handleModalClose} className='text-[18px] px-3 text-black rounded-full mr-2'>x</button>
          </div>
          <div className="body overflow-y-scroll scrollbar-hide bg-white px-3">
            {pdf.map((pdfpages) => (
              <span className="z-20 py-2">
                <img src={pdfpages.image} alt="pdf" />
              </span>
            ))}
          </div>
          <div className="flex rounded-b-lg w-full justify-center footer pt-2 pb-2 bg-white text-black">
            Space for ads
          </div>
        </div>
        </>
      )}
    </>
  )
}

export default chemicalKinetics