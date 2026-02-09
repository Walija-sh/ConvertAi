import { Link } from "react-router-dom";
import { IoPeopleOutline } from "react-icons/io5";
import { HiOutlineBuildingOffice, HiOutlineCalendarDays } from "react-icons/hi2";
import { useState } from "react";
import {motion} from 'motion/react'

const JobCard = ({ job }) => {
      const [isHovered, setIsHovered] = useState(false);
      const OFFICE_DISPLAY_MAP = {
  sanfrancisco: "San Francisco",
  newyork: "New York",
  london: "London",
  remote: "Remote",
};

  return (
    <a  href={job.link} className="block" 
    onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <article  className="border-[1px] border-gray-9 rounded-xl position-shadow grid gap-5 p-8">
        
        <div className="grid gap-3">
            <div className="overflow-hidden h-6">

            <motion.h6
          className='flex flex-col gap-1 text-xl font-medium'
          animate={{ y: isHovered ? -28 : 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          <span className='h-6'>
          {job.title}
          </span>
          <span className='h-6'>
           {job.title}
          </span>
        </motion.h6>
            </div>
          <p className="text-[16px] lg:text-[17px] xl:text-[18px]">
            {job.desc}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-[14px] lg:text-[15px] xl:text-[16px]">
          
          <div className="flex items-center gap-[6px]">
            <IoPeopleOutline className="text-primary text-[16px]" />
            <p className="capitalize">{job.team}</p>
          </div>

          <div className="flex items-center gap-[6px]">
            <HiOutlineBuildingOffice className="text-primary text-[16px]" />
            <p className="capitalize">{OFFICE_DISPLAY_MAP[job.office] || job.office}</p>
          </div>

          <div className="flex items-center gap-[6px]">
            <HiOutlineCalendarDays className="text-primary text-[16px]" />
            <p className="capitalize">
              {job.type === "fulltime" ? "Full time" : "Part time"}
            </p>
          </div>

        </div>
      </article>
    </a>
  );
};

export default JobCard;
