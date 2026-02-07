import React from 'react'
import Button from '../common/Button'
import HeaderPill from '../common/HeaderPill'

const Cta = () => {
  return (
    <section className='pt-8 px-4 pb-[60px] lg:pt-12 lg:px-8 lg:pb-[80px] xl:p-12 xl:pb-[100px]'>
        <div className="max-w-[1064px] mx-auto">
            <div className="rounded-[36px] bg-primary-grad text-center py-[60px] px-8  lg:py-[80px]  relative overflow-hidden cta-shadow">
                {/* circle */}
                <div className='absolute z-1 bg-pastel-3 min-w-[430px] min-w-[376px] sm:max-w-[376px] lg:max-w-[619px] mx-auto w-[90%] aspect-square rounded-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'></div>
              {/* content */}
               <div className='relative z-50 grid gap-8  max-w-[600px] mx-auto'>
      <div className=" flex flex-col items-center gap-8  text-center">
        <HeaderPill text="Join 1,000+ startups" />
        <div className="grid gap-4 text-black-2 text-balance">
          <h2 className="text-[28px] font-medium lg:text-[34px] xl:text-[36px]">
           Save time, close more deals
          </h2>
          <p className="text-[18px] lg:text-[19px] xl:text-xl">
          Salespeople spend +40% of their time updating their CRM, not with Convert: focus on closing deals.
          </p>
        </div>
      </div>

<Button to='/' text="Start for free" variant='primary' shadow={true} className='w-fit mx-auto px-8 py-1.5'/>
               </div>
            </div>
        </div>
    </section>
  )
}

export default Cta