import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <div className="bg-white-1 ">
      <div className="w-full h-[60px]"></div>
      <Navbar />
      <main>
       
        <Outlet />
        
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
