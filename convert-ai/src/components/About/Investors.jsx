import React from 'react'
import HeaderPill from '../common/HeaderPill'
import InvestorLogoCard from './InvestorLogoCard';
export const investorsData = [
  {
    logo: "/About/atlantic.svg",
    bgClass: "white-2",
  },
  {
    logo: "/About/black.svg",
    bgClass: "pastel-1",
  },
  {
    logo: "/About/geneva.svg",
    bgClass: "pastel-4",
  },
  {
    logo: "/About/terra.svg",
    bgClass: "pastel-2",
  },
  {
    logo: "/About/nairobi.svg",
    bgClass: "pastel-2",
  },
  {
    logo: "/About/atlantic.svg",
    bgClass: "pastel-4",
  },
  {
    logo: "/About/memphis.svg",
    bgClass: "pastel-1",
  },
  {
    logo: "/About/dune.svg",
    bgClass: "white-2",
  },
];


const Investors = () => {

  return (
    <section className='py-[60px] px-5 grid gap-[40px] max-w-[1200px] mx-auto lg:py-[80px] lg:px-[28px] lg:gap-[80px] xl:py-[80px] xl:px-[32px] xl:gap-[60px]'>

         {/* header */}
      <div className="flex flex-col items-center gap-8 max-w-[720px]  mx-auto text-center">
        <HeaderPill text="Investors" />
        <div className="grid gap-4 text-black-2 text-balance">
          <h2 className="text-[28px] font-medium lg:text-[34px] xl:text-[36px]">
           We are backed by world-class investors
          </h2>
          <p className="text-[18px] lg:text-[19px] xl:text-xl">
           We have raised over $58 million from a wolrd-class group of investors.
          </p>
        </div>
      </div>
     {/* investors logos */}
     <div className="flex flex-wrap justify-center gap-5 max-w-[1000px] mx-auto">
        {investorsData.map((item, i) => (
        <InvestorLogoCard key={i} {...item} />
      ))}
     </div>
    </section>
  )
}

export default Investors