import React, { useEffect, useRef, useState } from 'react'
import Button from '../common/Button'
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import HeroCarousel from './HeroCarousel';

const HomeHero = () => {
  const { scrollY } = useScroll();
  const targetRef = useRef(null);
  const circleRef = useRef(null);

  const imageTranslateY = useTransform(
    scrollY,
    [0, 200], 
    ["0%", "-20%"]
  );

  const imageRotateX = useTransform(
    scrollY,
    [0, 200],
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
    ["0%", "120%"]
  )
  const bottomTranslateY = useTransform(
    scrollY,
    [0, 900],
    ["0%", "-40px"]
  )
  const imageScale = useTransform(
    scrollY,
    [0, 200],
    [0.8, 1]
  );

  const [isDesktop, setIsDesktop] = useState(false);

useEffect(() => {
  const check = () => setIsDesktop(window.innerWidth >= 1024);
  check();
  window.addEventListener("resize", check);
  return () => window.removeEventListener("resize", check);
}, []);

// circle anim
const { scrollYProgress: circleProgress } = useScroll({
  target: circleRef,
  offset: ["start 0%", "center center"]
});
const rawScale = useTransform(circleProgress, [0, 1], [1, 10]);

const scale = useSpring(rawScale, {
  stiffness: 80,
  damping: 20,
  mass: 0.6
});


  return (
    <section 
      ref={circleRef}
      className='max-w-5xl mx-auto pt-[80px] pb-[60px] px-5 md:pt-[132px] md:pb-[30px] md:px-8 text-center flex flex-col items-center gap-8 relative overflow-hidden'
    >
     <motion.div 
             style={{scale}}
             className="absolute hidden lg:block aspect-square rounded-full w-[800px] bg-radial from-pastel-3/20  to-pastel-3/60 top-0 left-[50%]  translate-x-[-50%] z-1"></motion.div>
      <motion.div 
        className="flex flex-col items-center gap-8 w-full max-w-[500px] relative z-10"
       style={
  isDesktop
    ? { opacity: headerOpacity, y: headerTranslateY }
    : { opacity: 1, y: 0 }
}

      >
        <div className="text-black-2 grid gap-4 text-balance">
          <h1 className="text-[32px] lg:text-[40px] xl:text-[48px] capitalize">Convert customers with an AI-powered CRM</h1>
          <p className='text-[18px] lg:text-[19px] xl:text-[20px]'>Streamline your sales process with AI-powered insights and close 50% more deals at faster speed.</p>
        </div>
        <Button text='Get started' variant='primary' to='/' shadow={true} className='px-10 py-2'/>
      </motion.div>

      {/* bottom */}
      <div 
        ref={targetRef}
        className="flex flex-col gap-10 max-w-[1000px] mx-auto  relative z-10   w-full"
      >
        <div className="hidden lg:block relative perspective-[1000px] ">
          
          <div className="h-[450px]"></div>
          <motion.div 
            className="absolute top-[-22%] left-0 w-full border-[6px] border-black-2 rounded-xl overflow-hidden transform-3d transition-all duration-300 bg-white-1"
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
              src='/Home/homeHero.png'
              alt="AI-powered CRM dashboard" 
              className="w-full h-auto"
              loading="eager"
 
  decoding="async"
            />
          </motion.div>
        </div>

        
        <div className="border-[6px] border-black-2 rounded-xl overflow-hidden transform-3d transition-all duration-300 lg:hidden">
          <img src='/Home/homeHero.png' alt="AI-powered CRM dashboard" loading="eager"
  decoding="async" />
        </div>

        <motion.div  style={isDesktop ? { y: bottomTranslateY } : {y:0}} className="flex flex-col gap-8">
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