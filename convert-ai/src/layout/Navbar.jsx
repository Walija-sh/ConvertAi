import React, { useState, useEffect } from 'react' // Add useEffect import
import { Link } from 'react-router-dom'
import assets from '../assets/assets.js'
import { motion ,useScroll, useMotionValueEvent} from "framer-motion";
import { IoChevronDownOutline,IoClipboardOutline } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import Button from '../components/ui/Button.jsx';
   import { 
  HiOutlineHome, 
  HiOutlineSparkles, 
  HiOutlineCurrencyDollar, 
  HiOutlinePhone, 
  HiOutlineUsers,  
  HiOutlineDocumentText, 
  HiOutlineFolder, 
  HiOutlineAcademicCap,
  HiOutlineLink,
  HiOutlineQuestionMarkCircle,
  HiOutlineScale,
  HiOutlineShieldCheck,
  HiOutlineInformationCircle,
  HiOutlineExclamationTriangle
} from 'react-icons/hi2'; 
import { BsChatDots } from "react-icons/bs";

const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false);
   const [hidden, setHidden] = useState(false);
const { scrollY } = useScroll();

useMotionValueEvent(scrollY, "change", (current) => {
  const previous = scrollY.getPrevious() || 0;
  if (current > previous && current > 80) {
    
    setHidden(true);
  } else {
    setHidden(false);
  }
});

   




