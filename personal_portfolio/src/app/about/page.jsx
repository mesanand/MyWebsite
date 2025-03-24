"use client";
import React from "react";
import Navigation from "../../components/navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faServer, faCloud, faTrophy, faCertificate, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

function MainComponent() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation activeLink="about" />

      <main className="pt-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="py-12">
          <section className="mb-16">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 font-inter">
              About Me
            </h1>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-full md:w-1/3">
                <img
                  src="/mehr_headshot.jpg"
                  alt="Mehr - Software Engineer"
                  className="rounded-lg shadow-lg w-full object-cover aspect-square"
                />
              </div>

              <div className="w-full md:w-2/3">
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 font-inter">
                  With over 2 years of experience in software development, I've
                  dedicated my career to building innovative solutions that make
                  a difference. My journey began in frontend development,
                  evolving into full-stack expertise with a passion for clean
                  code and user-centric design.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 font-inter">
                  Currently focused on cloud architecture and scalable systems,
                  I combine technical expertise with strategic thinking to
                  deliver solutions that drive business growth and user
                  satisfaction.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 font-inter">
              Technical Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 font-inter">
                  <FontAwesomeIcon icon={faLaptopCode} className="mr-2 text-blue-600 dark:text-blue-400" />
                  Frontend
                </h3>
                <ul className="space-y-2">
                  <li className="text-gray-700 dark:text-gray-300 font-inter">
                    React & Next.js
                  </li>
                  <li className="text-gray-700 dark:text-gray-300 font-inter">
                    Vue.js & Nuxt
                  </li>
                  <li className="text-gray-700 dark:text-gray-300 font-inter">
                    Tailwind CSS
                  </li>
                  <li className="text-gray-700 dark:text-gray-300 font-inter">
                    TypeScript
                  </li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 font-inter">
                  <FontAwesomeIcon icon={faServer} className="mr-2 text-blue-600 dark:text-blue-400" />
                  Backend
                </h3>
                <ul className="space-y-2">
                  <li className="text-gray-700 dark:text-gray-300 font-inter">
                    Node.js & Express
                  </li>
                  <li className="text-gray-700 dark:text-gray-300 font-inter">
                    Python & Django
                  </li>
                  <li className="text-gray-700 dark:text-gray-300 font-inter">
                    GraphQL
                  </li>
                  <li className="text-gray-700 dark:text-gray-300 font-inter">
                    PostgreSQL & MongoDB
                  </li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 font-inter">
                  <FontAwesomeIcon icon={faCloud} className="mr-2 text-blue-600 dark:text-blue-400" />
                  DevOps
                </h3>
                <ul className="space-y-2">
                  <li className="text-gray-700 dark:text-gray-300 font-inter">
                    AWS & Azure
                  </li>
                  <li className="text-gray-700 dark:text-gray-300 font-inter">
                    Docker & Kubernetes
                  </li>
                  <li className="text-gray-700 dark:text-gray-300 font-inter">
                    CI/CD Pipelines
                  </li>
                  <li className="text-gray-700 dark:text-gray-300 font-inter">
                    Infrastructure as Code
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 font-inter">
              Career Objectives
            </h2>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="mt-1 mr-3 text-blue-600 dark:text-blue-400" />
                  <p className="text-gray-700 dark:text-gray-300 font-inter">
                    Lead innovative projects in cloud-native architecture and
                    microservices
                  </p>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="mt-1 mr-3 text-blue-600 dark:text-blue-400" />
                  <p className="text-gray-700 dark:text-gray-300 font-inter">
                    Mentor and grow engineering teams while fostering a culture
                    of continuous learning
                  </p>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="mt-1 mr-3 text-blue-600 dark:text-blue-400" />
                  <p className="text-gray-700 dark:text-gray-300 font-inter">
                    Contribute to open-source projects and share knowledge
                    through technical writing
                  </p>
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 font-inter">
              Achievements & Certifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 font-inter">
                  <FontAwesomeIcon icon={faTrophy} className="mr-2 text-blue-600 dark:text-blue-400" />
                  Notable Achievements
                </h3>
                <ul className="space-y-3">
                  <li className="text-gray-700 dark:text-gray-300 font-inter">
                    Led development of scalable e-commerce platform serving 1M+
                    users
                  </li>
                  <li className="text-gray-700 dark:text-gray-300 font-inter">
                    Reduced cloud infrastructure costs by 40% through
                    optimization
                  </li>
                  <li className="text-gray-700 dark:text-gray-300 font-inter">
                    Speaker at multiple tech conferences on modern web
                    architecture
                  </li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 font-inter">
                  <FontAwesomeIcon icon={faCertificate} className="mr-2 text-blue-600 dark:text-blue-400" />
                  Certifications
                </h3>
                <ul className="space-y-3">
                  <li className="text-gray-700 dark:text-gray-300 font-inter">
                    AWS Solutions Architect Professional
                  </li>
                  <li className="text-gray-700 dark:text-gray-300 font-inter">
                    Google Cloud Professional Developer
                  </li>
                  <li className="text-gray-700 dark:text-gray-300 font-inter">
                    Microsoft Azure Solutions Expert
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default MainComponent;