import React from 'react';
import chemistryBooks from "@/data/12/chemistry/chemistryBooks.json";
import Btabs from "@/components/Btabs";
import Link from 'next/link';


function Btablayout({ children }) {
    const btabdata = chemistryBooks.chemistrytabs;

    return (
        <>
            <div className="tabs">
                {btabdata.map((tab) => (
                    <Link href={`/12/chemistry/${tab.link}`}>
                        <Btabs
                            title={tab.title}
                            className="tab"
                        />
                    </Link>
                ))}
            </div>
            {children}
        </>
    )
}

export default Btablayout