"use client";
import React from "react";


const MainComponent = ({ image, title, description, link }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-800">
      <img 
        src={image} 
        alt={`Preview of ${title} project`}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white font-inter">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 font-inter">{description}</p>
        <div className="flex space-x-4">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 font-inter"
          >
            <i className="fas fa-external-link-alt"></i>
            Link
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Index({ image, title, description, link }) {
  return (
    <div>
      <MainComponent { ...{ image, title, description, link }} />
    </div>
  );
}