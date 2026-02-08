import React, { useState, useEffect, useRef } from 'react' 
import { Link } from 'react-router-dom'
import { motion ,useScroll, useMotionValueEvent} from "motion/react";
import { IoChevronDownOutline,IoClipboardOutline } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import Button from '../components/common/Button';
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
    const navRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isAllPagesOpen, setIsAllPagesOpen] = useState(false);
  const { scrollY } = useScroll();
  
  // Create refs for the dropdown and trigger
  const dropdownRef = useRef(null);
  const triggerRef = useRef(null);


useMotionValueEvent(scrollY, "change", (current) => {
  const previous = scrollY.getPrevious() || 0;

  // Ignore scroll while mobile menu or dropdown is open
  if (isOpen || isAllPagesOpen) return;

  // Hide navbar when scrolling down
  if (current > previous && current > 180) {
    setHidden(true);
  } else {
    setHidden(false);
  }
});




  // Handle mouse enter/leave for dropdown
  const handleMouseEnter = () => {
    setIsAllPagesOpen(true);
  };

  const handleMouseLeave = () => {
    // Add a small delay to prevent immediate closing when moving cursor
    setTimeout(() => {
      // Check if mouse is still over trigger or dropdown
      const isMouseOverTrigger = triggerRef.current?.matches(':hover');
      const isMouseOverDropdown = dropdownRef.current?.matches(':hover');
      
      if (!isMouseOverTrigger && !isMouseOverDropdown) {
        setIsAllPagesOpen(false);
      }
    }, 50);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target) &&
        triggerRef.current && 
        !triggerRef.current.contains(event.target)
      ) {
        setIsAllPagesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
    document.body.style.paddingRight = '0px'; // Prevent layout shift
  } else {
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
  }
  
  return () => {
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
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

  // Dropdown animation variants
  const dropdownVariants = {
    open: { 
      opacity: 1, 
      scale: 1, 
      pointerEvents: "auto",
      transition: { 
        duration: 0.2,
        ease: "easeOut" 
      }
    },
    closed: { 
      opacity: 0, 
      scale: 0.95, 
      pointerEvents: "none",
      transition: { 
        duration: 0.15,
        ease: "easeIn" 
      }
    }
  };

  return (
    <nav ref={navRef} className="relative">

    <motion.div   
      variants={navVariants}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="bg-white-1 lg:border-b lg:border-b-black-2/20 fixed w-full top-0 z-150"
    >
      <div className="grid border-b border-black-1 max-w-7xl mx-auto lg:border-0 lg:px-7.5 lg:py-3 lg:flex lg:items-center lg:justify-between">
        <div className="flex items-center justify-between px-5 py-4 lg:p-0">
          <Link to='/' className="flex items-center gap-1 focus:outline-none">
            <img src='/logo.png' alt="" className='max-w-8' />
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
            <Button text='Log in' fullWidth={true} to='#' />
            <Button text='Sign up' variant='primary' fullWidth={true} to='#'/>
          </div>
        </motion.div>
        
        {/* nav lg */}
        <div className="hidden lg:flex items-center gap-4 relative">
          <div className="flex items-center text-black-2 text-lg">
            <Link to="/features" className='px-3 rounded-[99px] py-2 transition-all duration-300 ease-in hover:bg-primary-hover'>Features</Link>
            <Link to="/pricing" className='px-3 rounded-[99px] py-2 transition-all duration-300 ease-in hover:bg-primary-hover'>Pricing</Link>
            <Link to="/about" className='px-3 rounded-[99px] py-2 transition-all duration-300 ease-in hover:bg-primary-hover'>About</Link>
            <Link to="/contact" className='px-3 rounded-[99px] py-2 transition-all duration-300 ease-in hover:bg-primary-hover'>Contact</Link>
            <Link to="/blog" className='px-3 rounded-[99px] py-2 transition-all duration-300 ease-in hover:bg-primary-hover'>Blog</Link>
            
            {/* All pages dropdown trigger */}
            <div 
              ref={triggerRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="flex items-center gap-1 cursor-pointer group px-3 rounded-[99px] py-2 transition-all duration-300 ease-in hover:bg-primary-hover relative"
            >
              <p>All pages</p>
              <IoChevronDownOutline 
                className={`text-xl transition-all duration-150 ease-in-out ${isAllPagesOpen ? 'rotate-180' : ''}`} 
              />
            </div>
            
            {/* Dropdown menu */}
            <motion.div
              ref={dropdownRef}
              variants={dropdownVariants}
              animate={isAllPagesOpen ? "open" : "closed"}
              initial="closed"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="absolute top-[130%] right-0 bg-white-1 p-5 w-[500px] border-gray-3 border rounded-xl shadow-lg"
            >
              <div className="grid grid-cols-2 items-start gap-x-4 text-black-2 text-lg">
                {menuItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.route}
                    onClick={() => setIsAllPagesOpen(false)}
                    className="flex items-center gap-3 group/link px-3 rounded-[99px] py-1.5 transition-all duration-300 ease-in hover:bg-primary-hover"
                  >
                    <item.icon className="text-primary text-xl shrink-0" />
                    <span className="font-medium text-lg">{item.label}</span>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
          
          <div className="flex flex-row gap-2.5">
            <Button text='Log in' to='#' />
            <Button text='Sign up' variant='primary' to='#' />
          </div>
        </div>
      </div>
    </motion.div>
    </nav>
  )
}

export default Navbar;