"use client";
import React from "react";
import ContactForm from "../../components/contact-form";
import Navigation from "../../components/navigation";

function MainComponent() {
  const handleFormSubmit = async (formData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation activeLink="contact" />

      <div className="pt-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="py-12">
          <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8 font-inter">
            Get in Touch
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <ContactForm onSubmit={handleFormSubmit} />

            <div className="space-y-8">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-inter">
                  Business Hours
                </h2>
                <div className="space-y-2 text-gray-600 dark:text-gray-300 font-inter">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                  <p>Saturday: 10:00 AM - 2:00 PM EST</p>
                  <p>Sunday: Closed</p>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 font-inter">
                    Response Time
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 font-inter">
                    We aim to respond to all inquiries within 24-48 business
                    hours.
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-inter">
                  Connect With Us
                </h2>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
                  >
                    <i className="fab fa-linkedin-in text-xl text-white"></i>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-400 hover:bg-blue-500 transition-colors duration-200"
                  >
                    <i className="fab fa-twitter text-xl text-white"></i>
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-900 transition-colors duration-200"
                  >
                    <i className="fab fa-github text-xl text-white"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;