import React from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/images/IMG_20210706_160649.jpg";
import backgroundImg from "../assets/images/about bg 1.jpg"; // Updated background image

const About = () => {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat p-8 min-h-screen flex flex-col items-center animate-fadeIn "
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className="bg-blue-100 bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-6xl flex flex-col lg:flex-row mt-32 mb-14 lg:items-start lg:space-x-10 animate-fadeInUp">
        <div className="lg:w-1/2 animate-slideInLeft">
          <h2 className="text-4xl font-bold mb-4 text-blue-800 lg:text-5xl">
            About Me
          </h2>
          <p className="text-xl mb-4 leading-relaxed text-gray-700">
            I am an accomplished medical doctor and writer with a deep passion
            for crafting healing experiences and compelling narratives. With a
            robust background in medicine and storytelling, I bring a unique
            blend of skills to every endeavor. My focus is on creating impactful
            stories and fostering wellness through my medical practice and
            writing.
          </p>
          <p className="text-xl mb-4 leading-relaxed text-gray-700">
            My approach to medicine is holistic, centering on the overall
            well-being of my patients. I believe in the power of preventative
            care and the importance of understanding each patient's unique story
            to provide personalized treatment plans. This allows me to deliver
            compassionate, effective care that truly addresses the root causes
            of health issues.
          </p>
          <p className="text-xl mb-4 leading-relaxed text-gray-700">
            Professional Affiliations: Nigerian Medical Association, Medical
            Writers Association, etc.
          </p>
          <Link to="/contact">
            <button className="bg-blue-600 text-white px-8 py-3 items-center rounded-md hover:bg-blue-700 transition duration-300 animate-bounce lg:items-start">
              Contact Me
            </button>
          </Link>
        </div>
        <div className="lg:w-1/2 mt-6 lg:mt-20 animate-slideInRight">
          <div className="flex justify-center items-center">
            <div className="bg-blue-400 w-3/4 h-3/4 rounded-xl shadow-lg overflow-hidden">
              <img
                className="w-full h-full object-cover p-4"
                src={avatar}
                alt="Dr. Peter"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
