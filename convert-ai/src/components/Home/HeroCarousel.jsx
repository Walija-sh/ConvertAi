import React from "react";
import assets from "../../assets/assets";
import { motion } from "motion/react";

const HeroCarousel = () => {
  const logos = [
    assets.heroLogo1,
    assets.heroLogo2,
    assets.heroLogo3,
    assets.heroLogo4,
    assets.heroLogo5,
    assets.heroLogo6,
    assets.heroLogo7,
    assets.heroLogo8,
    assets.heroLogo9,
    assets.heroLogo10,
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
      src={logo}
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
