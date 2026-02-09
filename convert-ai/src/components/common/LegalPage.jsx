import React from "react";
import useDocumentTitle from "../common/useDocumentTitle";

const LegalPage = ({ title, date, sections }) => {
  useDocumentTitle(`${title} | Convert`);

  return (
    <section className='py-[60px] px-5 lg:py-[80px] lg:px-8 xl:py-[100px] grid gap-10 max-w-[720px] mx-auto text-[16px] lg:text-[17px] xl:text-[18px] text-black-2 leading-[1.3em] tracking-[-0.04em]'>

      {/* Header */}
      <div className="grid gap-5 text-center">
        <h1 className="text-[32px] lg:text-[40px] xl:text-[44px] font-medium">
          {title}
        </h1>
        <div className='text-[18px] flex items-center justify-center gap-2'>
          <p>Effective date:</p>
          <p>{date}</p>
        </div>
      </div>

      <div>
        {sections.map((sec, i) => (
          <div key={i}>
            {sec.heading && (
              <h4 className="text-xl lg:text-[22px] xl:text-[24px] mt-10 font-medium">
                {sec.heading}
              </h4>
            )}

            {sec.paragraphs?.map((p, j) => (
              <p key={j} className="mt-5">
                {p}
              </p>
            ))}

            {sec.list && (
              <ul className="mt-8 pl-5 list-disc">
                {sec.list.map((item, k) => (
                  <li key={k}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default LegalPage;