const menuItems = [
  { label: "Homepage", icon: HiOutlineHome, route: "/" },
  { label: "Careers", icon: HiOutlineAcademicCap, route: "/careers" },
  { label: "Features", icon: HiOutlineSparkles, route: "/features" },
  { label: "Changelog", icon: IoClipboardOutline, route: "/changelog" },
  { label: "Pricing", icon: HiOutlineCurrencyDollar, route: "/pricing" },
  { label: "Integrations", icon: HiOutlineLink, route: "/integrations" },
  { label: "Contact", icon: HiOutlinePhone, route: "/contact" },
  { label: "Testimonials", icon: BsChatDots, route: "/wall-of-love" },
  { label: "About us", icon: HiOutlineUsers, route: "/about" },
  { label: "FAQ", icon: HiOutlineQuestionMarkCircle, route: "/faq" },
  { label: "Blogs", icon: FaRegEdit, route: "/blog" },
  { label: "Terms & Conditions", icon: HiOutlineScale, route: "/terms-of-service" },
  { label: "Blog post", icon: HiOutlineDocumentText, route: "#" },
  { label: "Privacy Policy", icon: HiOutlineShieldCheck, route: "/privacy-policy" },
  { label: "Docs", icon: HiOutlineFolder, route: "#" },
  { label: "Cookie Policy", icon: HiOutlineInformationCircle, route: "/cookie-policy" },
  { label: "Docs article", icon: HiOutlineClipboardDocumentList, route: "#" },
  { label: "404", icon: HiOutlineExclamationTriangle, route: "#" },
];

   useEffect(() => {
     if (isOpen) {
      
       document.body.style.overflow = 'hidden';
     } else {
      
       document.body.style.overflow = 'auto';
     }
     
     
     return () => {
       document.body.style.overflow = 'auto';
     };
   }, [isOpen]); 
   
  
   useEffect(() => {
     const handleResize = () => {
     
       if (window.innerWidth >= 1024) { 
         setIsOpen(false);
         document.body.style.overflow = 'auto';
       }
     };
     
     window.addEventListener('resize', handleResize);
     return () => window.removeEventListener('resize', handleResize);
   }, []);

   const lineVariants = {
    top: { rotate: 45, y: 5 },
    bottom: { rotate: -45, y: -5 },
    initial: { rotate: 0, y: 0, opacity: 1 },
  };
  
  const menuVariants = {
    open: { height: "100vh", paddingBlock: '20px', transition: { duration: 0.3 } },
    closed: { height: 0, paddingBlock: '0px', transition: { duration: 0.3 } },
  };
  const navVariants = {
  visible: { y: 0 },
  hidden: { y: "-100%" },
};


  return (
    <motion.div   
    variants={navVariants}
  animate={hidden ? "hidden" : "visible"}
  transition={{ duration: 0.35, ease: "easeOut" }}
  className="bg-white-1 lg:border-b lg:border-b-black-2/20 sticky top-0 z-50">
      <div className="grid border-b border-black-1 max-w-7xl mx-auto lg:border-0 lg:px-7.5 lg:py-3 lg:flex lg:items-center lg:justify-between">
      <div className="flex items-center justify-between px-5 py-4 lg:p-0">
        <Link to='/' className="flex items-center gap-1">
        <img src={assets.logo} alt="" className='max-w-8' />
        <p className='text-black text-xl font-medium'>Convert</p>
        </Link>
        
        <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer flex flex-col gap-2 justify-center items-center lg:hidden">
          <motion.span
              className="w-5 h-0.5 bg-gray-1 block"
              variants={lineVariants}
              animate={isOpen ? "top" : "initial"}
            />
            
            <motion.span
              className="w-5 h-0.5 bg-gray-1 block"
              variants={lineVariants}
              animate={isOpen ? "bottom" : "initial"}
            />
        </div>
      </div>
      {/* nav menu sm */}
      <motion.div 
        variants={menuVariants} 
        animate={isOpen ? "open" : "closed"}  
        className="z-100 flex flex-col bg-white-1 gap-8 px-5 overflow-y-auto lg:hidden" 
      >
        <div className="flex flex-col items-start gap-4 text-black-2 font-medium text-xl lg:flex-row">
          <Link to='/features' onClick={() => setIsOpen(false)} className='w-full inline-block'>
            Features
          </Link>
          <Link to='/pricing' onClick={() => setIsOpen(false)} className='w-full inline-block'>
            Pricing
          </Link>
          <Link to='/about' onClick={() => setIsOpen(false)} className='w-full inline-block'>
            About
          </Link>
          <Link to='/contact' onClick={() => setIsOpen(false)} className='w-full inline-block'>
            Contact
          </Link>
          <Link to='/blog' onClick={() => setIsOpen(false)} className='w-full inline-block'>
            Blog
          </Link>
        </div>
        <div className="flex flex-col gap-2.5 ">
          
          <Button text='Log in' fullWidth={true} />
          <Button text='Sign up' variant='primary' fullWidth={true}/>
        </div>
      </motion.div>
      {/* nav lg */}
      <div className="hidden lg:flex items-center gap-4 relative">
       <div className="flex items-center  text-black-2  text-lg">
            <Link to="/features" className='px-3 rounded-[99px] py-2 transition-all duration-300 ease-in hover:bg-primary-hover'>Features</Link>
            <Link to="/pricing" className='px-3 rounded-[99px] py-2 transition-all duration-300 ease-in hover:bg-primary-hover'>Pricing</Link>
            <Link to="/about" className='px-3 rounded-[99px] py-2 transition-all duration-300 ease-in hover:bg-primary-hover'>About</Link>
            <Link to="/contact" className='px-3 rounded-[99px] py-2 transition-all duration-300 ease-in hover:bg-primary-hover'>Contact</Link>
            <Link to="/blog" className='px-3 rounded-[99px] py-2 transition-all duration-300 ease-in hover:bg-primary-hover'>Blog</Link>
            <div className=" flex items-center gap-1 cursor-pointer group px-3 rounded-[99px] py-2 transition-all duration-300 ease-in hover:bg-primary-hover">
              <p>All pages</p>
              <IoChevronDownOutline className='text-xl transition-all duration-150 ease-in-out group-hover:scale-y-[-1]' />
              <div className="bg-white-1 p-5 w-[500px] absolute top-[130%] right-0 opacity-0 group-hover:opacity-100  grid grid-cols-2 items-start gap-x-4 text-black-2 text-lg border-gray-3 border rounded-xl">
                {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.route}
            className="flex items-center gap-3   group/link  px-3 rounded-[99px] py-1.5 transition-all duration-300 ease-in hover:bg-primary-hover"
          >
            
            <item.icon className="text-primary text-xl shrink-0" />
            
            
            <span className="font-medium text-lg">{item.label}</span>
          </Link>
        ))}
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-2.5 ">
          
          <Button text='Log in'  />
          <Button text='Sign up' variant='primary' />
        </div>
      </div>
      </div>
    </motion.div>
  )
}

export default Navbar