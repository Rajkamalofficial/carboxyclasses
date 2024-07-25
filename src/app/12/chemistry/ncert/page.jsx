'use client'
import React from 'react';
import Tile from '@/components/tabs/Tile'
import chemistryBooks from "@/data/12/chemistry/chemistryBooks.json"
import Link from 'next/link';

function ncertChapters() {

    const tileData = chemistryBooks.ncert;
    


    return (
        <>
            <div className="tabs">
                <Link href={`/12/chemistry/ncert`}><div className="tab active">NCERT</div></Link>
                <Link href={`/12/chemistry/study-material`}> <div className="tab">Study Material</div></Link>
                <Link href={`/12/chemistry/pyqs`}><div className="tab">PYQs</div></Link>
                <Link href={`/12/chemistry/sample-papers`}> <div className="tab">Sample Papers</div></Link>
            </div>

            <div className="tile-container chapter-tiles">
                {tileData.map((tile) => (
                    <Link href={`/12/chemistry/ncert/${tile.link}`} >
                        <Tile className="tab"
                            key={tile.title}
                            image={tile.image}
                            title={tile.title}
                        />
                    </Link>
                ))}

            </div>
        </>
    )
}

export default ncertChapters