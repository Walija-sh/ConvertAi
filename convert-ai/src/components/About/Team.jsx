import React from 'react'
import HeaderPill from '../common/HeaderPill'
import FlipTeamCard from './FlipTeamCard'
import Button from '../common/Button';
const teamData = [
  {
    name: "John Doe",
    role: "CEO",
    image: "/About/john.png",
    bio: "John is a visionary leader who loves turning ideas into reality. Fun fact: he once backpacked across Europe for three months!",
    link: "https://www.linkedin.com/"
  },
  {
    name: "Jane Smith",
    role: "CTO",
    image: "/About/jane.png",
    bio: "Jane is a tech whiz who thrives on solving complex problems. Fun fact: she can juggle five balls at once!",
    link: "https://www.linkedin.com/"
  },
  {
    name: "Emily Johnson",
    role: "Head of Marketing",
    image: "/About/emily.jpg",
    bio: "Emily is a creative marketer who brings brands to life with her unique flair. Fun fact: she has a collection of over 100 coffee mugs!",
    link: "https://www.linkedin.com/"
  },
  {
    name: "Michael Brown",
    role: "Sales Director",
    image: "/About/michael.jpg",
    bio: "Michael is a sales guru who loves building relationships with clients. Fun fact: he once won a hot dog eating contest!",
    link: "https://www.linkedin.com/"
  },
  {
    name: "Sarah Davis",
    role: "Customer Success Manager",
    image: "/About/sarah.png",
    bio: "Sarah is all about ensuring our customers are happy and thriving. Fun fact: she has an adorable pet parrot named Mango!",
    link: "https://www.linkedin.com/"
  },
  {
    name: "David Lee",
    role: "Product Manager",
    image: "/About/david.jpg",
    bio: "David is a product enthusiast who loves turning user feedback into features. Fun fact: he’s an amateur magician and performs at local events!",
    link: "https://www.linkedin.com/"
  },
  {
    name: "Lisa Green",
    role: "UX/UI Designer",
    image: "/About/lisa.jpg",
    bio: "Lisa is passionate about creating user-friendly designs that delight users. Fun fact: she once painted a mural in her neighborhood!",
    link: "https://www.linkedin.com/"
  },
  {
    name: "Tom White",
    role: "Data Analyst",
    image: "/About/tom.jpg",
    bio: "Tom is a data detective who loves uncovering insights from numbers. Fun fact: he can name all the countries in the world in under five minutes!",
    link: "https://www.linkedin.com/"
  },
  {
    name: "Rachel Adams",
    role: "HR Manager",
    image: "/About/rachel.png",
    bio: "Rachel is dedicated to building a positive workplace culture. Fun fact: she’s a certified yoga instructor and teaches classes on weekends!",
    link: "https://www.linkedin.com/"
  },
  {
    name: "Chris Black",
    role: "Software Engineer",
    image: "/About/chris.jpg",
    bio: "Chris is a coding wizard who loves tackling technical challenges. Fun fact: he plays the guitar in a local band!",
    link: "https://www.linkedin.com/"
  },
  {
    name: "Anna Taylor",
    role: "Content Strategist",
    image: "/About/anna.png",
    bio: "Anna is a wordsmith who crafts compelling stories for our brand. Fun fact: she once hiked to the top of Mount Kilimanjaro!",
    link: "https://www.linkedin.com/"
  },
  {
    name: "Mark Wilson",
    role: "Community Manager",
    image: "/About/mark.jpg",
    bio: "Mark is all about connecting with our users and building community. Fun fact: he’s an avid board game collector with over 200 games!",
    link: "https://www.linkedin.com/"
  }
];

const Team = () => {

  return (
    <section className='py-[60px] px-5 grid gap-[40px] max-w-[1200px] mx-auto lg:py-[80px] lg:px-[28px] lg:gap-[80px] xl:py-[80px] xl:px-[32px] xl:gap-[60px]'>

         {/* header */}
      <div className="flex flex-col items-center gap-8 max-w-[720px]  mx-auto text-center">
        <HeaderPill text="Team" />
        <div className="grid gap-4 text-black-2 text-balance">
          <h2 className="text-[28px] font-medium lg:text-[34px] xl:text-[36px]">
           Meet the team
          </h2>
          <p className="text-[18px] lg:text-[19px] xl:text-xl">
           Hover over or click on the cards to learn more about each team member.
          </p>
        </div>
      </div>
      {/* cards */}
      <div className="flex flex-wrap justify-center gap-4 max-w-[1136px] mx-auto">
         {teamData.map((member, index) => (
        <FlipTeamCard key={index} {...member} />
      ))}
      </div>
      <Button text='Join our team' to='/careers' variant='primary' shadow={true} className='w-fit mx-auto py-1.5 px-8'/>
    </section>
  )
}

export default Team