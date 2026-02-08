import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";

import Home from "./pages/Home";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Integrations from "./pages/Integrations";
import WallsOfLove from "./pages/WallsOfLove";
import Careers from "./pages/Careers";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import Faq from "./pages/Faq";
import ChangeLog from "./pages/ChangeLog.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* Core Pages */}
        <Route index element={<Home />} />
        <Route path="features" element={<Features />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blog" element={<Blog />} />

        {/* Secondary Pages */}
        <Route path="changelog" element={<ChangeLog />} />
        <Route path="integrations" element={<Integrations />} />
        <Route path="testimonials" element={<WallsOfLove />} />
        <Route path="careers" element={<Careers />} />
        <Route path="faq" element={<Faq />} />

        {/* Legal Pages */}
        <Route path="terms-of-service" element={<TermsOfService />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="cookie-policy" element={<CookiePolicy />} />
      </Route>
    </Routes>
  );
};

export default App;
