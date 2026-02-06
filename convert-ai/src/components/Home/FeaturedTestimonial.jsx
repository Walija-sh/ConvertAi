
import { HiOutlineStar } from "react-icons/hi2";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";


const FeaturedTestimonial = () => {
    const SectRef = useRef(null);

const { scrollYProgress } = useScroll({
  target: SectRef,
  offset: ["start 80%", "center center"] 
});

const scale = useTransform(scrollYProgress, [0, 1], [1, 2]);


  return (
    <section ref={SectRef} className='relative overflow-hidden'>
        <motion.div 
        style={{ scale }}
        
        className="bg-pastel-1 absolute w-full h-full inset-0 z-1 lg:w-[720px] lg:rounded-full lg:h-[720px] lg:top-[50%] lg:left-[50%] lg:translate-y-[-50%] lg:translate-x-[-50%]"></motion.div>
        <div className="flex flex-col max-w-[720px] mx-auto gap-8 py-[60px]  px-5 lg:py-[80px] lg:px-8 xl:py-[100px] z-50 relative text-black-2">
            {/*stars  */}
            <div className="flex items-center justify-center gap-1 text-primary text-2xl">
                <HiOutlineStar />
                <HiOutlineStar />
                <HiOutlineStar />
                <HiOutlineStar />
                <HiOutlineStar />
            </div>
            <h4 className="text-xl lg:text-[22px] xl:text-2xl font-medium italic text-center text-balance">
                "Convert is incredibly easy to use. The intuitive interface and AI-powered optimization have streamlined our ad management, significantly improving our ROI."
            </h4>
            {/* author */}
            <div className="flex flex-col text-center items-center gap-4">
                <div className="rounded-full overflow-hidden w-12 h-12">
                    <img src="/Home/eric.jpg" className='w-full h-full object-cover' alt="" />
                </div>
                <div className="grid gap-1 ">
                    <p className="text-[18px] lg:text-[19px] xl:text-[20px]">
                        Eric Rosenberg
                    </p>
                    <p className="text-[16px] lg:text-[17px] xl:text-[18px]">
                        Marketing manager at Zero
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FeaturedTestimonial