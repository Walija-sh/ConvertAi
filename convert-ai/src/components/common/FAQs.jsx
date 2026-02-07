import Accordion from "./Accordion";
import HeaderPill from "./HeaderPill";

// FAQs Component
const FAQs = () => {
  const faqData = [
    {
      title: 'What features does Convert offer?',
      content:
        "Convert offers a range of features designed to optimize your sales funnel, including lead capture forms, email marketing automation, advanced analytics, A/B testing capabilities, CRM integrations, and personalized customer journey mapping. These tools work together to help you convert more leads into customers efficiently.",
    },
    {
      title: 'Can I integrate Convert with other tools and platforms I\'m already using?',
      content:
        "Yes, Convert seamlessly integrates with numerous popular tools and platforms, including CRMs like Salesforce, marketing automation tools like HubSpot, and over 100 other applications via Zapier. This ensures you can maintain your workflow efficiently without the need for manual data transfer.",
    },
    {
      title: 'What kind of support and training resources does Convert provide?',
      content:
        "Convert offers comprehensive support through live chat, email, and phone, alongside an extensive library of tutorials, webinars, and detailed documentation. Our goal is to ensure you can leverage all of Convert's features to their fullest potential.",
    },
    {
      title: 'How does Convert ensure the security and privacy of my data?',
      content:
        "At Convert, we prioritize your data's security and privacy by implementing industry-standard encryption, conducting regular security audits, and adhering to privacy laws like GDPR and CCPA. We are committed to protecting your information and your customers' data from unauthorized access.",
    },
  ];

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
      <Accordion items={faqData} />
    </section>
  );
};

export default FAQs;