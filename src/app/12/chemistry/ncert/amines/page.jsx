'use client'
import Pdf from '@/components/Pdf'
import React, { useState } from 'react'
import test from '@/data/12/chemistry/test.json'

function amines() {
    const pdf = test.ncert;
    const [showModal, setShowModal] = useState(false);
    const handleModalOpen = () => {
        setShowModal(true);
    };
    return (
        <>
            <span className='flex flex-row flex-wrap mx-auto lg:w-[1000px] justify-start pt-20'>
                {pdf.map((tile) => (
                    <Pdf className="tab"
                        key={tile.title}
                        image={tile.image}
                        title={tile.title}
                        link={tile.link}
                        png={tile.png}
                    />
                ))}
            </span>
        </>
    )
}

export default amines