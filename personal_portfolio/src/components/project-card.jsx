"use client";
import React from "react";

const MainComponent = ({ image, title, description, technologies, demoLink, repoLink }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 hover:translate-y-[-6px]">
      <img 
        src={image} 
        alt={`Preview of ${title} project`}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white font-inter">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 font-inter">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300 font-inter"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 font-inter"
          >
            <i className="fas fa-external-link-alt"></i>
            Live Demo
          </a>
          <a
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 font-inter"
          >
            <i className="fab fa-github"></i>
            Repository
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Index({ image, title, description, technologies, demoLink, repoLink }) {
  return (
    <div>
      <MainComponent { ...{ image, title, description, technologies, demoLink, repoLink }} />
    </div>
  );
}
