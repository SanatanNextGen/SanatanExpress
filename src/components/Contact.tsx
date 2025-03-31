/* eslint-disable react/no-unescaped-entities */
import { useState, ChangeEvent, FormEvent } from "react";

// Define types for the form data
interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactUs() {
  // State to manage form data
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  // State to manage form submission status
  const [formStatus, setFormStatus] = useState<string | null>(null);

  // Handle input changes and update the formData state
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("Submitting...");

    // Simulate a form submission delay
    setTimeout(() => {
      setFormStatus("Your message has been sent! Thank you.");
      setFormData({ name: "", email: "", message: "" }); // Reset form data
    }, 2000);
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Contact Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-blue-800 animate__animated animate__fadeIn">
            Contact Us
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-700 to-blue-600 mx-auto mb-4 animate__animated animate__fadeIn animate__delay-1s"></div>
          <p className="text-gray-600 max-w-2xl mx-auto animate__animated animate__fadeIn animate__delay-2s">
            We'd love to hear from you! Whether you have a question or need more
            information, feel free to reach out.
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-lg rounded-lg p-8 mb-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full mt-2 p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full mt-2 p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full mt-2 p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-700 to-blue-600 text-white px-6 py-3 rounded-md font-medium hover:from-blue-800 hover:to-blue-700 transition-all duration-300 transform hover:scale-110 shadow-md"
            >
              Send Message
            </button>

            {formStatus && (
              <p className="mt-4 text-center text-gray-600">{formStatus}</p>
            )}
          </form>
        </div>

        {/* Company Information */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4 text-blue-800">
            Company Information
          </h3>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-700 to-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">
            Get in touch with us using the following contact details:
          </p>
          <ul className="space-y-3 mt-6">
            <li className="flex items-center justify-center">
              <span className="text-blue-700 mr-2">📞</span>
              <span className="text-gray-600">+917880001415</span>
            </li>
            <li className="flex items-center justify-center">
              <span className="text-blue-700 mr-2">📧</span>
              <span className="text-gray-600">
                info@sanatandigitalsystem.com{" "}
              </span>
            </li>
            <li className="flex items-center justify-center">
              <span className="text-blue-700 mr-2">🏠</span>
              <span className="text-gray-600">
                Sanatan House, 284-B, New Loha Mandi, Dewas Naka, Indore (M.P)
              </span>
            </li>
            <li className="flex justify-center space-x-6 mt-6">
              <a href="#" className="text-blue-600 hover:text-blue-800">
                Facebook
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800">
                Twitter
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
