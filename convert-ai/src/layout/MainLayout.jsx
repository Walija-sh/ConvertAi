import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { motion, AnimatePresence } from 'motion/react';

const MainLayout = () => {
  const location = useLocation();

  return (
    <div className="bg-white-1 relative">
      <div className="w-full h-[60px]"></div>
      <Navbar />
      
      <main className="relative min-h-screen">
        <AnimatePresence mode="wait">
         
          <motion.div
            key={location.pathname}
            initial={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" }}
            animate={{ 
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
            }}
            exit={{ 
              clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)"
            }}
            transition={{ 
              duration: 0.8, 
              ease: [0.22, 1, 0.36, 1]
            }}
            className="w-full"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;