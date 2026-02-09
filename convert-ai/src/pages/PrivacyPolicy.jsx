import LegalPage from "../components/common/LegalPage";


const PrivacyPolicy = () => {
 const data = {
  title: "Privacy Policy",
  date: "Feb 27, 2024",
  sections: [
    {
      paragraphs: [
        `Welcome to Convert. Your privacy is critically important to us. Convert, located at convertai.framer.website, is committed to protecting your privacy and handling your data in an open and transparent manner. This privacy policy outlines how we collect, use, process, and disclose your information through the use of Convert's services ("Services").`,
      ],
    },
    {
      heading: "1. Information We Collect",
      paragraphs: [
        `We collect information about you when you use our Services, including but not limited to:`,
      ],
      list: [
        <>
          <span className="font-medium">Personal Information:</span> Your name, email address, postal address, phone number, and other information you directly provide on our platform.
        </>,
        <>
          <span className="font-medium">Usage Information:</span> Information on how you use Convert, including interaction data and preferences.
        </>,
        <>
          <span className="font-medium">Technical Data:</span> IP address, browser type, device information, and cookies that are used to ensure the functionality of our platform.
        </>,
      ],
    },
    {
      heading: "2. How We Use Your Information",
      paragraphs: [`Your information is used to:`],
      list: [
        `Provide, maintain, and improve our Services.`,
        `Process transactions and send related information, including confirmations and invoices.`,
        `Communicate with you about products, services, offers, promotions, and provide customer support.`,
        `Enhance security, monitor and verify identity or service access, combat spam, malware, or other security risks.`,
      ],
    },
    {
      heading: "3. Sharing Your Information",
      paragraphs: [
        `We do not sell your personal information. We share information about you in the following ways:`,
      ],
      list: [
        `With service providers who perform services on our behalf, under strict data protection terms.`,
        `To comply with laws or to respond to lawful requests and legal processes.`,
        `To protect the rights and property of Convert, our agents, customers, and others, including enforcing our agreements, policies, and terms of use.`,
      ],
    },
    {
      heading: "4. Data Retention",
      paragraphs: [
        `We retain personal information we collect from you where we have an ongoing legitimate business need to do so. When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize it.`,
      ],
    },
    {
      heading: "5. Your Rights",
      paragraphs: [`You have the right to:`],
      list: [
        `Request access to the personal information we hold about you.`,
        `Ask for your information to be corrected or deleted.`,
        `Object to our processing of your personal data.`,
        `Request that we limit the processing of your personal information.`,
      ],
    },
    {
      heading: "6. Children's Privacy",
      paragraphs: [
        `Our Services are not directed to individuals under the age of 16. Convert does not knowingly collect personal information from children under 16. If we become aware that a child under 16 has provided us with personal information, we will take steps to delete such information.`,
      ],
    },
    {
      heading: "7. Changes to This Privacy Policy",
      paragraphs: [
        `We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last Updated" date.`,
      ],
    },
    {
      heading: "8. Contact Us",
      paragraphs: [
        `If you have any questions about this Privacy Policy, please contact us at [Insert Contact Information].`,
        `This Privacy Policy provides a framework for managing personal information and reflects Convert's commitment to privacy. Users are encouraged to review it periodically for updates`,
      ],
    },
  ],
};


  return <LegalPage {...data} />;
};

export default PrivacyPolicy;
