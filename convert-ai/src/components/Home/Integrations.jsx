import React from 'react'
import HeaderPill from '../common/HeaderPill'
import Button from '../common/Button'
import VerticalIconCarousel from "./VerticalIconCarousel";

const col1 = [
  "/Home/car1Icon1.svg",
  "/Home/car1Icon2.svg",
  "/Home/car1Icon3.svg",
];

const col2 = [
  "/Home/car2Icon1.svg",
  "/Home/car2Icon2.svg",
  "/Home/car2Icon3.svg",
];

const col3 = [
  "/Home/car3Icon1.svg",
  "/Home/car3Icon2.svg",
  "/Home/car3Icon3.svg",
];

const col4 = [
  "/Home/car4Icon1.svg",
  "/Home/car4Icon2.png",
  "/Home/car4Icon3.svg",
];


const Integrations = () => {
  return (
    <section className='max-w-[500px] lg:max-w-[1064px] mx-auto py-[60px] px-4 grid gap-8 lg:grid-cols-2 items-center lg:py-[80px] lg:px-[28px] lg:gap-5 xl:py-[100px] xl:px-[40px]'>
        {/* content */}
        <div className="grid gap-8">
             <HeaderPill text="Integrations" />
             <div className="grid gap-5 text-black-2 text-balance">
          <h2 className="text-[28px] font-medium lg:text-[34px] xl:text-[36px]">
            CRM integrations with Linkedin, Zapier & more
          </h2>
          <p className="text-[16px] lg:text-[17px] xl:text-[18px]">
            Convert integrates with many tools thanks to the following integrations: API, Webhooks, Zapier, Pabbly, and more.
          </p>
        </div>
        <Button text='See integrations' variant='secondary' to='/integrations' className='px-8 w-fit py-2'/>
        </div>
        {/* icons */}
        <div className="overflow-hidden rounded-[20px] bg-pastel-1 min-h-[320px] w-full py-5 px-4 flex justify-around relative">
          <div className="pointer-events-none absolute top-5 left-0 w-full h-5 bg-gradient-to-b from-pastel-1 to-transparent z-10" />
          <div className="pointer-events-none absolute bottom-5 left-0 w-full h-10 bg-gradient-to-t from-pastel-1 to-transparent z-10" />


  <VerticalIconCarousel icons={col1} direction="up" />
  <VerticalIconCarousel icons={col2} direction="down" />
  <VerticalIconCarousel icons={col3} direction="up" />
  <VerticalIconCarousel icons={col4} direction="down" />

</div>

    </section>
  )
}

export default Integrations