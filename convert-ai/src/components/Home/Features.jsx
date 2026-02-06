import React from 'react'
import HeaderPill from '../ui/HeaderPill'
import Button from '../ui/Button';
import FeatureCard from '../common/FeatureCard';

const Features = () => {
  const featureCardsData = [
    {
      id: 1,
      title: "Automate lead capture and segmentation",
      description: "Automatically capture leads from various channels like your website, social media, emails, and more into a single dashboard. Integrate with external tools and platforms to streamline data collection.",
      features: [
        "Automatically capture leads from social channels",
        "Utilize smart segmentation to categorize leads",
        "Integrate with external tools and platforms"
      ],
      image: "/Home/WorkingAutomate.png",
      imageSide: "right",
      bgColor: "bg-pastel-1"
    },
    {
      id: 2,
      title: "Enhance lead nurturing with personalize workflows",
      description: "Set up customized email sequences or engagement campaigns tailored to each segment, enhancing the chances of conversion.",
      features: [
        "Track interactions and engagement to refine your approach",
        "Leverage AI-driven insights to dynamically adjust nurturing",
        "Maximize engagement and response rates"
      ],
      image: "/Home/WorkingAdjust.png",
      imageSide: "left",
      bgColor: "bg-pastel-2"
    },
    {
      id: 3,
      title: "Optimize lead conversion strategies",
      description: "Implement A/B testing for different segments and strategies to empirically determine the most effective approaches, further refining your conversion efforts.",
      features: [
        "Utilize lead scoring models to prioritize high-potential leads",
        "Analyze conversion data to identify successful tactics",
        "Optimize your sales process for better results"
      ],
      image: "/Home/optimize.png",
      imageSide: "right",
      bgColor: "bg-pastel-3"
    }
  ]

  return (
    <section className="max-w-[500px] lg:max-w-[1064px] mx-auto py-[60px] px-[20px] grid gap-[60px] lg:gap-[80px] lg:py-[80px] lg:px-8 overflow-hidden">
      {/* header */}
      <div className="flex flex-col items-center gap-8 max-w-[720px] mx-auto text-center">
        <HeaderPill text="Features" />
        <div className="grid gap-4 text-balance text-black-2">
          <h2 className="text-[28px] font-medium lg:text-[34px] xl:text-[36px]">
            <span className="text-primary">Save 7+ hours/week</span> with Convert CRM
          </h2>
          <p className="text-[18px] lg:text-[19px] xl:text-xl">
            Save countless hours on manual data entry and aggregates all the data you need to focus on closing deals easily
          </p>
        </div>
      </div>
      
      {/* feature cards */}
      <div className="grid gap-[60px]">
        {featureCardsData.map((card) => (
          <FeatureCard
            key={card.id}
            title={card.title}
            description={card.description}
            features={card.features}
            image={card.image}
            imageSide={card.imageSide}
            bgColor={card.bgColor}
          />
        ))}
      </div>
      
      {/* cta */}
      <Button 
        text='See all features' 
        variant='secondary' 
        to='/features' 
        className='px-10 w-fit mx-auto' 
        shadow={true}
      />
    </section>
  )
}

export default Features