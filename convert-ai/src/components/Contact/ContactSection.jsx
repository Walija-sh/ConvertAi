import React, { useRef } from 'react'
import HeaderPill from '../common/HeaderPill'
import { motion, useScroll, useTransform } from "motion/react";
import ContactForm from './ContactForm';

const ContactSection = () => {
      const SectRef = useRef(null);

const { scrollYProgress } = useScroll({
  target: SectRef,
  offset: ["start 0%", "center 0%"] 
});


const scale = useTransform(scrollYProgress, [0, 1], [1, 10]);

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
    ref={SectRef} className=' mx-auto py-[60px]  px-5 lg:pt-[80px] lg:pb-[100px]  xl:py-[100px] xl:px-8  flex flex-col items-center gap-12 relative overflow-hidden '>
       <motion.div 
        style={{scale}}
        className="absolute hidden lg:block aspect-square rounded-full w-[800px] bg-radial from-pastel-3/20  to-pastel-3/60 top-7 left-[50%]  translate-x-[-50%] z-1"></motion.div>
{/* header */}
  <div className="flex flex-col items-center gap-8 max-w-[600px] mx-auto relative z-10 text-center">
    <motion.div variants={fadeUp} className='mx-auto' >

    <HeaderPill text="Contact" />
    </motion.div>

 <div className="text-black-2 grid gap-4 text-balance">
          <motion.h1 variants={fadeUp} className="text-[32px] md:text-[40px] lg:text-[48px]">Contact our team</motion.h1>
          <motion.p variants={fadeUp}  className='text-[18px] md:text-[19px] lg:text-[20px]'>Fill out the form to contact our team.</motion.p>
        </div>
  </div>

<motion.div variants={fadeUp} className='mx-auto w-full relative z-10' >
    {/* form */}
    <ContactForm/>

</motion.div>
    </motion.section>
  )
}

export default ContactSection