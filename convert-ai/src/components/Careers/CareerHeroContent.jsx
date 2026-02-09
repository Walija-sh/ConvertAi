import React from 'react'
import Button from '../common/Button'

const CareerHeroContent = () => {
  return (
    <div className='grid gap-12 relative z-10 w-full'>
        {/* images */}
            <div className="grid gap-2 lg:gap-8 w-full max-w-[1000px] mx-auto">
                <div className="flex gap-2 lg:gap-8">
  
  <div className="relative overflow-hidden rounded-2xl h-[320px] basis-[60%]">
    <img src="/Careers/career1.jpg" className="object-cover w-full h-full" />
    <div className="w-full h-full rounded-2xl absolute inset-0 border-8 border-black-2/10"></div>
  </div>
  <div className="relative overflow-hidden rounded-2xl h-[320px] basis-[40%]">
    <img src="/Careers/career2.png" className="object-cover w-full h-full" />
    <div className="w-full h-full rounded-2xl absolute inset-0 border-8 border-black-2/10"></div>
  </div>

</div>
                <div className="flex gap-2 lg:gap-8">
                     <div className="relative overflow-hidden rounded-2xl h-[320px] basis-[40%]">
    <img src="/Careers/career3.jpg" className="object-cover w-full h-full" />
    <div className="w-full h-full rounded-2xl absolute inset-0 border-8 border-black-2/10"></div>
  </div>
  
  <div className="relative overflow-hidden rounded-2xl h-[320px] basis-[60%]">
    <img src="/Careers/career4.png" className="object-cover w-full h-full" />
    <div className="w-full h-full rounded-2xl absolute inset-0 border-8 border-black-2/10"></div>
  </div>
 

</div>

            </div>
            {/* stats */}
            <div className="flex items-center justify-between w-full max-w-[660px] mx-auto text-center">
                <div className="grid gap-3">
                    <h3 className="text-[32px] lg:text-[40px] xl:text-[48px]">12</h3>
                    <p className="text-[16px] lg:text-[17px] xl:text-[18px]">Employees</p>
                </div>
                <div className="grid gap-3">
                    <h3 className="text-[32px] lg:text-[40px] xl:text-[48px]">2022</h3>
                    <p className="text-[16px] lg:text-[17px] xl:text-[18px]">Year founded</p>
                </div>
                <div className="grid gap-3">
                    <h3 className="text-[32px] lg:text-[40px] xl:text-[48px]">$58M</h3>
                    <p className="text-[16px] lg:text-[17px] xl:text-[18px]">Funding raised</p>
                </div>
            </div>
       
        {/* details */}
        <div className="pt-5 w-full max-w-[640px] mx-auto grid gap-8 text-[18px] lg:text-[19px] xl:text-xl">
            <div className="grid gap-5">

             <h2 className="text-[28px] font-medium lg:text-[34px] xl:text-[36px] text-balance">
           Our mission & vision
          </h2>
          <p>
         We all understand the importance of customer relationships in today's business landscape. Yet, despite the proliferation of new tools designed to help us manage these relationships, we often find ourselves reverting to outdated methods or juggling multiple disconnected systems. Traditional CRM solutions are often rigid, complex, and fail to adapt to the unique needs of each business.
          </p>
          <p>Why? Because every business has its own way of interacting with customers, and one-size-fits-all CRM solutions simply don't cut it. What businesses truly need is a flexible platform that can be tailored to match their specific processes and workflows - a canvas on which they can build, customize, and refine their customer relationship strategies.</p>
          
          <p>At Convert, we're building a next-generation CRM platform that works the way you do. It's as flexible and adaptable as your business, directly connected to your data sources, and designed to grow with you. Our CRM is paired with powerful analytics and automation capabilities that are as intuitive to use as they are powerful.

</p>
<p>We're not just another CRM provider - we're reimagining how businesses manage customer relationships in the digital age. Join us in revolutionizing the CRM industry and take control of your customer relationships like never before.</p>
            </div>
            <Button text='More about us' to='/about' variant='primary' shadow={true} className='w-fit py-1.5 px-8'/>
            
        </div>
    </div>
  )
}

export default CareerHeroContent