import React, { useEffect, useRef, useState } from 'react'
import Button from '../ui/Button'
import assets from '../../assets/images/assets.js'
import { motion, useScroll, useTransform } from "motion/react";
import HeroCarousel from './HeroCarousel';

const HomeHero = () => {
  const { scrollY } = useScroll();
  const targetRef = useRef(null);
  
  const containerRef = useRef(null);

  const imageTranslateY = useTransform(
    scrollY,
    [0, 400], 
    ["0%", "-30%"]
  );

  const imageRotateX = useTransform(
    scrollY,
    [0, 400],
    [30, 0]
  );

  const headerOpacity = useTransform(
    scrollY,
    [0, 300], 
    [1, 0.67]
  );
  const headerTranslateY = useTransform(
    scrollY,
    [0, 250],
    ["0%", "100%"]
  )
  const bottomTranslateY = useTransform(
    scrollY,
    [0, 900],
    ["0%", "-150px"]
  )
  const imageScale = useTransform(
    scrollY,
    [0, 500],
    [0.8, 1]
  );

  const [isDesktop, setIsDesktop] = useState(false);

useEffect(() => {
  const check = () => setIsDesktop(window.innerWidth >= 1024);
  check();
  window.addEventListener("resize", check);
  return () => window.removeEventListener("resize", check);
}, []);

  return (
    <section 
      ref={containerRef}
      className='max-w-5xl mx-auto pt-[80px] pb-[20px] px-5 md:pt-[132px] md:pb-[30px] md:px-8 text-center flex flex-col items-center gap-8 relative'
    >
      {/* header with scroll-controlled opacity */}
      <motion.div 
        className="flex flex-col items-center gap-8 w-full max-w-[500px]"
       style={isDesktop ? { opacity: headerOpacity, y: headerTranslateY } : {}}
      >
        <div className="text-black-2 grid gap-4 text-balance">
          <h1 className="text-[32px] md:text-[40px] lg:text-[48px]">Convert customers with an AI-powered CRM</h1>
          <p className='text-[18px] md:text-[19px] lg:text-[20px]'>Streamline your sales process with AI-powered insights and close 50% more deals at faster speed.</p>
        </div>
        <Button text='Get started' variant='primary' to='/' shadow={true} className='px-10 py-2'/>
      </motion.div>

      {/* bottom */}
      <div 
        ref={targetRef}
        className="flex flex-col gap-10 max-w-[1000px] mx-auto  relative z-10  w-full"
      >
        <div className="hidden lg:block relative perspective-[1000px] ">
          
          <div className="h-[500px]"></div>
          <motion.div 
            className="absolute top-[-10%] left-0 w-full border-[6px] border-black-2 rounded-xl overflow-hidden transform-3d transition-all duration-300"
            style={{
              y: imageTranslateY,
              rotateX: imageRotateX,
              scale: imageScale,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, curve: "easeInOut" }}
          >
            <img 
              src={assets.homeHero} 
              alt="AI-powered CRM dashboard" 
              className="w-full h-auto"
            />
          </motion.div>
        </div>

        
        <div className="border-[6px] border-black-2 rounded-xl overflow-hidden transform-3d transition-all duration-300 lg:hidden">
          <img src={assets.homeHero} alt="AI-powered CRM dashboard" />
        </div>

        <motion.div  style={isDesktop ? { y: bottomTranslateY } : {}} className="flex flex-col gap-8">
          <h6 className="text-black-2 text-xl font-medium">
            Trusted by 1,000+ startups & enterprises
          </h6>
          <HeroCarousel/>
        </motion.div>
      </div>
    </section>
  )
}

export default HomeHero;