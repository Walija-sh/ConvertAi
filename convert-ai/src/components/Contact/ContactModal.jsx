import React from "react";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { motion } from "motion/react";

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0 }
};

const ContactModal = () => {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: 0.12 }
        }
      }}
      className="absolute inset-[1px] z-20 bg-pastel-1 rounded-[11px] flex flex-col items-center justify-center gap-8 p-8"
    >
      <motion.div variants={fadeUp}>
        <IoCheckmarkCircleSharp className="text-primary text-3xl" />
      </motion.div>

      <motion.div
        variants={fadeUp}
        className="grid gap-4 text-center text-black-2 text-balance"
      >
        <h6 className="text-xl font-medium">
          Thank you for contacting our team
        </h6>
        <p className="text-[16px] lg:text-[17px] xl:text-[18px] text-gray-8">
          We successfully received your message and our team will reach out to
          you shortly.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default ContactModal;
