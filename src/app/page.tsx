import Navbar from "@/components/Navbar";
import Classtabs from "@/components/Classtabs";
import Image from "next/image";


export default function Home() {
  return <div>
    {/* <div className="pointer-events-auto relative inline-flex rounded-md bg-white text-[0.8125rem] font-medium leading-5 text-slate-700 shadow-sm ring-1 ring-slate-700/10 hover:bg-slate-50 hover:text-slate-900 flex-auto flex-col p-10 mx-10 my-10 mt-60">
    <Image
                    src="/mainlogo-min.png"
                    width={50}
                    height={50}
                    alt="Carboxy Classes"
                    className='main-logo'
                />
    
    Lorem ipsum 
    
    </div> */}
    <Classtabs />
  </div>
}