import Camp from '@/components/Camp'
import Guide from '@/components/Guide'
import Features from '@/components/Features'
import React from 'react'

const page = () => {
  return (
    <div className='max-container flexOne padding-container2 gap-10 pt-10 pb-[33px] md:gap-10 lg:pt-10'>
        <Camp />
        <Guide />
        <Features />
    </div>
  )
}

export default page