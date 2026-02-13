import React from 'react'
import HeaderPill from '../common/HeaderPill'
import Button from '../common/Button'

const FaqHero = () => {
  return (
     <section className='py-[60px] px-5  lg:pb-[80px] lg:pt-[144px] lg:px-8 xl:pt-[100px] overflow-hidden relative z-10'>
         <div 
        className="absolute hidden lg:block aspect-square rounded-full w-[800px]  bg-radial from-pastel-3/20 to-pastel-3/60 top-0 left-[50%]  translate-x-[-50%] z-1"></div>
        {/* header */}
<div
className="grid gap-10 max-w-[600px] mx-auto place-content-center relative z-10 text-center">
  <div className="flex flex-col items-center gap-8 ">
    <HeaderPill text="FAQs" />

 <div className="text-black-2 grid gap-4 text-balance">
          <h1 className="text-[32px] lg:text-[40px] xl:text-[48px]">Answers to some of the most frequently asked questions</h1>
          <p   className='text-[18px] lg:text-[19px] xl:text-[20px]'>We grouped questions by topic for easier discoveribility</p>
        </div>
  </div>
  <Button  text='Get started' to='/' variant='primary' shadow={true} className='py-1.5 px-8 w-fit mx-auto'/>
</div>
    </section>
  )
}

export default FaqHero