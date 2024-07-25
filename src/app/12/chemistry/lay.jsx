'use client'
import React from 'react';
import { useState, useEffect } from 'react';
import { useRouter, pathname } from 'next/navigation'
import chemistryBooks from "@/data/12/chemistry/chemistryBooks.json";
import Btabs from "@/components/Btabs";
import Link from 'next/link';


function Btablayout({ children }) {
    const router = useRouter()
    const [activeTab, setActiveTab] = React.useState(0)

    console.log(activeTab);

    const handleTabClick = (index) => {
        setActiveTab(index)
        
    }

    return (
        <>
            <div className="tabs">
            {chemistryBooks.chemistrytabs.map((tab, index)=> (
                    <Link href={`/12/chemistry/${tab.link}`} key={tab.title}>
                        <Btabs
                            isActive= {activeTab === 0}
                            onClick={handleTabClick}
                            key={tab.title}
                            title={tab.title}
                        />
                    </Link>
                ))}
            </div>
            {children}
        </>
    )
}

export default Btablayout