import React from "react";
import { motion } from "motion/react";

const HeroCarousel = () => {
  const logos = [
    'Home/heroLogo1.svg',
    'Home/heroLogo2.svg',
    'Home/heroLogo3.svg',
    'Home/heroLogo4.svg',
    'Home/heroLogo5.svg',
    'Home/heroLogo6.svg',
    'Home/heroLogo7.svg',
    'Home/heroLogo8.svg',
    'Home/heroLogo9.svg',
    'Home/heroLogo10.svg',
  ];

  const loopLogos = [...logos, ...logos];

  return (
    <div className="relative overflow-hidden w-full">
      
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

      <motion.div
        className="flex items-center gap-8"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          ease: "linear",
          duration: 40,   
          repeat: Infinity,
        }}
      >
        {loopLogos.map((logo, index) => (
  <div
    key={index}
    className="h-[26px] w-[120px] shrink-0 flex items-center justify-center"
  >
    <img
      src={`${logo}`}
      alt=""
      className="max-h-full max-w-full object-contain"
    />
  </div>
))}

      </motion.div>
    </div>
  );
};

export default HeroCarousel;
