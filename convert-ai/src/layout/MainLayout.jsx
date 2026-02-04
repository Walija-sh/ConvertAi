import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FAQs from "../components/FAQs";

const MainLayout = () => {
  return (
    <div className="">
      <Navbar />
      <main>
       
        <Outlet />
        
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
