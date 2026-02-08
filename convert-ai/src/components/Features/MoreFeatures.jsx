import React from 'react'
import HeaderPill from '../common/HeaderPill'
import MoreFeatureCard from './MoreFeatureCard'

const moreFeaturesData = [
  {
    title: "Automatic lead capture",
    description: "Automatically capture leads from various channels like your website, social media, emails, and more into a single dashboard.",
    image: "/optimize.png",
    bgColor: "bg-pastel-1"
  },
  {
    title: "Smart segmentation",
    description: "Utilize smart segmentation to categorize leads based on their actions, preferences, or demographics, ensuring targeted follow-ups.",
    image: "/automate.png",
    bgColor: "bg-pastel-4"
  },
  {
    title: "Integrations with tools",
    description: "Integrate with external tools and platforms to streamline data collection and enrichment, providing a comprehensive view of each lead.",
    image: "/adjust.png",
    bgColor: "bg-pastel-2"
  },
  {
    title: "Engagement Campaigns",
    description: "Set up customized email sequences or engagement campaigns tailored to each segment, enhancing the chances of conversion.",
    image: "/create.png",
    bgColor: "bg-pastel-3"
  },
  {
    title: "Engagement tracking",
    description: "Track interactions and engagement to refine your approach, ensuring your communications are always relevant and timely.",
    image: "/automate.png",
    bgColor: "bg-pastel-1"
  },
  {
    title: "AI insights",
    description: "Leverage AI-driven insights to dynamically adjust nurturing strategies based on lead behavior, maximizing engagement and response rates.",
    image: "/Feature/aiInsights.png",
    bgColor: "bg-pastel-4"
  },
  {
    title: "Lead Scoring models",
    description: "Utilize lead scoring models to prioritize high-potential leads and focus your efforts where they're most likely to pay off.",
    image: "/optimize.png",
    bgColor: "bg-white-2"
  },
  {
    title: "A/B testing",
    description: "Implement A/B testing for different segments and strategies to empirically determine the most effective approaches, further refining your conversion efforts.",
    image: "/automate.png",
    bgColor: "bg-pastel-2"
  },
  
]

const MoreFeatures = () => {
  return (
    <section className='max-w-[500px] lg:max-w-[1064px] mx-auto py-[60px] px-[20px] grid gap-[40px] lg:gap-[80px] lg:py-[80px] lg:px-8 xl:gap-[44px] overflow-hidden'>
      {/* header */}
      <div className="flex flex-col items-center gap-8 max-w-[720px] mx-auto text-center">
        <HeaderPill text='More features' />
        <div className="grid gap-4 text-balance text-black-2">
          <h2 className="text-[28px] font-medium lg:text-[34px] xl:text-[36px]">
           And a whole lot more features
          </h2>
          <p className="text-[18px] lg:text-[19px] xl:text-xl">With Convert, the possibilities are endless.</p>
        </div> 
      </div>

      {/* cards */}
      <div className="grid gap-5 lg:grid-cols-2">
        {moreFeaturesData.map((card, idx) => (
          <MoreFeatureCard
            key={idx}
            title={card.title}
            description={card.description}
            image={card.image}
            bgColor={card.bgColor}
          />
        ))}
      </div>
    </section>
  )
}

export default MoreFeatures
