import React from 'react'

const MoreFeatureCard = ({ title, description, image, bgColor }) => {
  return (
    <article className="p-8 border-[1px] border-gray-2/20 rounded-2xl grid gap-8">
      {/* content */}
      <div className="grid gap-3">
        <h4 className="text-[20px] lg:text-[22px] xl:text-[24px]">{title}</h4>
        <p className="text-[16px] lg:text-[17px] xl:text-[18px]">{description}</p>
      </div>

      {/* image */}
      <div className={`rounded-[16px] overflow-hidden aspect-[1.333] ${bgColor} h-full`}>
        <div className="border-2 border-gray-2/20 rounded-xl aspect-[1.26] overflow-hidden mt-5 ml-5 -mr-2">
          <img
            src={image}
            alt={title}
            className="object-cover object-top-left h-full w-[106%]"
          />
        </div>
      </div>
    </article>
  )
}

export default MoreFeatureCard
