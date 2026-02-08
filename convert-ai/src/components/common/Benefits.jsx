import React from 'react';
import Button from './Button';

const Benefits = ({
  title = "Are you ready to convert more leads into customers?",
  description = "Join 1000+ agencies, startups & consultants closing deals with Convert CRM",
  buttonText = "Yes, I'm ready",
  buttonTo = "/",
  maxWidth='1064px'
}) => {
  return (
    <section className="py-8 px-4 lg:py-12 lg:px-8 xl:px-10">
      <div style={{ maxWidth: maxWidth || "1064px" }} className="mx-auto">
        <div className="rounded-[20px] bg-primary text-white-1 text-center py-[60px] px-8 lg:py-[100px] lg:px-[60px] relative overflow-hidden">
          {/* Background layers */}
          <div className="absolute inset-[20px] bg-linear-to-b from-primary to-primary-grad rounded-[20px] z-1"></div>
          <div className="absolute z-1 -rotate-50 bg-primary w-[200%] h-[30%] translate-x-[-25%] translate-y-[50%] lg:translate-x-[-32%] md:h-[50%] lg:h-[80%]"></div>

          {/* Content */}
          <div className="relative z-50 grid gap-[40px]">
            <div className="grid gap-5 max-w-[720px] mx-auto text-balance">
              <h2 className="text-[32px] md:text-[40px] xl:text-[48px]">{title}</h2>
              <p className="text-[16px] lg:text-[17px] xl:text-[18px] font-medium">{description}</p>
            </div>

            <Button
              to={buttonTo}
              text={buttonText}
              variant="secondary"
              shadow={true}
              className="w-fit mx-auto px-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
