import React, { useRef } from 'react'
import { HiOutlineCursorArrowRays, HiOutlineBeaker, HiOutlineSparkles } from "react-icons/hi2";
import { BsBarChart, BsFolder2Open } from "react-icons/bs";
import { AiOutlineFolderAdd } from "react-icons/ai";
import { motion  } from 'motion/react';


const FeatureHighlight = () => {
    const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3, 
    },
  },
};
const fadeUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" }
  },
};

  const features = [
    {
      icon: HiOutlineCursorArrowRays,
      title: "Multi-Channel Campaigns",
      description: "Manage ads across multiple platforms from a single dashboard. Easily oversee campaigns on Google, Facebook, Instagram, and more."
    },
    {
      icon: BsBarChart,
      title: "Real-Time Analytics",
      description: "Get instant insights into ad performance. Track key metrics like CTR, CPC, and ROAS in real-time to make data-driven decisions."
    },
    {
      icon: HiOutlineBeaker,
      title: "Advanced Targeting",
      description: "Reach your ideal audience with precision. Use advanced targeting features including demographics, interests, and custom audiences."
    },
    {
      icon: BsFolder2Open,
      title: "Auto Budget Allocation",
      description: "Ensure optimal budget distribution across your campaigns. Automatically allocate budget to top-performing ads and pause underperforming ones."
    },
    {
      icon: AiOutlineFolderAdd,
      title: "Easy Campaign Creation",
      description: "Launch new ad campaigns quickly and easily. Use pre-built templates and intuitive tools to design, set up, and deploy campaigns in minutes."
    },
    {
      icon: HiOutlineSparkles,
      title: "AI-Driven Ad Optimization",
      description: "Automate ad performance improvements with AI. Optimize bids, ad creative, and targeting for maximum ROI."
    }
  ];

  return (
    <section className='py-[60px] px-5 lg:py-[80px] lg:px-[32px] max-w-[500px] md:max-w-[1064px] mx-auto grid gap-8'>
      {/* header */}
      <div className="grid gap-4 text-balance text-black-2 pl-5 text-center mx-auto">
        <h2 className="text-[28px] font-medium lg:text-[34px] xl:text-[36px]">
          More features
        </h2>
        <p className="text-[18px] lg:text-[19px] xl:text-xl">
          Convert is built to save you time and money
        </p>
      </div>

      {/* feature highlight cards */}
    <motion.div
  variants={containerVariant}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }} 
  className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6"
>
  {features.map((feature, idx) => (
    <motion.article
      key={idx}
      variants={fadeUpVariant}
      className="py-6 px-4 grid gap-4 text-black-2"
    >
      <div className="flex gap-3 items-center text-[20px]">
        <feature.icon className="text-primary" />
        <h6 className="font-medium">{feature.title}</h6>
      </div>
      <p className="text-[16px] lg:text-[17px] xl:text-[18px]">
        {feature.description}
      </p>
    </motion.article>
  ))}
</motion.div>

    </section>
  )
}

export default FeatureHighlight
