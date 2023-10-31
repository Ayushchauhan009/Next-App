import Options from '@/components/Options'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='max-container flexTwo padding-container3 gap-10 pt-10 pb-[33px] md:gap-10 lg:pt-10'>
      <div>
      <Options />
      </div>
      <div>
        <div className='flex mt-10 space-x-[11px]'>
          <p className='bg-[#2B303A] font-medium rounded-[7px] text-white px-2 py-1'>My Creation</p>
          <p className='bg-[#fff] rounded-[7px] border px-2 py-1'>My Saved</p>
          <p className='bg-[#fff] rounded-[7px] border px-2 py-1'>Public</p>
        </div>
        <div className='grid grid-cols-5 gap-[17px] mt-5'>
          <div className='w-[180px] xxl:w-[198px] h-[295px] rounded-[12px] bg-[#C4C4C4]'></div>
          <div className='w-[180px] xxl:w-[198px] h-[295px] rounded-[12px] bg-[#C4C4C4]'></div>
          <div className='w-[180px] xxl:w-[198px] h-[295px] rounded-[12px] bg-[#C4C4C4]'></div>
          <div className='w-[180px] xxl:w-[198px] h-[295px] rounded-[12px] bg-[#C4C4C4]'></div>
          <div className='w-[180px] xxl:w-[198px] h-[295px] rounded-[12px] bg-[#C4C4C4]'></div>
          <div className='w-[180px] xxl:w-[198px] h-[295px] rounded-[12px] bg-[#C4C4C4]'></div>
          <div className='w-[180px] xxl:w-[198px] h-[295px] rounded-[12px] bg-[#C4C4C4]'></div>
          <div className='w-[180px] xxl:w-[198px] h-[295px] rounded-[12px] bg-[#C4C4C4]'></div>
          <div className='w-[180px] xxl:w-[198px] h-[295px] rounded-[12px] bg-[#C4C4C4]'></div>
          <div className='w-[180px] xxl:w-[198px] h-[295px] rounded-[12px] bg-[#C4C4C4]'></div>
        </div>
        <div className='flexBetween px-14 space-x-16 my-10'>
        <div>
            <Image src="/leftArrow.svg" alt='previous' width={12} height={12} />
            
          </div>
          <div className='buttonBg text-[18px]'>1</div>
          <div className='font-medium text-[18px]'>2</div>
          <div className='font-medium text-[18px]'>3</div>
          <div className='font-medium text-[18px]'>4</div>
          <div className='font-medium text-[18px]'>5</div>
          <div className='font-medium text-[18px]'>...</div>
          <div className='font-medium text-[18px]'>8</div>
          <div className='font-medium text-[18px]'>9</div>
          <div className='font-medium text-[18px]'>10</div>
          <div>
            <Image src="/rightSideArrow.svg" alt='next' width={12} height={12} />
            
          </div>
          <div className='flex'>
          <Image src="/rightSideArrow.svg" alt='next' width={12} height={12} />
          <Image src="/rightSideArrow.svg" alt='next' width={12} height={12} />
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default page