
import Button from '../common/Button'
import HeaderPill from '../common/HeaderPill'
import TestimonialsContainer from './TestimonialsContainer'

const TestimonialHero = () => {
  return (
    <section className='pt-[124px] pb-[28px] px-5 grid gap-15 lg:pb-[12px] lg:pt-[144px] xl:px-8 xl:pt-[100px] xl:pb-[12px] overflow-hidden relative z-10'>
         <div 
        className="absolute hidden lg:block aspect-square rounded-full w-[800px]  bg-radial from-pastel-3/20 to-pastel-3/60 top-10 left-[50%]  translate-x-[-50%] z-1"></div>
        {/* header */}
<div
className="grid gap-10 max-w-[600px] mx-auto place-content-center relative z-10 text-center">
  <div className="flex flex-col items-center gap-8 ">
    <HeaderPill text="The Wall of Love" />

 <div className="text-black-2 grid gap-4 text-balance">
          <h1 className="text-[32px] lg:text-[40px] xl:text-[48px]">See how Convert helps companies grow</h1>
          <p   className='text-[18px] lg:text-[19px] xl:text-[20px]'>Don't just take our word for it. See what our customers have to say about our products</p>
        </div>
  </div>
  <Button  text='Get started' to='/' variant='primary' shadow={true} className='py-1.5 px-8 w-fit mx-auto'/>
</div>
 {/* cards */}
 <TestimonialsContainer/>
    </section>
  )
}

export default TestimonialHero