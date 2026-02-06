// HeaderPill.jsx
import React from 'react';

const HeaderPill = ({ text }) => {
  return (
    <div className="rounded-[99px] bg-linear-to-b from-black/80 to-black text-white text-[14px] xl:text-[16px] py-2 px-5 w-fit">
      {text}
    </div>
  );
};

export default HeaderPill;
