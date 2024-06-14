import React from "react";
import { Link } from "react-router-dom";
import testimonialBg from "../assets/images/testimonial bg.jpg"; // Background image
import patientA from "../assets/images/patient 1.jpg"; // Patient A image
import patientB from "../assets/images/patient 2.jpg"; // Patient B image

const Testimonials = () => {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat p-8 min-h-screen flex flex-col items-center animate-fadeIn"
      style={{ backgroundImage: `url(${testimonialBg})` }}
    >
      <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg w-full mt-32 mb-14  max-w-4xl">
        <h2 className="text-4xl font-bold mb-8 text-blue-800 text-center animate-fadeInUp lg:text-5xl">
          Testimonials
        </h2>
        <p className="text-xl mb-8 text-gray-700 text-center animate-fadeInUp">
          Read what my patients have to say about their experiences.
        </p>
        <div className="space-y-8">
          <div className="flex items-start space-x-4 animate-fadeInUp">
            <img
              src={patientA}
              alt="Patient A"
              className="w-16 h-16 rounded-full object-cover"
            />
            <blockquote className="border-l-4 border-blue-600 pl-4">
              <p className="text-xl text-gray-800">
                "Dr. Peter is an outstanding doctor who truly cares about his
                patients. His approach to care is both professional and
                compassionate."
              </p>
              <cite className="block text-right text-blue-600 mt-2">
                - Patient A
              </cite>
            </blockquote>
          </div>
          <div className="flex items-start space-x-4 animate-fadeInUp">
            <img
              src={patientB}
              alt="Patient B"
              className="w-16 h-16 rounded-full object-cover"
            />
            <blockquote className="border-l-4 border-blue-600 pl-4">
              <p className="text-xl text-gray-800">
                "I am grateful for the excellent care I received from Dr. Peter.
                His expertise and dedication are truly commendable."
              </p>
              <cite className="block text-right text-blue-600 mt-2">
                - Patient B
              </cite>
            </blockquote>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link to="/contact">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition duration-300 animate-bounce">
              Share Your Experience
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
