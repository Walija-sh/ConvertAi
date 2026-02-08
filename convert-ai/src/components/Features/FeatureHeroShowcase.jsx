import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

const FEATURES = [
  {
    img: "/Feature/leadcapture.png",
    content: {
      sm: {
        title: "Email",
        text: "Monitor your team's productivity by viewing completed tasks and active projects."
      },
      lg: {
        title: "Lead capture",
        text: "Monitor your team's productivity by viewing completed tasks and active projects. "
      }
    }
  },
  {
    img: "/Feature/smartsegment.png",
    content: {
      sm: {
        title: "Agenda",
        text: "Keep a close eye on your top-performing companies and their current status."
      },
      lg: {
        title: "Smart segmentation",
        text: "Keep a close eye on your top-performing companies and their current status."
      }
    }
  },
  {
    img: "/Feature/integration.png",
    content: {
      sm: {
        title: "Leads",
        text: "Get a clear picture of project momentum over time and understand workload distribution."
      },
      lg: {
        title: "Integrations",
        text: "Get a clear picture of project momentum over time. Understand workload distribution."
      }
    }
  }
];

export default function FeatureHeroShowcase() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isLarge, setIsLarge] = useState(false);
  const timerRef = useRef(null);

  /* ---------------- Screen Size ---------------- */

  useEffect(() => {
    const check = () => setIsLarge(window.innerWidth >= 1064);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  /* ---------------- Auto Loop ---------------- */

  const startLoop = () => {
    clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      setActive((prev) => {
        // normal forward
        if (prev < FEATURES.length - 1) {
          setDirection(1);
          return prev + 1;
        }

        // last → jump to first with backward motion
        setDirection(-1);
        return 0;
      });
    }, 4000);
  };

  useEffect(() => {
    startLoop();
    return () => clearInterval(timerRef.current);
  }, []);

  /* ---------------- Click Handler ---------------- */

  const handleClick = (i) => {
    setDirection(i > active ? 1 : -1);
    setActive(i);
    startLoop();
  };

  /* ---------------- Track Translate ---------------- */

  const translateX = `-${active * 100}%`;

  return (
    <div className="relative z-10 grid gap-5 max-w-[1000px] mx-auto">

      {/* ---------------- Image Track ---------------- */}
      <div className="bg-pastel-3 border-4 rounded-xl border-gray-2/20 aspect-[1.5/1] overflow-hidden p-1">
        <motion.div
          className="flex h-full"
          animate={{ x: translateX }}
          transition={{
            duration: direction === 1 ? 0.55 : 0.8, // slightly longer when resetting back
            ease: "easeInOut"
          }}
        >
          {FEATURES.map((item, i) => (
            <img
              key={i}
              src={item.img}
              alt=""
              className="w-full h-full object-cover shrink-0"
            />
          ))}
        </motion.div>
      </div>

      {/* ---------------- Pagination ---------------- */}
      <div className="flex gap-1 w-full max-w-[172px] mx-auto">
        {FEATURES.map((_, i) => (
          <motion.div
            key={i}
            animate={{ flexGrow: active === i ? 2 : 1 }}
            transition={{ duration: 0.35 }}
            className="h-[2px] bg-white-3"
          >
            <motion.span
              key={active === i ? active : "idle"}
              className="block h-full bg-primary origin-left"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: active === i ? 1 : 0 }}
              transition={{ duration: 4, ease: "linear" }}
            />
          </motion.div>
        ))}
      </div>

      {/* ---------------- Cards ---------------- */}
      <div className="flex flex-wrap w-full max-w-[900px] mx-auto text-start">
        {FEATURES.map((item, i) => {
          const content = isLarge ? item.content.lg : item.content.sm;

          return (
            <article
              key={i}
              onClick={() => handleClick(i)}
              className={`w-[260px] grow p-5 grid gap-4 cursor-pointer transition-opacity duration-300
                ${active === i ? "opacity-100" : "opacity-70"}`}
            >
              <h3 className="text-[20px]">{content.title}</h3>
              <p className="text-[16px] lg:text-[18px]">{content.text}</p>
            </article>
          );
        })}
      </div>
    </div>
  );
}
