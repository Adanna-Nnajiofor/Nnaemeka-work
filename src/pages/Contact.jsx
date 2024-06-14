import React from "react";
import clinicImg from "../assets/images/clinic image.jpg"; // Placeholder image for clinic
import mapPlaceholderImg from "../assets/images/placeholder image.png"; // Placeholder image for map
import bgImg from "../assets/images/contact bg.jpg"; // Background image

const Contact = () => {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat p-8 min-h-screen flex flex-col items-center animate-fadeIn"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="bg-blue-100 bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-4xl animate-slideInUp mt-32 mb-14 ">
        <h2 className="text-4xl font-bold mb-8 text-blue-800 text-center lg:text-5xl">
          Contact
        </h2>
        <p className="text-xl mb-8 text-gray-700 text-center animate-fadeInUp">
          I look forward to connecting with you and exploring how we can bring
          your health and creative ideas to life. Whether you have a medical
          concern or a story to tell, don't hesitate to reach out.
        </p>
        <form className="mb-8 animate-fadeInUp">
          <div className="mb-4">
            <label className="block text-lg mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="w-full p-2 border border-gray-400 rounded-md"
              type="text"
              id="name"
              name="name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full p-2 border border-gray-400 rounded-md"
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="w-full p-2 border border-gray-400 rounded-md"
              id="message"
              name="message"
              rows="4"
              required
            />
          </div>
          <button
            className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition duration-300 animate-bounce"
            type="submit"
          >
            Send Message
          </button>
        </form>
        <div className="flex flex-col animate-fadeInUp">
          <div className="mb-8">
            <h3 className="text-3xl font-bold mb-4">Contact Information</h3>
            <p className="text-lg mb-2">
              Feel free to reach us via email or phone
            </p>
            <img
              src={mapPlaceholderImg}
              alt="Map and Directions"
              className="w-40 rounded-lg"
              style={{ maxHeight: "150px" }}
            />
            <div className="pt-2">
              <p className="text-lg font-semibold">Email</p>
              <p className="text-blue-600 text-sm lg:text-lg ">
                nnajioforpeter@gmail.com
              </p>
            </div>
            <div className="pt-2">
              <p className="text-lg font-semibold">Phone</p>
              <p className="text-blue-600 text-lg">+234 08037665779 </p>
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-4">Connect with Me</h3>
          <div className="flex space-x-4 justify-center">
            <a
              href="https://twitter.com/PeterNnajiofor"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://linkedin.com/PeterNnajiofor"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://facebook.com/DanielYoung"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
