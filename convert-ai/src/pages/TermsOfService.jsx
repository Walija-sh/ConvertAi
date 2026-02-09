import LegalPage from "../components/common/LegalPage";


const TermsOfService = () => {
 const data = {
  title: "Terms of Service",
  date: "Feb 27, 2024",
  sections: [
    {
      paragraphs: [
        `Welcome to Convert. The following terms and conditions (the "Terms") govern all use of the Convert website and all content, services, features, activities, and products available at or through the website (collectively, the "Service"). The Service is owned and operated by [Your Company Name] ("Convert", "we", "us", or "our"). The Service is offered subject to your acceptance without modification of all of the terms and conditions contained herein and all other operating rules, policies (including, without limitation, Convert's Privacy Policy), and procedures that may be published from time to time by Convert (collectively, the "Agreement").`,
        `Please read this Agreement carefully before accessing or using the Service. By accessing or using any part of the Service, you agree to become bound by the terms and conditions of this agreement. If you do not agree to all the terms and conditions of this agreement, then you may not access the Service or use any services. If these terms and conditions are considered an offer by Convert, acceptance is expressly limited to these terms.`,
      ],
    },
    {
      heading: "1. Your Convert Account",
      paragraphs: [
        `If you create an account on the Service, you are responsible for maintaining the security of your account, and you are fully responsible for all activities that occur under the account and any other actions taken in connection with it. You must immediately notify Convert of any unauthorized uses of your account or any other breaches of security. Convert will not be liable for any acts or omissions by you, including any damages of any kind incurred as a result of such acts or omissions.`,
      ],
    },
    {
      heading: "2. Responsibility of Contributors",
      paragraphs: [
        `If you operate an account, comment on a blog, post material to the Service, post links on the Service, or otherwise make (or allow any third party to make) material available (any such material, "Content"), you are entirely responsible for the content of, and any harm resulting from, that Content. That is the case regardless of whether the Content in question constitutes text, graphics, an audio file, or computer software.`,
      ],
    },
    {
      heading: "3. Payment and Renewal",
      list: [
        <>
          <span className="font-medium">General Terms</span> By selecting a product or service, you agree to pay Convert the one-time and/or monthly or annual subscription fees indicated.
        </>,
        <>
          <span className="font-medium">Automatic Renewal</span> Unless you notify Convert before the end of the applicable subscription period that you want to cancel a subscription, your subscription will automatically renew, and you authorize us to collect the then-applicable annual or monthly subscription fee for such subscription (as well as any taxes) using any credit card or other payment mechanism we have on record for you.
        </>,
      ],
    },
    {
      heading: "4. Cancellation and Termination",
      paragraphs: [
        `You are solely responsible for properly canceling your account. You can cancel your account at any time by following the instructions on the Service. Convert reserves the right to (i) modify or discontinue, temporarily or permanently, the Service (or any part thereof) and (ii) refuse any and all current and future use of the Service, suspend or terminate your account (any part thereof) or use of the Service and remove and discard any of your Content within the Service, for any reason, including if Convert believes that you have violated these Terms.`,
      ],
    },
    {
      heading: "5. Changes",
      paragraphs: [
        `Convert reserves the right, at its sole discretion, to modify or replace any part of this Agreement. It is your responsibility to check this Agreement periodically for changes. Your continued use of or access to the Service following the posting of any changes to this Agreement constitutes acceptance of those changes.`,
      ],
    },
    {
      heading: "6. Contact Information",
      paragraphs: [
        `If you have any questions about these Terms, please contact us at [Insert Contact Information].`,
        `This document is intended to provide a clear and concise understanding of the rules and guidelines for using the Service. Users are encouraged to read these terms carefully and thoroughly.`,
      ],
    },
  ],
};


  return <LegalPage {...data} />;
};

export default TermsOfService;
