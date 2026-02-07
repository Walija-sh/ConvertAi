import { motion } from "motion/react";
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
  
  
  const variantStyles = {
    light: "border-gray-2/20 border text-black-2 bg-white",
    primary: "border-white-2  border-[1.5px] text-white bg-primary outline-1 outline-primary ",
    secondary: "border-white-1  border-[1.5px] text-white bg-black-2 outline-1 outline-black-2 ",
  };
  
 const OUTER_SHADOW = `
  rgba(0, 0, 0, 0.13) 0.301094px 0.602187px 0.673266px -0.833333px,
  rgba(0, 0, 0, 0.13) 1.14427px 2.28853px 2.55866px -1.66667px,
  rgba(0, 0, 0, 0.13) 5px 10px 11.1803px -2.5px
`;

const INSET_SHADOW = `
  rgba(0, 0, 0, 0.16) 0px -0.361312px 0.939412px -1.08333px inset,
  rgba(0, 0, 0, 0.15) 0px -1.37312px 3.57011px -2.16667px inset,
  rgba(0, 0, 0, 0.09) 0px -6px 15.6px -3.25px inset
`;

const hasInset = variant === "primary" || variant === "secondary";

let boxShadowValue = "none";

if (shadow && hasInset) {
  boxShadowValue = `${OUTER_SHADOW}, ${INSET_SHADOW}`;
} else if (shadow) {
  boxShadowValue = OUTER_SHADOW;
} else if (hasInset) {
  boxShadowValue = INSET_SHADOW;
}


  
   const getTextHeight = () => {
    
    return 24; 
  };
  
  const textHeight = getTextHeight(); 
  const translateValue = isHovered ? -textHeight : 0; 

  return (
    <Link 
      to={to}
       style={{ boxShadow: boxShadowValue }}
      className={`
        relative px-5 py-1.5 text-center rounded-md text-[16px] lg:text-[18px] font-medium 
        overflow-hidden transition-all duration-200 relative 
        ${variantStyles[variant]}
        
        ${fullWidth ? 'w-full' : 'w-auto inline-block'}
        ${className}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
    
      <div className='overflow-hidden h-6 relative z-20'>
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