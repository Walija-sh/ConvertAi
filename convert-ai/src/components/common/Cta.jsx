import React from 'react';
import Button from './Button';
import HeaderPill from './HeaderPill';

const Cta = ({
  headerText = "Join 1,000+ startups",
  title = "Save time, close more deals",
  description = "Salespeople spend +40% of their time updating their CRM, not with Convert: focus on closing deals.",
  buttonText = "Start for free",
  buttonTo = "/",
  maxWidth="1064px"
}) => {
  return (
    <section className="pt-8 px-4 pb-[60px] lg:pt-12 lg:px-8 lg:pb-[80px] xl:p-12 xl:pb-[100px]">
      <div style={{ maxWidth: maxWidth || "1064px" }} className="mx-auto">
        <div className="rounded-[36px] bg-primary-grad text-center py-[60px] px-8 lg:py-[80px] relative overflow-hidden cta-shadow">
          {/* background circle */}
          <div className="absolute z-1 bg-pastel-3 min-w-[430px] min-w-[376px] sm:max-w-[376px] lg:max-w-[619px] mx-auto w-[90%] aspect-square rounded-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></div>

          {/* content */}
          <div className="relative z-50 grid gap-8 max-w-[600px] mx-auto">
            <div className="flex flex-col items-center gap-8 text-center">
              <HeaderPill text={headerText} />
              <div className="grid gap-4 text-black-2 text-balance">
                <h2 className="text-[28px] font-medium lg:text-[34px] xl:text-[36px]">
                  {title}
                </h2>
                <p className="text-[18px] lg:text-[19px] xl:text-xl">{description}</p>
              </div>
            </div>

            <Button
              to={buttonTo}
              text={buttonText}
              variant="primary"
              shadow={true}
              className="w-fit mx-auto px-8 py-1.5"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
