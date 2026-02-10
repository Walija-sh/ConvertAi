import React, { useRef } from 'react'
import HeaderPill from '../common/HeaderPill'
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import CareerHeroContent from './CareerHeroContent';
import Button from '../common/Button';


const CareerHero = () => {
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

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};


  return (
    <motion.section
    variants={{
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12 }
    }
  }}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, margin: "-80px" }}
    ref={SectRef} className=' mx-auto py-[60px]  px-5 lg:py-[80px] xl:px-8 xl:pt-[100px]  flex flex-col items-center gap-12 relative overflow-hidden '>
       <motion.div 
        style={{scale}}
        className="absolute hidden lg:block aspect-square rounded-full w-[800px] bg-radial from-pastel-3/20  to-pastel-3/60 top-7 left-[50%]  translate-x-[-50%] z-1"></motion.div>
{/* header */}
<div
className="grid gap-10 max-w-[600px] mx-auto place-content-center relative z-10 text-center">
  <div className="flex flex-col items-center gap-8 ">
    <motion.div variants={fadeUp} className='mx-auto' >

    <HeaderPill text="Careers" />
    </motion.div>

 <div className="text-black-2 grid gap-4 text-balance">
          <motion.h1 variants={fadeUp} className="text-[32px] lg:text-[40px] xl:text-[48px]">Convert is growing.
Grow with us.</motion.h1>
          <motion.p variants={fadeUp}  className='text-[18px] lg:text-[19px] xl:text-[20px]'>Join us as we take on the CRM industry head on.</motion.p>
        </div>
  </div>
  <motion.div variants={fadeUp} className='mx-auto' >


  <Button as='a' text='See open positions' to='#openpositions' variant='primary' shadow={true} className='py-1.5 px-8 w-fit mx-auto'/>
  </motion.div>

</div>
<motion.div variants={fadeUp} className='w-full relative z-10' >
    {/* content */}
    <CareerHeroContent/>

</motion.div>
    </motion.section>
  )
}

export default CareerHero
