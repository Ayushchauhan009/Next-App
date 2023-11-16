import Chats from '@/components/AINews/Chats'
import NewAudio from '@/components/AINews/NewAudio'
import OutputAI from '@/components/AINews/OutputAI'
import React from 'react'

const page = () => {
  return (
    <div className='max-container flexOne padding-container3 gap-10 pt-10 pb-[33px] md:gap-10 lg:pt-10'>
      <NewAudio />
      <OutputAI />
      <Chats />
    </div>
  )
}

export default page