
import { GoChevronRight } from "react-icons/go";
import {motion} from 'motion/react'

const FeatureCard = ({ 
  title, 
  description, 
  features, 
  image, 
  imageSide = 'right', 
  bgColor = 'bg-pastel-1' 
}) => {
  const isImageOnRight = imageSide === 'right';

  const fadeUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

const imageVariant = (isImageOnRight) => {
  // Check if small screen
  const isSmallScreen = typeof window !== 'undefined' ? window.innerWidth < 1024 : true;

  const fromRight = isSmallScreen || isImageOnRight;
  const xOffset = fromRight ? 50 : -50;

  return {
    hidden: { opacity: 0, x: xOffset, y: 50 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    }
  };
};


  
  return (
    <div className="grid gap-[32px] lg:grid-cols-2 lg:gap-[40px] items-center">
      {/* Image container */}
      <div className={`border-[1px] lg:order-${isImageOnRight ? '2' : '1'} border-gray-2/20 rounded-xl lg:rounded-[20px] overflow-hidden aspect-[1.3] ${bgColor} h-full`}>
        <motion.div
        
        className={`border-2 border-gray-2/20 rounded-xl aspect-[1.26] overflow-hidden mt-6 ml-6 lg:mt-10 ${isImageOnRight ? 'lg:ml-10 -mr-2' : 'lg:-ml-2 lg:mr-10 -mr-2'}`}
          variants={imageVariant(isImageOnRight)}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
        >
          <img src={image} className='object-cover object-top-left' alt={title} />
        </motion.div>
      </div>
      
      {/* Content container */}
      <div className={`grid gap-6 text-black-2 lg:order-${isImageOnRight ? '1' : '2'}`}>
        <div className="grid gap-4">
          <motion.h3 className='text-[22px] lg:text-[26px] xl:text-[30px] font-medium'
          variants={fadeUpVariant}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
          >{title}</motion.h3>
          <motion.p className='text-[16px] lg:text-[17px] xl:text-[18px]'
          variants={fadeUpVariant}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
          >{description}</motion.p>
        </div>
        <ul className="grid gap-4 text-[16px] lg:text-[17px] xl:text-[18px]">
          {features.map((feature, index) => (
            <motion.li key={index} className='flex items-center gap-4'
            variants={fadeUpVariant}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}>
              <span className='flex items-center justify-center rounded-full text-primary bg-primary-hover border-[1px] border-white-2 w-fit'>
                <GoChevronRight />
              </span>
              <p>{feature}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default FeatureCard;
