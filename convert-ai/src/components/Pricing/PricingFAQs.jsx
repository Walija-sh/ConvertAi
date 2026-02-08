import Accordion from "../common/Accordion";
import HeaderPill from "../common/HeaderPill";


const PricingFAQs = () => {
  const faqData = [
    {
      title: 'What is your refund policy?',
      content:
        "Our refund policy is designed with your satisfaction in mind. If you're not entirely happy with Convert within the first 30 days of your subscription, you can request a full refund. To initiate a refund, please contact our support team with your account details and the reason for your request. We aim to process all refunds within 5-7 business days. Please note that this policy applies to both monthly and annual plans, giving you peace of mind when subscribing to Convert.",
    },
    {
      title: 'Do you offer discounts for large enterprise clients?',
      content:
        "Yes, we offer customized pricing plans for large enterprise clients to ensure that our solution meets their specific needs at the best value. Discounts are available based on the number of users, the length of the subscription, and the scope of features required. Enterprise clients can also benefit from dedicated support, custom integrations, and training sessions. For a personalized quote and to discuss your enterprise needs, please contact our sales team.",
    },
    {
      title: 'How does the referral program work?',
      content:
        "Our referral program is designed to reward our loyal customers for spreading the word about Convert. For every new customer you refer who signs up for a paid plan, you and the referred party both receive a 20% discount on your next billing cycle. There's no limit to how many people you can refer, which means the savings can really add up. To participate, simply share your unique referral link found in your account dashboard. Discounts will be automatically applied to your account once a referral's subscription is confirmed.",
    },
    {
      title: 'Are there any additional fees beyond the subscription price?',
      content:
        "Our pricing is transparent and straightforward: the subscription price includes full access to Convert's core features, regular updates, and standard customer support. There are no hidden fees for setup or maintenance. However, optional services such as custom integrations, advanced training, or premium support packages may incur additional charges. These services are completely optional and are available to help you maximize the value you get from Convert. For more details on optional services and pricing, please visit our website or contact our sales team.",
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

export default PricingFAQs;