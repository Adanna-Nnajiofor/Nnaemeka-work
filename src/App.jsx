// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Resources from "./pages/Resources";
import Testimonials from "./pages/Testimonials";
import Portfolio from "./pages/Portfolio";
import Appointment from "./pages/Appointment";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import RootPage from "./pages/RootPage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <div className="flex flex-col h-full w-full">
        <Routes>
          <Route path="/" element={<RootPage />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="resources" element={<Resources />} />
            <Route path="testimonials" element={<Testimonials />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="appointment" element={<Appointment />} />
            <Route path="blog" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
