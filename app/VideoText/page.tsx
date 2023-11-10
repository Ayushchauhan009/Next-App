"use client"

import Timeline from '@/components/Timeline'
import Filters from '@/components/Video/Filters'
import GenerateAud from '@/components/Video/GenerateAud'
import OutputVideo from '@/components/Video/OutputVideo'
import React from 'react'

const page = () => {
  return (
    <div className='max-container flexOne flex-col padding-container2 gap-x-10 pt-10 pb-[10px] md:gap-x-10 lg:pt-10'>
      <div className='flex space-x-5'>
      <GenerateAud />
      <OutputVideo />
      <Filters />
      </div>
      <Timeline />
    </div>
  )
}

export default page