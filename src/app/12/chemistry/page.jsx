'use client'
import React from 'react';
import { Tabs, Tab } from "@nextui-org/react";
import Pdf from '@/components/Pdf'
import chemistryBooks from "@/data/12/chemistry/chemistryBooks.json";

function ncert() {

    const ncertData = chemistryBooks.ncert;
    const studyMaterialData = chemistryBooks.studyMaterialData;
    const pyqsData = chemistryBooks.pyqs;
    const samplepapersData = chemistryBooks.samplepapers;

    return (
        <div className="flex w-vw flex-col justify-center items-center pt-16 overflow-hidden ">
            <Tabs aria-label="dynamic" size='md' radius='md' variant='solid' color='danger' className='items-center drop-shadow-md' >
                <Tab key="ncert" title="NCERT">
                    <div className="tile-container chapter-tiles">
                        {ncertData.map((tile) => (
                            <Pdf className="tab"
                                key={tile.title}
                                CoverImage={tile.CoverImage}
                                title={tile.title}
                                png={tile.png}
                            />
                        ))}
                    </div>
                </Tab>
                <Tab key="studymaterial12chemdata" title="Study Material">
                    <div className="tile-container">
                        {studyMaterialData.map((tile) => (
                            <Pdf className="tab"
                                key={tile.title}
                                CoverImage={tile.CoverImage}
                                title={tile.title}
                                png={tile.png}
                            />
                        ))}
                    </div>
                </Tab>
                <Tab key="pyqschem12" title="PYQs">
                    <div className="tile-container chapter-tiles">
                        {pyqsData.map((tile) => (
                            <Pdf className="tab"
                                key={tile.title}
                                CoverImage={tile.CoverImage}
                                title={tile.title}
                                png={tile.png}
                            />
                        ))}
                    </div>
                </Tab>
                <Tab key="samplepaper12chemdata" title="Sample Papers">
                    <div className="tile-container chapter-tiles">
                        {samplepapersData.map((tile) => (
                            <Pdf className="tab"
                                key={tile.title}
                                CoverImage={tile.CoverImage}
                                title={tile.title}
                                png={tile.png}
                            />
                        ))}
                    </div>
                </Tab>
            </Tabs>
        </div>
    )
}

export default ncert