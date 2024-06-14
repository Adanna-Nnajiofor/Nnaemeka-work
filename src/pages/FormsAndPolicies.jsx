import React, { useState } from "react";

const FormsAndPolicies = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    address: "",
    phone: "",
    email: "",
    chronicIllnesses: "",
    medications: "",
    allergies: "",
    emergencyContactName: "",
    emergencyContactRelationship: "",
    emergencyContactPhone: "",
    consentSignature: "",
    consentDate: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);

    // Optional: Display a pop-up or alert for successful submission
    alert("Form submitted successfully!");

    // Reset form inputs and display success message
    setIsSubmitted(true);
    setFormData({
      name: "",
      dob: "",
      address: "",
      phone: "",
      email: "",
      chronicIllnesses: "",
      medications: "",
      allergies: "",
      emergencyContactName: "",
      emergencyContactRelationship: "",
      emergencyContactPhone: "",
      consentSignature: "",
      consentDate: "",
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <section className="bg-gradient-to-r from-blue-200 to-blue-100 p-8 min-h-screen flex flex-col items-center animate-fadeIn">
      <h2 className="text-4xl mt-28 font-bold mb-8 text-blue-800 text-center animate-fadeIn lg:text-5xl">
        Patient Information Form
      </h2>
      <div className="max-w-4xl w-full">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h3 className="text-2xl font-bold mb-4">Personal Information</h3>
          <form className="bg-gray-100 p-4 rounded-md" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-2 font-semibold" htmlFor="name">
                Name:
              </label>
              <input
                id="name"
                type="text"
                className="w-full p-2 mt-1 rounded-md border"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-semibold" htmlFor="dob">
                Date of Birth:
              </label>
              <input
                id="dob"
                type="date"
                className="w-full p-2 mt-1 rounded-md border"
                value={formData.dob}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-semibold" htmlFor="address">
                Address:
              </label>
              <input
                id="address"
                type="text"
                className="w-full p-2 mt-1 rounded-md border"
                placeholder="Enter your address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-semibold" htmlFor="phone">
                Phone Number:
              </label>
              <input
                id="phone"
                type="tel"
                className="w-full p-2 mt-1 rounded-md border"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-semibold" htmlFor="email">
                Email:
              </label>
              <input
                id="email"
                type="email"
                className="w-full p-2 mt-1 rounded-md border"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <h3 className="text-2xl font-bold mb-4">Medical History</h3>
            <div className="mb-4">
              <label
                className="block mb-2 font-semibold"
                htmlFor="chronicIllnesses"
              >
                Do you have any chronic illnesses? If yes, please specify:
              </label>
              <textarea
                id="chronicIllnesses"
                className="w-full p-2 mt-1 rounded-md border"
                rows="4"
                placeholder="Enter chronic illnesses"
                value={formData.chronicIllnesses}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-semibold" htmlFor="medications">
                Are you currently taking any medication? If yes, please list
                them:
              </label>
              <textarea
                id="medications"
                className="w-full p-2 mt-1 rounded-md border"
                rows="4"
                placeholder="List medications"
                value={formData.medications}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-semibold" htmlFor="allergies">
                Do you have any known allergies? If yes, please specify:
              </label>
              <textarea
                id="allergies"
                className="w-full p-2 mt-1 rounded-md border"
                rows="4"
                placeholder="Specify allergies"
                value={formData.allergies}
                onChange={handleChange}
              />
            </div>
            <h3 className="text-2xl font-bold mb-4">
              Emergency Contact Information
            </h3>
            <div className="mb-4">
              <label
                className="block mb-2 font-semibold"
                htmlFor="emergencyContactName"
              >
                Name:
              </label>
              <input
                id="emergencyContactName"
                type="text"
                className="w-full p-2 mt-1 rounded-md border"
                placeholder="Enter emergency contact's name"
                value={formData.emergencyContactName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 font-semibold"
                htmlFor="emergencyContactRelationship"
              >
                Relationship:
              </label>
              <input
                id="emergencyContactRelationship"
                type="text"
                className="w-full p-2 mt-1 rounded-md border"
                placeholder="Enter relationship"
                value={formData.emergencyContactRelationship}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 font-semibold"
                htmlFor="emergencyContactPhone"
              >
                Phone Number:
              </label>
              <input
                id="emergencyContactPhone"
                type="tel"
                className="w-full p-2 mt-1 rounded-md border"
                placeholder="Enter emergency contact's phone number"
                value={formData.emergencyContactPhone}
                onChange={handleChange}
                required
              />
            </div>
            <h3 className="text-2xl font-bold mb-4">Consent</h3>
            <p className="mb-4">
              I hereby give my consent for my personal and medical information
              to be used by the healthcare provider for the purpose of medical
              treatment.
            </p>
            <div className="mb-4">
              <label
                className="block mb-2 font-semibold"
                htmlFor="consentSignature"
              >
                Signature:
              </label>
              <input
                id="consentSignature"
                type="text"
                className="w-full p-2 mt-1 rounded-md border"
                placeholder="Enter your signature"
                value={formData.consentSignature}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-semibold" htmlFor="consentDate">
                Date:
              </label>
              <input
                id="consentDate"
                type="date"
                className="w-full p-2 mt-1 rounded-md border"
                value={formData.consentDate}
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Submit
            </button>
            {isSubmitted && (
              <p className="mt-2 text-green-600 font-semibold">
                Form submitted successfully!
              </p>
            )}
          </form>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h3 className="text-2xl font-bold mb-4">Privacy Policy</h3>
          <p className="text-gray-600">
            Your privacy is important to us. Please read our privacy policy to
            understand how we handle your personal information.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h3 className="text-2xl font-bold mb-4">Terms of Service</h3>
          <p className="text-gray-600">
            By using our services, you agree to our terms of service. Please
            read them carefully.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FormsAndPolicies;
