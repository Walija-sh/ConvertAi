import React, { useState } from 'react';
import { motion } from 'motion/react';
import { FiPlus } from 'react-icons/fi';

// Reusable Accordion Item
const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-[1px] border-gray-2/20 rounded-[12px] bg-linear-to-b from-pastel-3/30 to-pastel-3/80 py-5 px-6   text-black-2 grid">
      {/* Question Header */}
      <div
        className="flex gap-6 items-center justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-[16px] lg:text-[17px] xl:text-[18px]">{title}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-gray-5 text-xl lg:text-2xl"
        >
          <FiPlus />
        </motion.div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 ,marginTop: isOpen ? '20px' : 0}}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <p className="text-[14px] lg:text-[15px] xl:text-[16px] mt-2">
          {content}
        </p>
      </motion.div>
    </div>
  );
};

export default AccordionItem;