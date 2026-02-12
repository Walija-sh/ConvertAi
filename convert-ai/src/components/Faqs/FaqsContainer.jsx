import React from 'react'
import Accordion from '../common/Accordion';
import { faqsData } from '../common/faqsData';

const FaqsContainer = () => {

  return (
    <section className='pt-[100px] pb-[60px] px-4 grid gap-[120px] lg:px-5 lg:pb-[80px] xl:py-[100px]'>
       {faqsData.map((faq, i) => (
    <div key={i} className="grid gap-10 mx-auto">

      {/* header */}
      <div className="grid gap-4 text-balance text-black-2 text-center">
        <h2 className="text-[28px] font-medium lg:text-[34px] xl:text-[36px]">
          {faq.heading}
        </h2>
        <p className="text-[16px] lg:text-[17px] xl:text-[18px]">
          {faq.subtitle}
        </p>
      </div>

      <Accordion items={faq.items} />

    </div>
  ))}

    </section>
  )
}

export default FaqsContainer