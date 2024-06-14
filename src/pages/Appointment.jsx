import React from "react";
import clinicImg from "../assets/images/placeholder image.png"; // Placeholder image for clinic
import bgImg from "../assets/images/appointment bg.jpg"; // Background image

const Appointment = () => {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat p-8 min-h-screen flex flex-col items-center animate-fadeIn"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="bg-blue-100 bg-opacity-90 p-8 items-center rounded-lg shadow-lg w-full max-w-4xl animate-fadeInUp mt-32 mb-14 ">
        <h2 className="text-4xl font-bold mb-8 text-blue-800 text-center lg:text-5xl animate-slideInLeft">
          Appointment Booking
        </h2>
        <p className="text-xl mb-8 text-gray-700 text-center animate-fadeInUp">
          Schedule your appointment with ease using our online booking system.
        </p>
        <div className="text-center mb-8 animate-bounce">
          <a
            href="https://askdrpeter.medium.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-8 py-3 rounded-md inline-block hover:bg-blue-700 transition duration-300"
          >
            Book an Appointment
          </a>
        </div>
        <div className="mb-8 animate-fadeInUp">
          <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
          <p className="text-lg mb-4">Phone: (+234) 08037665779</p>
          <p className="text-lg mb-4">Email: nnajioforpeter@gmail.com</p>
          <p className="text-lg mb-4">
            Address: 123 Medical Lane, City, State, ZIP
          </p>
          <p className="text-lg mb-4">Medium: Ask Dr Peter</p>
        </div>
        <div className="mb-8 animate-fadeInUp">
          <h3 className="text-2xl font-bold mb-4">Office Hours</h3>
          <p className="text-lg mb-4">Monday - Friday: 9:00 AM - 5:00 PM</p>
          <p className="text-lg mb-4">Saturday: 9:00 AM - 1:00 PM</p>
          <p className="text-lg mb-4">Emergency Contact: (+234) 08037665779</p>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
