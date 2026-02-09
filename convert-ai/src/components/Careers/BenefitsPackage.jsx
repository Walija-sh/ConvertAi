import React from 'react'
import HeaderPill from '../common/HeaderPill'
import { GoHeart } from "react-icons/go";
import { LuBookmark } from "react-icons/lu";
import { LuClock3 } from "react-icons/lu";
import { LuIdCard } from "react-icons/lu";
import { LuMonitor } from "react-icons/lu";
import { LuUsers } from "react-icons/lu";
import BenefitCard from './BenefitCard';

const benefitsData = [
  {
    icon: GoHeart,
    title: "Health Insurance",
    desc: "Enjoy top-tier health insurance plans that cover medical, dental, and vision care. This benefit ensures employees have access to quality healthcare services, reducing financial stress related to medical expenses."
  },
  {
    icon: LuBookmark,
    title: "401K Matching",
    desc: "Build a secure future with employer-sponsored retirement plans, including 401K matching contributions. This benefit helps employees save for retirement and provides a significant financial advantage."
  },
  {
    icon: LuClock3,
    title: "Flexible Time Off",
    desc: "Balance work and personal life with generous paid vacation days, sick leave, and personal holidays. This benefit ensures employees have ample time to rest, recharge, and attend to personal matters."
  },
  {
    icon: LuIdCard,
    title: "Professional Development",
    desc: "Access training programs, workshops, and career advancement opportunities. This benefit supports employees' professional growth, enhancing their skills and preparing them for future roles within the company."
  },
  {
    icon: LuMonitor,
    title: "Remote Work Options",
    desc: "Enjoy the flexibility to work remotely or adjust your schedule to better suit your needs. This benefit promotes work-life balance and increases productivity by allowing employees to work in environments where they are most comfortable."
  },
  {
    icon: LuUsers,
    title: "Recognition and Rewards",
    desc: "Participate in recognition and rewards programs that acknowledge and reward outstanding performance. This benefit boosts morale, encourages teamwork, and motivates employees to achieve their best."
  }
];


const BenefitsPackage = () => {
  return (
    <section className='py-[60px] px-5 grid gap-10 lg:py-[80px] lg:px-7 lg:gap-[80px] xl:px-8 xl:gap-[60px] w-full max-w-[1200px] mx-auto'>
          {/* header */}
      <div className="flex flex-col items-center gap-8 max-w-[720px] mx-auto text-center">
        <HeaderPill text='Benefits' />
        <div className="grid gap-4 text-balance text-black-2">
          <h2 className="text-[28px] font-medium lg:text-[34px] xl:text-[36px]">
           Our benefits package is stellar
          </h2>
          <p className="text-[18px] lg:text-[19px] xl:text-xl">Our team always comes first. That's why we built a benefits package that takes care of our people.</p>
        </div> 
      </div>
      {/* cards */}
      <div className="flex flex-wrap items-start justify-center gap-6 max-w-[1000px] w-full mx-auto">
         {benefitsData.map((item, i) => (
    <BenefitCard
      key={i}
      icon={item.icon}
      title={item.title}
      desc={item.desc}
    />
  ))}
      </div>
    </section>
  )
}

export default BenefitsPackage