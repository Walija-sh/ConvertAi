import React, { useRef } from 'react'
import HeaderPill from '../common/HeaderPill'
import { motion, useScroll, useSpring, useTransform } from "motion/react";

const ChangelogHero = () => {
      const SectRef = useRef(null);

const { scrollYProgress } = useScroll({
  target: SectRef,
  offset: ["start 0%", "center center"] 
});


const rawScale = useTransform(scrollYProgress, [0, 1], [1, 10]);

const scale = useSpring(rawScale, {
  stiffness: 80,   
  damping: 20,     
  mass: 0.6
});

  return (
    <motion.section ref={SectRef} className=' mx-auto py-[60px]  px-5 lg:py-[80px]   xl:px-8 xl:pt-[100px]    relative overflow-hidden '>
       <motion.div 
        style={{scale}}
        className="absolute hidden lg:block aspect-square rounded-full w-[800px] bg-radial from-pastel-3/20  to-pastel-3/60 top-7 left-[50%]  translate-x-[-50%] z-1"></motion.div>
{/* header */}
  <div className="flex flex-col items-center gap-8 max-w-[600px] mx-auto relative z-10 text-center">
    <HeaderPill text="Changelog" />
 <div className="text-black-2 grid gap-4 text-balance">
          <h1 className="text-[32px] lg:text-[40px] xl:text-[48px]">Product updates</h1>
          <p  className='text-[18px] lg:text-[19px] xl:text-[20px]'>Product release updates </p>
        </div>
  </div>

    </motion.section>
  )
}


export default ChangelogHero