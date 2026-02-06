import React from 'react'
import Button from '../common/Button'

const Benefits = () => {
  return (
    <section className='py-8 px-4'>
        <div className="max-w-[1064px] mx-auto">
            <div className="rounded-[20px] bg-primary text-white-1 text-center py-[60px] px-8  lg:py-[100px] lg:px-[60px] relative overflow-hidden">
               <div className='absolute inset-[20px] bg-linear-to-b from-primary to-primary-grad rounded-[20px] z-1'></div>
               <div className='absolute z-1 -rotate-50 bg-primary w-[200%] h-[30%] translate-x-[-25%]  md:h-[50%] lg:h-[80%] '></div>
               <div className='relative z-50 grid gap-[40px]'>

                <div className="grid gap-5 max-w-[720px] mx-auto text-balance ">
<h2 className="text-[32px] md:text-[40px] xl:text-[48px]">Are you ready to convert more leads into customers?</h2>
<p className="text-[16px] lg:text-[17px] xl:text-[18px]">Join 1000+ agencies, startups & consultants closing deals with Convert CRM</p>
                </div>

<Button to='/' text="Yes, I'm ready" variant='secondary' shadow={true} className='w-fit mx-auto px-8'/>
               </div>
            </div>
        </div>
    </section>
  )
}

export default Benefits