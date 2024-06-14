import React from "react";
import { Link } from "react-router-dom";
import web from "../assets/images/medical image.jpg";
import backgroundImage from "../assets/images/medical background 4.jpg";

const Home = () => {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat p-8 text-black flex flex-col items-center lg:items-start animate-fadeIn"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Hero Section */}
      <div className="w-full my-6 lg:flex lg:justify-between mt-28 mb-8 lg:items-center animate-slideInLeft">
        <div className="w-full p-8 lg:w-1/2">
          <h2 className="text-2xl">HI THERE!</h2>
          <h1 className="text-4xl py-6 font-extrabold">
            I'M <span className="text-blue-800">DR. PETER</span>
          </h1>
          <div className="bg-blue-600 text-2xl w-full text-white text-center p-4 mt-4 lg:mt-8 rounded-md animate-marquee">
            <h6>MEDICAL DOCTOR | WRITER</h6>
          </div>
          <p className="pt-3 pb-8 lg:pb-0 leading-9 text-xl">
            Welcome to Peter's world, where medical expertise meets captivating
            storytelling. As a dedicated doctor and writer, I am passionate
            about healing and crafting narratives that resonate deeply. Whether
            it's through medical breakthroughs or compelling stories, my goal is
            to inspire and connect with you. Let's embark on a journey together,
            transforming ideas into meaningful experiences.
          </p>
          <Link to="/appointment">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-md mt-10 hover:text-black animate-bounce">
              LET'S TALK
            </button>
          </Link>
        </div>
        <div className="w-full p-8 lg:w-1/2 animate-slideInRight">
          <img
            className="object-cover w-full rounded-lg shadow-lg"
            src={web}
            alt="Dr. Peter"
          />
        </div>
      </div>

      {/* Additional Sections */}
      <div className="w-full mt-12 flex flex-col lg:flex-row space-y-8 lg:space-x-8 lg:space-y-0">
        {/* About Section */}
        <div className="w-full border-solid border-2 border-blue-600 bg-white p-8 shadow-lg animate-fadeInUp">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg mb-4">
            I am an accomplished medical doctor and writer with a passion for
            crafting healing experiences and compelling narratives. With a
            background in medicine and storytelling, I bring a unique blend of
            skills to every endeavor. My focus is on creating impactful stories
            and fostering wellness through my medical practice and writing.
          </p>
          <Link to="/about">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:text-black">
              Learn More
            </button>
          </Link>
        </div>

        {/* Services Overview */}
        <div className="w-full border-solid border-2 border-blue-600 bg-white p-8 shadow-lg animate-fadeInUp">
          <h2 className="text-3xl font-bold mb-4">Services</h2>
          <p className="text-lg mb-4">
            Explore the diverse range of services I offer, from medical
            consultation to captivating storytelling. Each service is
            meticulously tailored to meet your unique needs and bring your
            vision to life. Whether it's providing expert medical advice or
            crafting engaging narratives, I am committed to delivering
            personalized experiences that resonate and inspire.
          </p>
          <Link to="/services">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:text-black">
              Learn More
            </button>
          </Link>
        </div>

        {/* Portfolio Preview */}
        <div className="w-full border-solid border-2 border-blue-600 bg-white p-8 shadow-lg animate-fadeInUp">
          <h2 className="text-3xl font-bold mb-4">Portfolio</h2>
          <p className="text-lg mb-4">
            Take a look at some of my recent projects, showcasing my expertise
            in both medical practice and writing. Discover how my unique blend
            of skills has led to impactful results in both fields.
          </p>
          <Link to="/portfolio">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:text-black">
              View Portfolio
            </button>
          </Link>
        </div>

        {/* Contact CTA */}
        <div className="w-full border-solid border-2 border-blue-600 bg-white p-8 shadow-lg animate-fadeInUp">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg mb-4">
            I look forward to connecting with you and exploring how we can bring
            your health and creative ideas to life. Whether you have a medical
            concern or a story to tell, don't hesitate to reach out. Together,
            we can navigate your health journey or craft compelling narratives
            that resonate deeply.
          </p>
          <Link to="/contact">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:text-black">
              Contact Me
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
