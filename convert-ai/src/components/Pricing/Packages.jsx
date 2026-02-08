import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import PackageCard from './PackageCard';

const packagesData = [
  {
    id: 1,
    title: "Individual plan",
    description: "Great for individuals who want to track their connections with a CRM.",
    features: [
      { text: "Single user access", checked: false },
      { text: "AI Assistant", checked: false },
      { text: "Email templates", checked: false },
      { text: "Simple analytics", checked: false },
      { text: "60+ integrations", checked: false },
    ],
    buttonText: "Subscribe",
    buttonVariant: "secondary",
    bgGradient: "bg-linear-180 from-pastel-1 to-pastel-1/40",
    borderColor: "",
    pricePeriod:'/month'
  },
  {
    id: 2,
    title: "Team plan",
    description: "Great for startups and teams who want more advanced features.",
    features: [
      { text: "Lead management system", checked: true },
      { text: "Email automation", checked: true },
      { text: "Basic analytics dashboard", checked: true },
      { text: "Customer support access", checked: true },
      { text: "Customizable landing pages", checked: true },
      { text: "Multi user access", checked: true },
    ],
    buttonText: "Start a 7-day free trial",
    buttonVariant: "primary",
    bgGradient: "bg-linear-180 from-white-3 to-white-3/40",
    borderColor: "border-[1px] border-primary",
    pricePeriod:'per user/month'
  },
  {
    id: 3,
    title: "Enterprise plan",
    description: "Great for startups and enterprises who want to manage bigger projects.",
    features: [
      { text: "AI-Powered lead scoring", checked: false },
      { text: "Email sequence builder", checked: false },
      { text: "Advanced analytics & reporting", checked: false },
      { text: "Custom integrations", checked: false },
      { text: "Priority support", checked: false },
      { text: "Sales pipeline management", checked: false },
      { text: "Multi user access", checked: false },
    ],
    buttonText: "Start a 14-day free trial",
    buttonVariant: "secondary",
    bgGradient: "bg-linear-180 from-pastel-4 to-pastel-4/40",
    borderColor: "",
    pricePeriod:'per user/month'
  }
];

const Packages = () => {
  const [activeTab, setActiveTab] = useState("monthly");

  const priceMap = {
    monthly: ["$9.99", "$19.99", "$49.99"],
    annual: ["$6.99", "$14.99", "$34.99"]
  };

  return (
    <div className='max-w-[400px] lg:max-w-[1100px] mx-auto relative z-10 grid gap-11'>
      {/* tabs */}
      <div className="mx-auto w-full max-w-[318px] bg-white-2 rounded-[99px] gap-1 flex items-center justify-center p-1">
      {["monthly","annual"].map((tab) => {
  const isActive = activeTab === tab;
  return (
    <div
      key={tab}
      onClick={() => setActiveTab(tab)}
      className={`
        max-w-[150px] shrink grow h-[40px] flex items-center justify-center rounded-[99px] py-2 px-8 cursor-pointer
        transition-colors duration-400
        ${isActive ? "bg-primary text-white" : "bg-transparent text-black-2"}
      `}
    >
      <p className="text-[16px] font-medium whitespace-nowrap">
        {tab === "annual" ? "Annual -33%" : "Monthly"}
      </p>
    </div>
  )
})}

      </div>

      {/* cards */}
      <div className="grid gap-5 text-black-2 lg:grid-cols-3 lg:items-end">
       {packagesData.map((pkg, idx) => (
  <PackageCard 
    key={pkg.id} 
    {...pkg} 
    price={priceMap[activeTab][idx]} 
    
  />
))}

      </div>
    </div>
  )
}

export default Packages;
