import { motion } from "motion/react";
import { useState } from "react";

const InvestorLogoCard = ({
  logo,
  hoverLogo = null,     
  bgClass = "white-2", 
  className = "",
}) => {
  const [isHovered, setIsHovered] = useState(false);

 const LOGO_HEIGHT = window.innerWidth >= 1024 ? 36 : 24;
const bgMap = {
  "white-2": "bg-gradient-to-b from-white/0 to-white",
  "pastel-1": "bg-gradient-to-b from-pastel-1/0 to-pastel-1",
  "pastel-2": "bg-gradient-to-b from-pastel-2/0 to-pastel-2",
  "pastel-4": "bg-gradient-to-b from-pastel-4/0 to-pastel-4",
};


  return (
    <div
      className={`
        w-[150px] h-[100px] lg:w-[220px] lg:h-[147px]
        flex items-center justify-center
       ${bgMap[bgClass]}
        p-5 rounded-lg investor-shadow
        transition-all duration-150 ease-in cursor-pointer
        overflow-hidden relative
        
        ${className}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* logo viewport */}
      <div className="h-[24px] lg:h-[36px] overflow-hidden relative">

        <motion.div
          className="flex flex-col"
          animate={{ y: isHovered ? -LOGO_HEIGHT : 0 }}
          transition={{ duration: 0.28, ease: "easeInOut" }}
        >
          {/* default logo */}
          <div className="h-[24px] lg:h-[36px] flex items-center justify-center">
            <img
              src={logo}
              className="h-full object-contain"
              alt="investor logo"
              draggable={false}
            />
          </div>

          {/* hover logo (or same logo) */}
          <div className="h-[24px] lg:h-[36px] flex items-center justify-center">
            <img
              src={hoverLogo || logo}
              className="h-full object-contain"
              alt="investor logo"
              draggable={false}
            />
          </div>

        </motion.div>

      </div>
    </div>
  );
};

export default InvestorLogoCard;
