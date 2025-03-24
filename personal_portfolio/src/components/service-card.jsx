"use client";
import React from "react";


const MainComponent = ({ icon, title, description, experience, caseStudies }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 flex items-center justify-center bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
          <i className={`${icon} text-2xl text-blue-600 dark:text-blue-300`}></i>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 font-inter">{title}</h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 font-inter">{description}</p>
        
        <div className="w-full border-t border-gray-200 dark:border-gray-700 my-4"></div>
        
        <div className="w-full">
          <p className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2 font-inter">
            Experience: {experience}
          </p>
          
          <div className="space-y-2">
            {caseStudies.map((study, index) => (
              <div 
                key={index}
                className="text-sm bg-gray-50 dark:bg-gray-700 p-3 rounded-md"
              >
                <p className="text-gray-700 dark:text-gray-300 font-inter">{study}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const StoryComponent = () => {
  const sampleServices = [
    {
      icon: "fas fa-code",
      title: "Web Development",
      description: "Modern and responsive web applications built with cutting-edge technologies",
      experience: "8+ years",
      caseStudies: [
        "Built an e-commerce platform with 50k+ monthly users",
        "Developed a real-time dashboard for data analytics"
      ]
    },
    {
      icon: "fas fa-mobile-alt",
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android",
      experience: "5+ years",
      caseStudies: [
        "Created a fitness tracking app with 100k+ downloads",
        "Developed a food delivery platform"
      ]
    },
    {
      icon: "fas fa-cloud",
      title: "Cloud Solutions",
      description: "Scalable and secure cloud infrastructure and deployment",
      experience: "6+ years",
      caseStudies: [
        "Migrated legacy systems to cloud architecture",
        "Implemented serverless solutions for startup"
      ]
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
      {sampleServices.map((service, index) => (
        <MainComponent key={index} {...service} />
      ))}
    </div>
  );
};


export default function Index() {
  return (
    <div>
      <StoryComponent />
    </div>
  );
}