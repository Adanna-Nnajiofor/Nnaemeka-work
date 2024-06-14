import React from "react";
import { Link } from "react-router-dom";
import consultationImage from "../assets/images/medical consultation.jpg";
import referralsImage from "../assets/images/referral image.jpg";
import screeningsImage from "../assets/images/screening image.jpg";
import treatmentImage from "../assets/images/treatment image.jpg";
import writingImage from "../assets/images/writing image.jpg";

const Services = () => {
  return (
    <section className="bg-gradient-to-r from-blue-200 to-blue-100 p-8 min-h-screen flex flex-col items-center animate-fadeIn">
      <h2 className="mt-28 text-4xl font-bold text-center mb-8 text-blue-800 animate-fadeIn lg:text-5xl">
        Services
      </h2>
      <p className="text-xl mb-10 text-gray-700 text-center max-w-2xl animate-fadeIn">
        Explore the diverse range of services I offer, from medical consultation
        to captivating storytelling. Each service is meticulously tailored to
        meet your unique needs and bring your vision to life. Whether it's
        providing expert medical advice or crafting engaging narratives, I am
        committed to delivering personalized experiences that resonate and
        inspire.
      </p>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center animate-slideInLeft">
          <img
            src={consultationImage}
            alt="General Consultation"
            className="w-full h-40 object-cover rounded-t-lg mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">General Consultation</h3>
          <p className="text-gray-600 text-center">
            Comprehensive health consultations to address all your medical
            needs.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center animate-slideInRight">
          <img
            src={referralsImage}
            alt="Specialist Referrals"
            className="w-full h-40 object-cover rounded-t-lg mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Specialist Referrals</h3>
          <p className="text-gray-600 text-center">
            Expert recommendations and referrals to top specialists.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center animate-slideInLeft">
          <img
            src={screeningsImage}
            alt="Health Screenings"
            className="w-full h-40 object-cover rounded-t-lg mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Health Screenings</h3>
          <p className="text-gray-600 text-center">
            Regular health check-ups and screenings to ensure well-being.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center animate-slideInRight">
          <img
            src={treatmentImage}
            alt="Personalized Treatment Plans"
            className="w-full h-40 object-cover rounded-t-lg mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">
            Personalized Treatment Plans
          </h3>
          <p className="text-gray-600 text-center">
            Tailored treatment plans designed specifically for you.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center animate-slideInLeft">
          <img
            src={writingImage}
            alt="Medical Writing and Content Creation"
            className="w-full h-40 object-cover rounded-t-lg mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">
            Medical Writing and Content Creation
          </h3>
          <p className="text-gray-600 text-center">
            Professional medical writing services for various needs.
          </p>
        </div>
      </div>
      <Link to="/contact">
        <button className="mt-10 bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition duration-300 animate-fadeInUp">
          Learn More
        </button>
      </Link>
    </section>
  );
};

export default Services;
