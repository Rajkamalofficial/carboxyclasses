'use client'
import { usePathname } from 'next/navigation'
import chemistryBooks from "@/data/12/chemistry/chemistryBooks.json";
import Btabs from "@/components/Btabs";
import Link from 'next/link';


function Btablayout({ children }) {
    const pathname = usePathname()
    const btabdata = chemistryBooks.chemistrytabs;

    return (
        <>
            <div className="tabs">
                {btabdata.map((tab, index) => (
                    <Link href={`/12/chemistry/${tab.link}`}>
                        <Btabs
                            className= {pathname === `/12/chemistry/${tab.link}` ? 'tab active' : 'tab'}
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