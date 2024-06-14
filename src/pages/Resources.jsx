import React from "react";
import { Link } from "react-router-dom";
import articlesImage from "../assets/images/article image.jpg";
import faqsImage from "../assets/images/faqs image.jpg";
import formsImage from "../assets/images/forms image.jpg";

const Resources = () => {
  return (
    <section className="bg-gradient-to-r from-blue-200 to-blue-100 p-8 min-h-screen flex flex-col items-center animate-fadeIn">
      <h2 className="text-4xl mt-28 font-bold mb-8 text-blue-800 text-center animate-fadeIn lg:text-5xl">
        Patient Resources
      </h2>
      <p className="text-xl mb-10 text-gray-700 text-center max-w-2xl animate-fadeIn">
        Access a wealth of information to help you manage your health. Explore
        articles, FAQs, and downloadable forms to prepare for your visits.
      </p>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center animate-fadeInUp">
          <img
            src={articlesImage}
            alt="Educational Materials"
            className="w-full h-40 object-cover rounded-t-lg mb-4"
          />
          <h3 className="text-2xl font-bold mb-2">Educational Materials</h3>
          <p className="text-gray-600 text-center mb-4">
            Articles, blogs, and videos on various health topics, preventive
            care, and wellness tips.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center animate-fadeInUp">
          <img
            src={faqsImage}
            alt="FAQs"
            className="w-full h-40 object-cover rounded-t-lg mb-4"
          />
          <h3 className="text-2xl font-bold mb-2">FAQs</h3>
          <p className="text-gray-600 text-center mb-4">
            Answers to frequently asked questions about services, procedures,
            and general health inquiries.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center animate-fadeInUp">
          <img
            src={formsImage}
            alt="Forms and Policies"
            className="w-full h-40 object-cover rounded-t-lg mb-4"
          />
          <h3 className="text-2xl font-bold mb-2">Forms and Policies</h3>
          <p className="text-gray-600 text-center mb-4">
            Downloadable patient forms, privacy policies, and terms of service.
          </p>
        </div>
      </div>
      <Link to="/contact">
        <button className="mt-10 bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition duration-300 animate-bounce">
          Contact Me
        </button>
      </Link>
    </section>
  );
};

export default Resources;
