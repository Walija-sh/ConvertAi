import React from 'react'
import FeatureSection from '../common/FeatureSection'

const AiAutomate = () => {

const featuresPageCardsData = [
  {
    id: 1,
    title: "Automate lead capture and segmentation",
    description: "Automatically capture leads from various channels into a single dashboard. Integrate with external tools and platforms to streamline data collection.",
    features: [
      "Automatically capture leads from social channels",
      "Utilize smart segmentation to categorize leads",
      "Integrate with external tools and platforms"
    ],
    image: "/automate.png",
    imageSide: "right",
    bgColor: "bg-pastel-3"
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
    image: "/adjust.png",
    imageSide: "left",
    bgColor: "bg-pastel-3"
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
    image: "/optimize.png",
    imageSide: "right",
    bgColor: "bg-pastel-3"
  }
]

  return (
<FeatureSection
  header={{
    pill: "AI Automation",
    title: "Get more done with an AI assistant",
    subtitle: "Save countless hours on manual data entry and aggregates all the data you need to focus on closing deals easily"
  }}
  cards={featuresPageCardsData}
/>
  )
}

export default AiAutomate