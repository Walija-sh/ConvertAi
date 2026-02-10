import React from 'react'
import HeaderPill from '../common/HeaderPill'

const FeaturedIntegrations = () => {
    const featureIntegrationsData=[
        {
            link:'https://zapier.com/',
            img:'/zapier.svg',
            title:'Zapier',
            description:`Streamline your tasks with Zapier's workflow automation. With 6000+ app integrations, you have more time to concentrate on essential work.`
        },
        {
            link:'https://zapier.com/',
            img:'/pabbly.png',
            title:'Pabbly Connect',
            description:`Pabbly Connect is an intuitive yet robust automation tool that is designed to get rid of manual chores that take up your day. No coding needed.`
        },
        {
            link:'https://zapier.com/',
            img:'/make.svg',
            title:'Make.com',
            description:`Make provides a visual platform for creating, developing and executing routines. A tool design with intuitiveness and no need for coding`
        },
        
    ]
  return (
    <section className='py-[60px] px-5 grid gap-[44px] max-w-[500px] mx-auto lg:max-w-[1064px] lg:py-[80px] xl:px-8'>
{/* header */}
   <div className="flex flex-col items-center gap-8 max-w-[600px] mx-auto relative z-10 text-center">
             <HeaderPill text="Featured" />
             <div className="grid gap-4 text-black-2 text-balance">
          <h2 className="text-[28px] font-medium lg:text-[34px] xl:text-[36px]">
          Featured integrations
          </h2>
          <p className="text-[16px] lg:text-[17px] xl:text-[18px]">
           When you integrate with one, you integrated with thousands.
          </p>
        </div>
       
        </div>
  {/* cards */}
  <div className="grid gap-5 items-center justify-center lg:grid-cols-3 lg:items-start">
    {/* card */}
    {featureIntegrationsData.map((item,index)=>(
        <a href="#" target='_blank' className='block ' key={index}>
        <article className='border-[1px] border-gray-10/30 rounded-xl feature-integ-shadow p-8 grid gap-4 bg-linear-to-b from-pastel-3 to-pastel-3/0 text-black-2'>
           <div className="grid gap-5">
            <div className="rounded-lg w-[60px] aspect-square bg-white-2 flex items-center justify-center">
                <img src={item.img} className='object-contain w-[32px]' alt={item.title} />
            </div>
            <h4 className="text-xl font-medium lg:text-[22px] xl:text-[24px]">{item.title}</h4>
           </div>
           <p className='text-[16px] lg:text-[17px] xl:text-[18px]'>
            {item.description}
           </p>
        </article>
    </a>
    ))}
  </div>
    </section>
  )
}

export default FeaturedIntegrations