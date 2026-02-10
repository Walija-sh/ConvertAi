import React, { useRef } from 'react'
import HeaderPill from '../common/HeaderPill'
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import BlogCard from './BlogCard';


const blogData = [
  {
    title: "CRM strategies for retaining customers",
    desc: "Discover the power of AI-driven optimization and unified management.",
    author: "Alice Smith",
    date: "Feb 14, 2024",
    image: "/Blog/blog1.png",
    authorImg: "/Blog/alice.png",
    link:"#"
  },
  {
    title: "Leveraging CRM data for business Intelligence",
    desc: "How SaaSboost's AI features can boost your ad performance for you business.",
    author: "Bob Johnson",
    date: "Feb 15, 2024",
    image: "/Blog/blog2.png",
    authorImg: "/Blog/bob.png",
    link:"#"
  },
  {
    title: "Strategies for enhanced customer engagement",
    desc: "Simplify your ad campaigns with SaaSboost's advanced features.",
    author: "Charlie Brown",
    date: "Feb 17, 2024",
    image: "/Blog/blog3.png",
    authorImg: "/Blog/charlie.png",
    link:"#"
  },
  {
    title: "Navigating the Shift: The Rise of Remote Work",
    desc: "Discover the power of AI-driven optimization and unified management.",
    author: "David Lee",
    date: "Feb 18, 2024",
    image: "/Blog/blog4.png",
    authorImg: "/Blog/david.png",
    link:"#"
  },
  {
    title: "Elevating customer experience with AI",
    desc: "Leveraging Artificial Intelligence to Transform Customer Interactions",
    author: "Alice Smith",
    date: "Feb 20, 2024",
    image: "/Blog/blog5.jpg",
    authorImg: "/Blog/alice.png",
    link:"#"
  },
  {
    title: "Unlocking higher conversion rates with CRM",
    desc: "Discover the power of AI-driven optimization and unified management.",
    author: "Bob Johnson",
    date: "Feb 21, 2024",
    image: "/Blog/blog6.png",
    authorImg: "/Blog/bob.png",
    link:"#"
  }
];


const BlogSection = () => {
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
    <motion.section ref={SectRef} className=' mx-auto py-[60px]  px-5 lg:pt-[80px] lg:pb-[52px]   lg:px-8 xl:pt-[100px]  flex flex-col items-center gap-[60px]  relative overflow-hidden '>
       <motion.div 
        style={{scale}}
        className="absolute hidden lg:block aspect-square rounded-full w-[800px] bg-radial from-pastel-3/20  to-pastel-3/60 top-7 left-[50%]  translate-x-[-50%] z-1"></motion.div>
{/* header */}
  <div className="flex flex-col items-center gap-8 max-w-[600px] mx-auto relative z-10 text-center">
    <HeaderPill text="Blogs & Essays" />
 <div className="text-black-2 grid gap-4 text-balance">
          <h1 className="text-[32px] lg:text-[40px] xl:text-[48px]">Learn how to convert more users into customers</h1>
          <p  className='text-[18px] lg:text-[19px] xl:text-[20px]'>A collection of top notch blog posts to help you convert. </p>
        </div>
  </div>

    {/* blog cards*/}
<div  className='mx-auto max-w-[500px] lg:max-w-[1064px] w-full relative z-10 grid gap-8 lg:grid-cols-2' >

   {blogData.map((blog, i) => (
    <BlogCard key={i} {...blog} />
  ))}
</div>
    </motion.section>
  )
}

export default BlogSection