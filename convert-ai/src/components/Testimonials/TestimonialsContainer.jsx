import React from 'react'
import TestimonialCard from './TestimonialCard';
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";


const testimonialsData = {
    col1:[
{
name: "Rachel Kim",
role: "GM @ Startup",
image: "/Testimonials/rachael.jpg",
bgColor: "pastel-3",
text: `"SaaSboost's customizable reporting and dashboards have made it easy to track our key metrics and optimize our campaigns effectively."`
},
{
name: "Michael Brown",
role: "Sales @ Chipotle",
image: "/Testimonials/michael.jpg",
bgColor: "pastel-1",
text: `"SaaSboost's real-time analytics and alerts have given us the insights we need to make data-driven decisions quickly."`
},
{
name: "Sarah Taylor",
role: "Marketing @ Gusto",
image: "/Testimonials/sarah.jpg",
bgColor: "pastel-2",
text: `"The automated A/B testing feature in SaaSboost has streamlined our ad optimization process and boosted our conversions."`
},
{
name: "David Lee",
role: "Manager @ BigCO",
image: "/Testimonials/david.png",
bgColor: "pastel-1",
text: `"SaaSboost's unified dashboard makes it easy to oversee all our campaigns from one place. It's a game-changer!"`
},
{
name: "Emily Chen",
role: "CEO @ Bootstrap",
image: "/Testimonials/emily.png",
bgColor: "pastel-3",
text: `"SaaSboost has revolutionized our ad management. The AI-powered optimization has significantly improved our ROI."`
}
],
col2: [ 
{
name: "Elena Rodriguez",
role: "Marketing @ Zapier",
image: "/Testimonials/elena.png",
bgColor: "pastel-2",
text: `"Incorporating Convert into our workflow has revolutionized how we handle client projects at Creative Solutions Agency. As the Founder and CEO, I've observed a remarkable <span class='font-medium'>60% improvement</span> in our project conversion rates, thanks to Convert's intuitive interface and robust project management tools."`
},
{
name: "Marcus Chen",
role: "Sales @ Linear",
image: "/Testimonials/marcus.jpg",
bgColor: "pastel-4",
text: `'At Digital Frontier Agency, Convert has been a cornerstone of our digital transformation strategy. As Managing Director, I've seen our team's productivity soar, with a <span class='font-medium'>50% increase in conversion rates</span> since we started using Convert."`
},
{
name: "Sofia Alvarez",
role: "Content Creator & Influencer",
image: "/Testimonials/sofia.png",
bgColor: "pastel-3",
text: `"As a content creator and influencer, finding the right tool to manage my collaborations and sponsorships was a challenge until I discovered Convert. The <span class='font-medium'>platform has drastically simplified</span> my workflow, allowing me to track my projects and engagement rates in real-time."`
},
{
name: "Liam Peterson",
role: "Online Coach & Entrepreneur",
image: "/Testimonials/liam.png",
bgColor: "pastel-1",
text: `"The platform's personalized engagement tools and detailed analytics have provided me with invaluable insights into my audience, leading to a <span class='font-medium'>65% increase in conversion rates</span> for my coaching programs"`
}
],

col3: [
{
name: "Samantha Lee",
role: "Sales Director @ Asana",
image: "/Testimonials/samantha.jpg",
bgColor: "pastel-2",
text: `Since adopting Convert, our team at TechInnovate Solutions has seen a transformative increase in efficiency and results. As the Sales Director, I've witnessed a 35% rise in conversion rates and <span class='font-medium'>saved $20,000 annually.</span>`
},
{
name: "Michael Richardson",
role: "VP of Sales @ Make",
image: "/Testimonials/michaelr.jpg",
bgColor: "pastel-4",
text: `"Implementing Convert across our global sales divisions revolutionized our approach to lead management. As the VP of Sales at GlobalTech Enterprises, I've observed a substantial <span class='font-medium'>50% increase in our conversion rates.</span>"`
},
{
name: "Jessica Torres",
role: "CEO @ StartupInnovate",
image: "/Testimonials/jessica.jpg",
bgColor: "pastel-3",
text: `"As CEO of StartUp Innovate, the decision to integrate Convert into our operations marked a <span class='font-medium'>pivotal moment in our growth</span> journey. "`
},
{
name: "Alex Kim",
role: "Sales & Remote",
image: "/Testimonials/alex.jpg",
bgColor: "pastel-1",
text: `"At Remote, adopting Convert was a game-changer. As CEO, I've seen firsthand how its cutting-edge AI analytics and automation capabilities transformed our sales approach, leading to a 45% boost in conversion rates."`
}
]

};
const TestimonialsContainer = () => {
const containerRef = useRef(null);

const { scrollYProgress } = useScroll({
  target: containerRef,
  offset: ["start end", "end start"] 
});
const centerY = useTransform(
  scrollYProgress,
  [0, 0.5, 1],
  [0, -80, -160]   
);

  return (
    <div ref={containerRef} className='grid gap-6 max-w-[1024px] mx-auto relative z-10 w-full lg:grid-cols-3 lg:items-start '>
        {/* col 1 */}
        <div className="flex flex-col gap-6 items-start">
            
             {testimonialsData.col1.map((item, i) => (
        <TestimonialCard key={i} {...item} />
      ))}
        </div>
        {/* col 2 */}
        <motion.div style={{ y: centerY }} className=" hidden lg:flex flex-col gap-6 items-start">
            
             {testimonialsData.col2.map((item, i) => (
        <TestimonialCard key={i} {...item} />
      ))}
        </motion.div>
        {/* col 2 sm */}
        <div  className=" flex lg:hidden flex-col gap-6 items-start">
            
             {testimonialsData.col2.map((item, i) => (
        <TestimonialCard key={i} {...item} />
      ))}
        </div>
        {/* col 3 */}
        <div className="flex flex-col gap-6 items-start">
            
             {testimonialsData.col3.map((item, i) => (
        <TestimonialCard key={i} {...item} />
      ))}
        </div>
    </div>
  )
}

export default TestimonialsContainer