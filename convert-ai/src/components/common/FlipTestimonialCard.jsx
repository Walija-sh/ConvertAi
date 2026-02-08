import React, { useEffect, useState } from "react";
import { HiOutlineStar } from "react-icons/hi2";

const FlipTestimonialCard = ({
  frontImg,
  name,
  role,
  rating = 5,
  review,
  backBg = "bg-pastel-1",
}) => {
      const [isFlipped, setIsFlipped] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => {
  const mobile = window.innerWidth < 1024;
  setIsMobile(mobile);
  if (!mobile) setIsFlipped(false); 
};
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const handleFlip = () => {
    if (isMobile) setIsFlipped((prev) => !prev);
  };
  return (
    <div onClick={(e) => {
  if (!isMobile) return;
  e.stopPropagation();
  setIsFlipped((prev) => !prev);
}} 
 className="h-[300px] w-[220px] lg:w-[260px] lg:h-[340px] shrink-0 rounded-2xl overflow-hidden cursor-pointer relative perspective-[1000px] group">

      {/* inner */}
      <div className={`w-full h-full relative transition-all duration-300 ease-linear will-change-transform
 transform-3d
        ${isMobile ? (isFlipped ? "-rotate-y-180" : "") : "group-hover:-rotate-y-180"}`}>

        {/* FRONT */}
        <div
          className="absolute inset-0 backface-hidden bg-cover bg-top bg-no-repeat grid items-end"
          style={{ backgroundImage: `url(${frontImg})` }}
        >
          <div className="relative w-full">

            {/* smooth blur mask */}
            <div className="absolute inset-0 backdrop-blur-[12px] bg-black/25 
              [mask-image:linear-gradient(to_top,black_70%,transparent)]" />

            <div className="relative p-4 flex flex-col gap-1 text-white">
              <div className="flex gap-1 text-primary text-xl">
                {Array.from({ length: rating }).map((_, i) => (
                  <HiOutlineStar key={i} />
                ))}
              </div>

              <h6 className="text-xl font-medium">{name}</h6>
              <p className="text-[14px] lg:text-[15px] xl:text-[16px]">{role}</p>
            </div>
          </div>
        </div>

        {/* BACK */}
        <div
          className={`absolute inset-0 backface-hidden -rotate-y-180 p-5 text-[16px] lg:text-[18px] text-black-2 italic  ${backBg} border-[1px] border-gray-4 rounded-2xl`}
        >
          <p  dangerouslySetInnerHTML={{
    __html: review,
  }}></p>
        </div>
      </div>
    </div>
  );
};

export default FlipTestimonialCard;
