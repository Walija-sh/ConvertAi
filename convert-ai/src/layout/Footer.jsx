import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const footerLinks = [
  {
    header: 'Product',
    links: [
      { title: 'Features', path: '/features' },
      { title: 'Pricing', path: '/pricing' },
      { title: 'Integrations', path: '/integrations' },
      { title: 'Changelog', path: '/changelog' },
    ],
  },
  {
    header: 'Resources',
    links: [
      { title: 'API Docs', path: '#' },
      { title: 'Blogs', path: '/blog' },
      { title: 'Blog Post', path: '#' },
      { title: 'FAQs', path: '/faq' },
    ],
  },
  {
    header: 'Company',
    links: [
      { title: 'About', path: '/about' },
      { title: 'Careers', path: '/careers' },
      { title: 'Contact', path: '/contact' },
      { title: 'Wall of Love', path: '/wall-of-love' },
    ],
  },
  {
    header: 'Template',
    links: [
      { title: 'Tutorials', path: '#' },
      { title: 'Review', path: '#' },
      { title: 'All Templates', path: '#' },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-black-2 text-white py-10 px-5 lg:py-15 lg:px-8">
      <div className="grid gap-10 max-w-[1064px] mx-auto">
        {/* Top Section */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          {/* Logo & Description */}
          <div className="grid gap-4 lg:max-w-[300px]">
            <Link to="/" className="flex items-center gap-1">
              <img src="/logo.png" alt="Convert Logo" className="max-w-8" />
              <p className="text-xl font-medium">Convert</p>
            </Link>
            <p className="text-[14px] lg:text-[15px] xl:text-[16px]">
              Best-in-class CRM for startups and small businesses.
            </p>
          </div>

          {/* Link Sections */}
          <div className="grow flex flex-wrap gap-5 items-start justify-between  xl:justify-end">
            {footerLinks.map((section, idx) => (
              <div key={idx} className="grid gap-3 min-w-[120px] shrink-0">
                <h3 className="text-xl font-medium">{section.header}</h3>
                {section.links.map((link, i) => (
                  <Link
                    key={i}
                    to={link.path}
                    className="text-[18px] lg:text-[15px] xl:text-[16px]"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
        {/* bottom */}
        <div className="grid gap-3">
          {/* socials */}
          <div className="flex items-center gap-3 text-[16px] lg:text-[20px] text-white">
            <a href="#" className='inline-block cursor-pointer'>
              <FaTwitter />
            </a>
            <a href="#" className='inline-block cursor-pointer'>
              <FaYoutube />
            </a>
            <a href="#" className='inline-block cursor-pointer'>
              <FaFacebook />
            </a>
          </div>
          <hr className='border-[1px] border-gray-6 w-full' />
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <p className="text-[14px] lg:text-[15px] xl:text-[16px] ">Copyright &copy; Firaworks LLC. All rights reserved</p>
            <div className="flex flex-wrap items-center gap-8">
              <Link to='terms-of-service' className='text-[14px] lg:text-[15px] xl:text-[16px] cursor-pointer inline'>Terms</Link>
              <span className="h-[18px] lg:h-[21px]  xl:h-[22px] shrink-0 w-[1px] bg-gray-6 inline-block"></span>
              <Link to='privacy-policy' className='text-[14px] lg:text-[15px] xl:text-[16px]  cursor-pointer inline'>Privacy</Link>
              <span className="h-[18px] lg:h-[21px] xl:h-[22px] shrink-0 w-[1px] bg-gray-6 inline-block"></span>
              <Link to='cookie-policy' className='text-[14px] lg:text-[15px] xl:text-[16px]  cursor-pointer inline'>Cookie Policy</Link>
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
