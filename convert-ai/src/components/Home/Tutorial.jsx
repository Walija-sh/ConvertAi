import React from 'react'
import HeaderPill from '../common/HeaderPill'
import Button from '../common/Button'

const Tutorial = () => {
  return (
    <section className='mx-auto pt-[60px] px-5 pb-[40px] grid gap-10 lg:pt-[80px] lg:px-6'>
        {/* header */}
      <div className="px-5 flex flex-col items-center gap-8 max-w-[600px]  mx-auto text-center">
        <HeaderPill text="Template tutorials" />
        <div className="grid gap-4 text-black-2 text-balance">
          <h2 className="text-[28px] font-medium lg:text-[34px] xl:text-[36px]">
          We will guide you every step of the way
          </h2>
          <p className="text-[18px] lg:text-[19px] xl:text-xl">
           Customize this website template with step-by-step video tutorials.
          </p>
        </div>
      </div>
      <article className="rounded-[20px] overflow-hidden w-full max-w-[800px] mx-auto">
  <div className="relative pb-[56.25%] w-full h-0"> 
    <iframe
  className="absolute top-0 left-0 w-full h-full"
  src="https://www.youtube.com/embed/yL0fM7t8fr8?autoplay=0&modestbranding=1&rel=0&controls=1"
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowFullScreen
></iframe>

  </div>
</article>

      {/* button */}
      <Button to='#' variant='primary' text='See tutorials' shadow={true} className='py-1.5 px-8 w-fit mx-auto'/>
    </section>
  )
}

export default Tutorial