import React from 'react'
import HeaderPill from '../common/HeaderPill'
import Button from '../common/Button'
import FlipTestimonialCard from '../common/FlipTestimonialCard';

const testimonials = [
  {
    frontImg: "/Home/Liam.png",
    name: "Liam Peterson",
    role: "Online Coach & Entrepreneur",
    backBg: "bg-pastel-1",
    review:
      `"The platform's personalized engagement tools and detailed analytics have provided me with invaluable insights into my audience, leading to a <span class='font-medium'>65% increase in conversion rates</span> for my coaching programs."`,
  },
  {
    frontImg: "/Home/sofia.png",
    name: "Sofia Alvarez",
    role: "Content Creator & Influencer",
    backBg: "bg-pastel-3",
    review:
      `"As a content creator and influencer, finding the right tool to manage my collaborations and sponsorships was a challenge until I discovered Convert. The <span class='font-medium'>platform has drastically simplified</span> my workflow, allowing me to track my projects and engagement rates in real-time. "`,
  },
  {
    frontImg: "/Home/marcus.jpg",
    name: "Marcus Chen",
    role: "Sales @ Linear",
    backBg: "bg-pastel-4",
    review:`'At Digital Frontier Agency, Convert has been a cornerstone of our digital transformation strategy. As Managing Director, I've seen our team's productivity soar, with a <span class='font-medium'> 50% increase in conversion rates</span> since we started using Convert."`,
  },
  {
    frontImg: "/Home/elena.png",
    name: "Elena Rodriguez",
    role: "Marketing @ Zapier",
    backBg: "bg-pastel-2",
    review:
      `"Incorporating Convert into our workflow has revolutionized how we handle client projects at Creative Solutions Agency. As the Founder and CEO, I've observed a remarkable <span class='font-medium'>60% improvement</span>  in our project conversion rates, thanks to Convert's intuitive interface and robust project management tools."`,
  },
  {
    frontImg: "/Home/alex.jpg",
    name: "Alex Kim",
    role: "Sales & Remote",
    backBg: "bg-pastel-1",
    review:
      `"At Remote, adopting Convert was a game-changer. As CEO, I've seen firsthand how its cutting-edge AI analytics and automation capabilities transformed our sales approach, leading to a 45% boost in conversion rates."`,
  },
  {
    frontImg: "/Home/jessica.jpg",
    name: "Jessica Torres",
    role: "CEO @ StartupInnovate",
    backBg: "bg-pastel-3",
    review:
      `As CEO of StartUp Innovate, the decision to integrate Convert into our operations marked a <span class='font-medium'>pivotal moment in our growth</span>  journey. `,
  },
  {
    frontImg: "/Home/michael.jpg",
    name: "Michael Richardson",
    role: "VP of Sales @ Make",
    backBg: "bg-pastel-4",
    review:
      `"Implementing Convert across our global sales divisions revolutionized our approach to lead management. As the VP of Sales at GlobalTech Enterprises, I've observed a substantial  <span class='font-medium'>50% increase in our conversion rates.</span>"`,
  },
  {
    frontImg: "/Home/samantha.jpg",
    name: "Samantha Lee",
    role: "Sales Director @ Asana",
    backBg: "bg-pastel-2",
    review:
      `Since adopting Convert, our team at TechInnovate Solutions has seen a transformative increase in efficiency and results. As the Sales Director, I've witnessed a 35% rise in conversion rates and <span class='font-medium'>saved $20,000 annually.</span>`,
  },
];



const Testimonials = () => {
  return (
    <section className='py-[60px] overflow-x-hidden grid gap-8 lg:pt-[80px] lg:pb-[40px] lg:px-7 xl:px-0 xl:py-[80px]'>
        {/* header */}
      <div className="px-5 flex flex-col items-center gap-8 max-w-[720px]  mx-auto text-center">
        <HeaderPill text="Testimonials" />
        <div className="grid gap-4 text-black-2 text-balance">
          <h2 className="text-[28px] font-medium lg:text-[34px] xl:text-[36px]">
           Convert changed their business
          </h2>
          <p className="text-[18px] lg:text-[19px] xl:text-xl">
           Don't just take our word for it. See how Convert impacted the businesses of different enterprises, startups, agencies, and creators.
          </p>
        </div>
      </div>
      {/* flips cards container */}
      <div className="p-5 flex gap-5 overflow-x-auto hide-scrollbar">
       {testimonials.map((t, i) => (
    <FlipTestimonialCard key={i} {...t} />
  ))}

        
      </div>
      {/* button */}
      <Button text='See the Wall of Love' variant='primary' to='/wall-of-love' className='w-fit px-8 py-1.5 mx-auto'/>
    </section>
  )
}

export default Testimonials