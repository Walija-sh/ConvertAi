import React, { useState, useEffect, useRef } from "react";
import HeaderPill from "../common/HeaderPill";
import { motion } from "motion/react";
import { TbCategory } from "react-icons/tb";
import { BsFolder2 } from "react-icons/bs";
import { HiOutlineUserGroup } from "react-icons/hi2";

/* ------------------ CONFIG ------------------ */

const DURATION = 5; 

/* ------------------ DATA ------------------ */

const cards = [
  {
    icon: TbCategory,
    title: "Categorize contacts",
    desc: "Monitor your team's productivity by viewing completed tasks and active projects.",
    image: "/Home/optimize.png",
    bg: "bg-white-2",
  },
  {
    icon: BsFolder2,
    title: "Organize meeting notes",
    desc: "Use detailed task views, checklists, and due dates to stay on top of your projects.",
    image: "/Home/WorkingCreate.png",
    bg: "bg-pastel-1",
  },
  {
    icon: HiOutlineUserGroup,
    title: "Collaborate in real time",
    desc: "Assign tasks, share notes, and engage in real-time discussions with your team.",
    image: "/Home/WorkingAdjust.png",
    bg: "bg-pastel-2",
  },
];

/* ------------------ CARD ------------------ */

const NoteCard = ({ data, active, onClick }) => {
  const Icon = data.icon;

  return (
    <article
      onClick={onClick}
      className={`pt-6 px-4 grid gap-3 text-black-2 cursor-pointer ${
        active ? "opacity-100" : "opacity-60"
      }`}
    >
      <div className="flex gap-3 items-center text-[20px]">
        <Icon />
        <h6 className="font-medium">{data.title}</h6>
      </div>

      <p className="text-[16px] lg:text-[17px] xl:text-[18px]">
        {data.desc}
      </p>

      {/* progress bar */}
      <div className="mt-6 h-[2px] w-full bg-gray-2/20 overflow-hidden relative">
        <motion.span
         key={active ? "active" : "inactive"} 
          className="absolute left-0 top-0 h-full w-full bg-primary origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: active ? 1 : 0 }}
          transition={{
            duration: active ? DURATION : 0,
            ease: "linear",
          }}
        />
      </div>

      
    </article>
  );
};

/* ------------------ MAIN ------------------ */

const NotesFeatures = () => {
  const [active, setActive] = useState(0);
const timeoutRef = useRef(null);

const startLoop = () => {
  clearTimeout(timeoutRef.current);

  timeoutRef.current = setTimeout(() => {
    setActive((prev) => (prev + 1) % cards.length);
  }, DURATION * 1000);
};

useEffect(() => {
  startLoop();
  return () => clearTimeout(timeoutRef.current);
}, [active]);


  const handleManualSelect = (i) => {
  clearTimeout(timeoutRef.current);
  setActive(i);
};


  const current = cards[active];

  return (
    <section className="py-[60px] px-[20px] grid gap-[40px] lg:pb-[100px] xl:py-[100px] xl:px-[32px] overflow-hidden relative">
      
      {/* header */}
      <div className="flex flex-col items-center gap-8 max-w-[500px] lg:max-w-[600px] mx-auto text-center">
        <HeaderPill text="Notes" />
        <div className="grid gap-4 text-black-2 text-balance">
          <h2 className="text-[28px] font-medium lg:text-[34px] xl:text-[36px]">
            Capture meeting notes & collaborate with ease
          </h2>
          <p className="text-[18px] lg:text-[19px] xl:text-xl">
            Organize all of your notes and contacts in one central place
          </p>
        </div>
      </div>

      {/* layout */}
      <div className="max-w-[500px] lg:max-w-[960px] mx-auto grid gap-8 lg:grid-cols-2">

        {/* cards */}
        <div>
          {cards.map((card, i) => (
            <NoteCard
              key={i}
              data={card}
              active={active === i}
              onClick={() => handleManualSelect(i)}
            />
          ))}
        </div>

        {/* image */}
        <div
          className={`border border-gray-2/20 rounded-[16px] overflow-hidden aspect-[1.3] ${current.bg}`}
        >
          <motion.div
            key={current.image}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="border-3 border-gray-2/20 rounded-xl aspect-[1.26] overflow-hidden mt-6 ml-6 lg:mt-10 lg:ml-10 -mr-2"
          >
            <img
              src={current.image}
              className="object-cover object-top-left h-full w-[106%]"
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NotesFeatures;
