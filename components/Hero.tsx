import Image from 'next/image'
import React from 'react'
import Button from './Button'
import Guide from './Guide';
import Camp from './Camp';
import Features from './Features';


interface SelectedFile {
  selectedFile: File | null
}

const Hero = ({selectedFile}: SelectedFile) => {
  return (
    <section className='max-container flexOne padding-container2 gap-10 pt-10 pb-[33px] md:gap-10 lg:pt-10  '>
      <Camp />
      <Guide selectedVideo={selectedFile}/>
      <Features />
    </section>
  )
}

export default Hero