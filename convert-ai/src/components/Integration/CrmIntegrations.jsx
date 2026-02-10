import React from 'react'

const CrmIntegrations = () => {
     const CrmIntegrationsData=[
        {
            link:'https://zapier.com/',
            img:'/linkedin.svg',
            title:'Linkedin',
            description:`Use LinkedIn to grow your network and find jobs, integrating seamlessly with our CRM to enhance contact management and accelerate business success.`
        },
        {
            link:'https://zapier.com/',
            img:'/slack.svg',
            title:'Slack',
            description:`Use Slack for team communication and collaboration, integrating directly with our CRM to streamline workflows and boost productivity.`
        },
        {
            link:'https://zapier.com/',
            img:'/linear.svg',
            title:'Linear',
            description:`Manage software projects with Linear, integrating its streamlined task tracking into our CRM to optimize project timelines and team coordination.`
        },{
            link:'https://zapier.com/',
            img:'/mapbox.svg',
            title:'Mapbox',
            description:`Utilize Mapbox to create custom, dynamic maps, integrating geographic data into our CRM for enriched customer insights and location-based strategies.`
        },
        {
            link:'https://zapier.com/',
            img:'/peopleai.svg',
            title:'People.ai',
            description:`Leverage People.ai to harness AI-driven sales insights, automatically syncing with our CRM to enhance lead scoring and sales effectiveness.`
        },
        {
            link:'https://zapier.com/',
            img:'/retool.svg',
            title:'Retool',
            description:`Build custom internal tools quickly with Retool, and integrate these applications into our CRM to personalize your workflows and data analysis.`
        },
        {
            link:'https://zapier.com/',
            img:'/trello.svg',
            title:'Trello',
            description:`Organize projects using Trello's board-based task management, integrating seamlessly with our CRM for enhanced project visibility and collaboration.`
        },
        {
            link:'https://zapier.com/',
            img:'/zendesk.svg',
            title:'Zendesk',
            description:`Use Zendesk to provide superior customer service, integrating its support ticketing system into our CRM for a unified view of customer interactions.`
        },
        {
            link:'https://zapier.com/',
            img:'/intercom.svg',
            title:'Intercom',
            description:`Utilize Intercom for engaging customer communication and support, integrating its messaging platform into our CRM to streamline customer interactions.`
        },
    ]
  return (
     <section className='py-[60px] px-5 grid gap-[44px] max-w-[500px] mx-auto lg:max-w-[1064px] lg:py-[80px] lg:px-8'>
{/* header */}

            <div className="grid gap-4 text-black-2 text-balance max-w-[600px] mx-auto relative z-10 text-center">
          <h2 className="text-[28px] font-medium lg:text-[34px] xl:text-[36px]">
          Other CRM integrations
          </h2>
          <p className="text-[16px] lg:text-[17px] xl:text-[18px]">
           Some of our CRM integrations
          </p>
        </div>
  {/* cards */}
  <div className="grid gap-5 items-center justify-center lg:grid-cols-3 lg:items-start">
    {/* card */}
    {CrmIntegrationsData.map((item,index)=>(
        <a href="#" target='_blank' className='block ' key={index}>
        <article className='border-[1px] border-gray-10/30 rounded-xl crm-integ-shadow p-6 grid gap-6 bg-linear-to-b from-pastel-3 to-pastel-3/0 text-black-2'>
           <div className="flex items-center gap-2.5">
            <div className="rounded-lg w-[44px] border-[1px] border-gray-2/20 aspect-square bg-white flex items-center justify-center">
                <img src={item.img} className='object-contain w-[24px]' alt={item.title} />
            </div>
            <h4 className="text-xl font-medium">{item.title}</h4>
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

export default CrmIntegrations