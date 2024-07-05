import React from 'react';
import Tile from '@/components/tabs/Tile'
import chemistryBooks from "@/data/12/chemistry/chemistryBooks.json"
import Link from 'next/link';

function ncertChapters() {
    const tileData = chemistryBooks.studyMaterialData;

    return (
        <div className="tile-container chapter-tiles">
            {tileData.map((tile) => (
                <Link href={`/12/chemistry/ncert/${tile.title}`} >
                    <Tile
                        key={tile.title}
                        image={tile.image}
                        title={tile.title}
                    />
                </Link>
            ))}

        </div>
    )
}

export default ncertChapters