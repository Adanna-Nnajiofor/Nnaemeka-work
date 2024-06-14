import React from "react";
import { Link } from "react-router-dom";
import portfolioBg from "../assets/images/portfolio bg.jpg"; // Background image
import publicationImg from "../assets/images/publication image.jpg"; // Publication image
import presentationImg from "../assets/images/presentation image.jpg"; // Presentation image
import awardImg from "../assets/images/award image.jpg"; // Award image

const Portfolio = () => {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat p-8 min-h-screen flex flex-col items-center animate-fadeIn"
      style={{ backgroundImage: `url(${portfolioBg})` }}
    >
      <div className="bg-blue-100 bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-4xl mt-32 mb-14 ">
        <h2 className="text-4xl font-bold mb-8 text-blue-800 text-center animate-slideInLeft lg:text-5xl">
          Portfolio
        </h2>
        <p className="text-xl mb-8 text-gray-700 text-center animate-slideInRight">
          Explore my professional portfolio, including publications,
          presentations, and awards.
        </p>
        <div className="space-y-8">
          <div>
            <h3 className="text-3xl font-bold mb-4 text-blue-800 animate-fadeInUp">
              Publications
            </h3>
            <ul className="list-disc pl-8 space-y-2">
              <li className="flex items-center text-xl animate-fadeInUp">
                <img
                  src={publicationImg}
                  alt="Publication 1"
                  className="w-10 h-10 mr-4 rounded-full object-cover"
                />
                Research Paper 1
              </li>
              <li className="flex items-center text-xl animate-fadeInUp">
                <img
                  src={publicationImg}
                  alt="Publication 2"
                  className="w-10 h-10 mr-4 rounded-full object-cover"
                />
                Research Paper 2
              </li>
              <li className="flex items-center text-xl animate-fadeInUp">
                <img
                  src={publicationImg}
                  alt="Book Title"
                  className="w-10 h-10 mr-4 rounded-full object-cover"
                />
                Book Title
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-4 text-blue-800 animate-fadeInUp">
              Presentations
            </h3>
            <ul className="list-disc pl-8 space-y-2">
              <li className="flex items-center text-xl animate-fadeInUp">
                <img
                  src={presentationImg}
                  alt="Conference Presentation 1"
                  className="w-10 h-10 mr-4 rounded-full object-cover"
                />
                Conference Presentation 1
              </li>
              <li className="flex items-center text-xl animate-fadeInUp">
                <img
                  src={presentationImg}
                  alt="Workshop 2"
                  className="w-10 h-10 mr-4 rounded-full object-cover"
                />
                Workshop 2
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-4 text-blue-800 animate-fadeInUp">
              Awards and Recognitions
            </h3>
            <ul className="list-disc pl-8 space-y-2">
              <li className="flex items-center text-xl animate-fadeInUp">
                <img
                  src={awardImg}
                  alt="Award 1"
                  className="w-10 h-10 mr-4 rounded-full object-cover"
                />
                Award 1
              </li>
              <li className="flex items-center text-xl animate-fadeInUp">
                <img
                  src={awardImg}
                  alt="Recognition 2"
                  className="w-10 h-10 mr-4 rounded-full object-cover"
                />
                Recognition 2
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link to="/contact">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition duration-300 animate-bounce">
              Contact Me
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
