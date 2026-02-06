
import HeaderPill from './../ui/HeaderPill';
import { GoPlusCircle } from "react-icons/go";
import { FaRegEdit } from "react-icons/fa";
import { HiOutlineChartPie, HiOutlineRocketLaunch } from "react-icons/hi2";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

const cardsData = [
  {
    Icon: GoPlusCircle,
    title: 'Create',
    description: 'Design and launch new ad campaigns quickly with pre-built templates and intuitive campaign creation tools.',
    image: '/Home/WorkingCreate.png'
  },
  {
    Icon: FaRegEdit,
    title: 'Adjust',
    description: 'Make adjustments to your campaigns as they run. Use real-time data to tweak targeting.',
    image: '/Home/WorkingAdjust.png'
  },
  {
    Icon: HiOutlineChartPie,
    title: 'Analyze',
    description: 'Gain comprehensive insights into your campaign performance with detailed analytics and reporting.',
    image: '/Home/WorkingAnalyze.png'
  },
  {
    Icon: HiOutlineRocketLaunch,
    title: 'Automate',
    description: 'Leverage AI-driven automation to continuously optimize your campaigns. Automatically adjust bids.',
    image: '/Home/WorkingAutomate.png'
  }
];


const Working = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    // loop active card
    useEffect(() => {
  const interval = setInterval(() => {
    setActiveIndex(prev => (prev + 1) % cardsData.length);
  }, 6000); 
  return () => clearInterval(interval);
}, []);

  return (
    <section className="max-w-[500px] lg:max-w-[1064px] mx-auto py-[60px] px-[20px] grid gap-[60px] lg:gap-[80px] lg:py-[80px] lg:pt-0 lg:px-8 overflow-hidden">
      
      {/* header */}
      <div className="flex flex-col items-center gap-8 max-w-[720px]  mx-auto text-center ">
        <HeaderPill text="How it works" />
        <div className="grid gap-4 text-balance text-black-2">
          <h2 className="text-[28px] font-medium lg:text-[34px] xl:text-[36px]">
            The most <span className="text-primary">intuitive CRM</span> in the market
          </h2>
          <p className="text-[18px] lg:text-[19px] xl:text-xl">Get started and using Convert is as easy as 1-2-3.</p>
        </div>
      </div>

      {/* cards container */}
      <div className="pt-5 px-2 border-4 rounded-2xl border-gray-2/20 lg:pt-8 lg:px-8 grid gap-5 overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {cardsData.map((card, index) => (
            <WorkingCard
              key={index}
              Icon={card.Icon}
              title={card.title}
              description={card.description}
               active={index === activeIndex}
      onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>

        {/* image */}
        <div className="pt-1 px-1">
          <AnimatePresence mode="wait">
  <motion.div
    key={activeIndex}
     initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -50 }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
    className="border-4 rounded-t-xl border-white-2 overflow-hidden"
  >
    <img
      src={cardsData[activeIndex].image} 
      className="block object-cover aspect-video object-top"
      alt={cardsData[activeIndex].title}
    />
  </motion.div>
</AnimatePresence>

        </div>
      </div>
    </section>
  );
};

export default Working;


// card

const WorkingCard = ({ Icon, title, description, active, onClick }) => {
  return (
    <div
      className={`p-5 grid gap-5 cursor-pointer text-black-2 transition-opacity duration-500 ${
        active ? "opacity-100" : "opacity-60"
      }`}
      onClick={onClick}
    >
      <div className="flex gap-2 items-center">
        <Icon className="text-lg text-primary" />
        <h3 className="text-xl font-medium">{title}</h3>
      </div>
      <p className="text-[14px] lg:text-[15px] xl:text-[16px]">{description}</p>
    </div>
  );
};
