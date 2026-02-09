import React, { useState, useMemo, useEffect } from "react";
import HeaderPill from "../common/HeaderPill";
import JobCard from "./JobCard";
import { jobsData } from "./jobsData";
import { HiOutlineChevronDown } from "react-icons/hi";

const OpenPositions = () => {

  const [team, setTeam] = useState("allteam");
  const [office, setOffice] = useState("alloffice");
  const [type, setType] = useState("alltype");

  const filteredJobs = useMemo(() => {
    return jobsData.filter(job => {
      const teamMatch = team === "allteam" || job.team === team;
      const officeMatch = office === "alloffice" || job.office === office;
      const typeMatch = type === "alltype" || job.type === type;
      return teamMatch && officeMatch && typeMatch;
    });
  }, [team, office, type]);

  return (
    <section className='py-[60px] px-5 grid gap-10 lg:py-[80px] lg:px-7 lg:gap-[80px] xl:px-8 xl:gap-[40px] w-full max-w-[800px] mx-auto' id='openpositions'>
      
      {/* Header */}
      <div className="flex flex-col items-center gap-8 max-w-[720px] mx-auto text-center">
        <HeaderPill text='Open positions' />
        <div className="grid gap-4 text-balance text-black-2">
          <h2 className="text-[28px] font-medium lg:text-[34px] xl:text-[36px]">
            Job openings
          </h2>
          <p className="text-[18px] lg:text-[19px] xl:text-xl">
            See all open positions across different offices.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-2.5 mb-2.5 text-black-2 text-[14px] font-medium">

<div className="relative w-fit">

  <select
    value={team}
    onChange={(e) => setTeam(e.target.value)}
    className="flex-none w-fit rounded-lg py-2 pl-3 px-8 border border-gray-2 focus:outline-none focus:border-2 focus:border-black-2 cursor-pointer appearance-none relative"
  >
  
    <option value="allteam">All Team</option>
    <option value="design">Design</option>
    <option value="engineering">Engineering</option>
    <option value="sales">Sales</option>
    <option value="support">Support</option>
    <option value="operations">Operations</option>
    <option value="general">General</option>
  </select>
    <HiOutlineChevronDown className="absolute top-[50%] right-[10px] pointer-events-none translate-y-[-50%]" />
</div>
<div className="relative w-fit">
 <select
    value={office}
    onChange={(e) => setOffice(e.target.value)}
    className="flex-none w-fit rounded-lg py-2 pl-3 px-8 border border-gray-2 focus:outline-none focus:border-2 focus:border-black-2 cursor-pointer appearance-none"
  >
    <option value="alloffice">All Office</option>
    <option value="sanfrancisco">San Francisco</option>
    <option value="newyork">New York</option>
    <option value="london">London</option>
    <option value="remote">Remote</option>
  </select>
    <HiOutlineChevronDown className="absolute top-[50%] right-[10px] pointer-events-none translate-y-[-50%]" />
</div>
<div className="relative w-fit">
 <select
    value={type}
    onChange={(e) => setType(e.target.value)}
    className="flex-none w-fit rounded-lg py-2 pl-3 px-8 border border-gray-2 focus:outline-none focus:border-2 focus:border-black-2 cursor-pointer appearance-none"
  >
    <option value="alltype">All Type</option>
    <option value="fulltime">Full Time</option>
    <option value="parttime">Part Time</option>
  </select>
    <HiOutlineChevronDown className="absolute top-[50%] right-[10px] pointer-events-none translate-y-[-50%]" />
</div>

 

 

</div>


      {/* Cards */}
      <div className="grid gap-6 w-full max-w-[720px] mx-auto">
        {filteredJobs.map((job, i) => (
          <JobCard key={i} job={job} />
        ))}
      </div>

    </section>
  );
};

export default OpenPositions;
