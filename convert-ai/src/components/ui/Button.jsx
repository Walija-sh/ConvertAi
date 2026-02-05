import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const Button = ({ 
  to = "#", 
  text = "Button", 
  variant = "light", 
  hoverText = null,
  className = "",
  shadow = false,
  fullWidth = false,
  ...props 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Define variant styles
  const variantStyles = {
    light: "border-gray-2/20 border text-black-2 bg-white",
    primary: "border-primary border text-white bg-primary outline-1 outline-primary outline-offset-[1.5px]",
    secondary: "border-black-2 border text-white bg-black-2 outline-1 outline-black-2 outline-offset-[1.5px]",
    accent: "border-accent border text-white bg-accent outline-1 outline-accent outline-offset-[1.5px]",
  };
  
  // Define shadow styles if enabled
  const shadowStyle = shadow 
    ? "shadow-[rgba(254,81,1,0)_0px_0px_0px_0px,rgba(254,81,1,0)_0px_0px_0px_0px,rgba(254,81,1,0)_0px_0px_0px_0px] hover:shadow-[rgba(254,81,1,0.1)_0px_4px_6px,rgba(254,81,1,0.05)_0px_10px_15px,rgba(254,81,1,0.1)_0px_15px_25px]"
    : "";
  
   const getTextHeight = () => {
    
    return 24; 
  };
  
  const textHeight = getTextHeight(); 
  const translateValue = isHovered ? -textHeight : 0; 

  return (
    <Link 
      to={to}
      className={`
        px-5 py-1.5 text-center rounded-lg text-[16px] lg:text-[18px] font-medium 
        overflow-hidden transition-all duration-200
        ${variantStyles[variant]}
        ${shadowStyle}
        ${fullWidth ? 'w-full' : 'w-auto inline-block'}
        ${className}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      <div className='overflow-hidden h-6 relative'>
        <motion.div
          className='flex flex-col'
          animate={{ y: isHovered ? translateValue : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <span className='h-6 flex items-center justify-center'>
            {text}
          </span>
          <span className='h-6 flex items-center justify-center'>
            {hoverText || text}
          </span>
        </motion.div>
      </div>
    </Link>
  );
};

export default Button;