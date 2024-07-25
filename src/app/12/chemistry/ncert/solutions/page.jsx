import React from 'react'
import test from "@/data/12/chemistry/test.json"
import Contentpages from "@/components/Contentpages"



function solutions() {

    const pdf = test.solutions;
  return (
    <>
    <div className='pdf'>
      {pdf.map((ContentPages) => (
        <Contentpages image={ContentPages.image} />
      ))}
    </div>
    </>
  )
}

export default solutions