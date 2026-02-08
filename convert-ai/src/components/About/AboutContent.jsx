import React from 'react'
import Button from '../common/Button'

const AboutContent = () => {
  return (
    <div className='grid gap-12 relative z-10'>
        {/* stats */}
        <div className="grid gap-3">
            <div className="border-2 aspect-[1.66667]  border-gray-2/20 rounded-2xl max-w-[1000px] mx-auto overflow-hidden">
            <img src="/About/AboutHero.jpg" className='object-cover w-full h-full' alt="" />
            </div>
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
        </div>
        {/* details */}
        <div className="pt-5 max-w-[640px] mx-auto grid gap-8 text-[18px] lg:text-[19px] xl:text-xl">
            <div className="grid gap-5">

             <h2 className="text-[28px] font-medium lg:text-[34px] xl:text-[36px] text-balance">
           We are taking on the CRM industry.
          </h2>
          <p>
          We all understand the importance of customer relationships in today's business landscape. Yet, despite the proliferation of new tools designed to help us manage these relationships, we often find ourselves reverting to outdated methods or juggling multiple disconnected systems. Traditional CRM solutions are often rigid, complex, and fail to adapt to the unique needs of each business.
          </p>
          <p>Why? Because every business has its own way of interacting with customers, and one-size-fits-all CRM solutions simply don't cut it. What businesses truly need is a flexible platform that can be tailored to match their specific processes and workflows - a canvas on which they can build, customize, and refine their customer relationship strategies.</p>
          <p>However, implementing a customized CRM system has traditionally been a daunting task. It often involves complex integrations, time-consuming data migrations, and steep learning curves for your team. And once it's set up, keeping it aligned with your evolving business needs can be a constant struggle.</p>
          <p>At Convert, we're building a next-generation CRM platform that works the way you do. It's as flexible and adaptable as your business, directly connected to your data sources, and designed to grow with you. Our CRM is paired with powerful analytics and automation capabilities that are as intuitive to use as they are powerful.

</p>
<p>We're not just another CRM provider - we're reimagining how businesses manage customer relationships in the digital age. Join us in revolutionizing the CRM industry and take control of your customer relationships like never before.</p>
            </div>
            <Button text='See open positions' to='/careers' variant='primary' shadow={true} className='w-fit py-1.5 px-8'/>
            
        </div>
    </div>
  )
}

export default AboutContent