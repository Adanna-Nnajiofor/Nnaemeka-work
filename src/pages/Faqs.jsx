import React from "react";

const Faqs = () => {
  return (
    <section className="bg-gradient-to-r from-blue-200 to-blue-100 p-8 min-h-screen flex flex-col items-center animate-fadeIn">
      <h2 className="text-4xl mt-28 font-bold mb-8 text-blue-800 text-center animate-fadeIn lg:text-5xl">
        Frequently Asked Questions
      </h2>
      <div className="max-w-4xl w-full">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-4">
          <h3 className="text-2xl font-bold mb-2">
            What services do you offer?
          </h3>
          <p className="text-gray-600 text-lg">
            We offer a wide range of medical services including consultations,
            preventive care, and specialized treatments. Visit our Services page
            for more details.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 mb-4">
          <h3 className="text-2xl font-bold mb-2">
            How can I make an appointment?
          </h3>
          <p className="text-gray-600 text-lg">
            You can make an appointment by visiting our Appointment page and
            filling out the form, or by calling our office directly.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 mb-4">
          <h3 className="text-2xl font-bold mb-2">
            What are the consultation fees?
          </h3>
          <p className="text-gray-600 text-lg">
            Consultation fees vary depending on the type and length of the
            appointment. For detailed information, please contact our office
            directly.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 mb-4">
          <h3 className="text-2xl font-bold mb-2">
            What is an online consultation?
          </h3>
          <p className="text-gray-600 text-lg">
            An online consultation is a virtual appointment with a healthcare
            provider that takes place over the internet using video conferencing
            technology.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 mb-4">
          <h3 className="text-2xl font-bold mb-2">
            How do I schedule an online consultation?
          </h3>
          <p className="text-gray-600 text-lg">
            To schedule an online consultation, visit our Appointment page and
            click on the book an appointment button, or connect with us on
            Medium at{" "}
            <a
              href="https://askdrpeter.medium.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 block mt-2"
            >
              Read More
            </a>{" "}
            or call our office directly.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 mb-4">
          <h3 className="text-2xl font-bold mb-2">
            What do I need for an online consultation?
          </h3>
          <p className="text-gray-600 text-lg">
            You will need a device with a camera and microphone, a stable
            internet connection, and a quiet, private space for the duration of
            your consultation.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 mb-4">
          <h3 className="text-2xl font-bold mb-2">
            Is my information secure during an online consultation?
          </h3>
          <p className="text-gray-600 text-lg">
            Yes, we use secure, encrypted video conferencing tools to ensure
            that your information remains private and confidential during an
            online consultation.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 mb-4">
          <h3 className="text-2xl font-bold mb-2">
            Can I get a prescription through an online consultation?
          </h3>
          <p className="text-gray-600 text-lg">
            Yes, our healthcare providers can prescribe medication during an
            online consultation if it is deemed necessary for your treatment.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 mb-4">
          <h3 className="text-2xl font-bold mb-2">
            What if I need follow-up care after an online consultation?
          </h3>
          <p className="text-gray-600 text-lg">
            If follow-up care is needed, our healthcare providers will advise
            you on the next steps, which may include scheduling an in-person
            visit or another online consultation.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 mb-4">
          <h3 className="text-2xl font-bold mb-2">
            What are your office hours?
          </h3>
          <p className="text-gray-600 text-lg">
            Our office hours are Monday through Friday, from 8:00 AM to 5:00 PM.
            Online consultations may be available outside these hours upon
            request.
          </p>
        </div>
        {/* Add more FAQs as needed */}
      </div>
    </section>
  );
};

export default Faqs;
