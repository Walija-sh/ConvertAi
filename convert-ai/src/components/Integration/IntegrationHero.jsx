import React from 'react'
import HeaderPill from '../common/HeaderPill'
import Button from '../common/Button'
import VerticalIconCarousel from '../common/VerticalIconCarousel';
const col1 = [
  "/intercom.svg",
  "/zendesk.svg",
  "/trello.svg",
];

const col2 = [
  "/linear.svg",
  "/slack.svg",
  "/linkedin.svg",
];

const col3 = [
  "/retool.svg",
  "/peopleai.svg",
  "/make.svg",
];

const col4 = [
  "/mapbox.svg",
  "/pabbly.png",
  "/zapier.svg",
];
const IntegrationHero = () => {
    
  return (
    <section className='py-[60px] px-5 grid gap-12 lg:py-[80px] lg:px-8 xl:pt-[100px]'>
        {/* header */}
<div
className="grid gap-10 max-w-[600px] mx-auto place-content-center relative z-10 text-center">
  <div className="flex flex-col items-center gap-8 ">
    <HeaderPill text="Third-party integrations" />

 <div className="text-black-2 grid gap-4 text-balance">
          <h1 className="text-[32px] lg:text-[40px] xl:text-[48px]">Connect over 6000+ tools to Convert for free</h1>
          <p   className='text-[18px] lg:text-[19px] xl:text-[20px]'>Convert integrates with hundreds of third-party apps for you to automate your workflows</p>
        </div>
  </div>
  <Button  text='Get started' to='/' variant='primary' shadow={true} className='py-1.5 px-8 w-fit mx-auto'/>
</div>
{/* vertical carousel */}
        <div className="overflow-hidden rounded-[20px] bg-linear-to-b from-pastel-2 to-pastel-2/0 min-h-[400px] w-full  px-2.5 flex justify-around relative max-w-[800px] mx-auto">
          


  <VerticalIconCarousel icons={col1} direction="up" h='400px' />
  <VerticalIconCarousel icons={col2} direction="down" h='400px'/>
  <VerticalIconCarousel icons={col3} direction="up" h='400px'/>
  <VerticalIconCarousel icons={col4} direction="down" h='400px'/>

</div>
    </section>
  )
}

export default IntegrationHero