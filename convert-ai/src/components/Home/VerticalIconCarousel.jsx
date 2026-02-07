import { motion } from "motion/react";

const VerticalIconCarousel = ({ icons = [], direction = "up", speed = 7 }) => {
  const loopIcons = [...icons, ...icons];
  const isUp = direction === "up";

  return (
    <div className="overflow-hidden h-[320px] flex flex-col items-center ">
      <motion.div
        initial={{ y: isUp ? 0 : "-50%" }}   
        animate={{ y: isUp ? "-50%" : 0 }}   
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
        className="flex flex-col gap-10"
      >
        {loopIcons.map((icon, i) => (
          <div
            key={i}
            className="bg-white rounded-full flex items-center justify-center w-14.5 h-14.5"
          >
            <img src={icon} className="w-[28px] object-contain" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default VerticalIconCarousel;
