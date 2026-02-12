import Accordion from "../common/Accordion";
import HeaderPill from "../common/HeaderPill";
import { pricingFaqData } from "../common/faqsData";


const PricingFAQs = () => {
 

  return (
    <section className="pt-[60px] px-4 pb-8 grid gap-[50px] max-w-[1200px] mx-auto lg:pt-[80px] lg:pb-[40px] lg:px-[28px] xl:pt-[100px] xl:px-[40px] xl:pb-[52px]">
      {/* Header */}
      <div className="flex flex-col items-center gap-8 max-w-[600px] mx-auto text-center">
        <HeaderPill text="Convert FAQ" />
        <h2 className="text-[28px] font-medium lg:text-[34px] xl:text-[36px] text-black-2 text-balance">
          Frequently Asked Questions
        </h2>
      </div>

      {/* Accordion */}
      <Accordion items={pricingFaqData} />
    </section>
  );
};

export default PricingFAQs;