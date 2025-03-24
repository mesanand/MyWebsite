"use client";
import React from "react";
import ProjectCard from "../../components/project-card";
import Navigation from "../../components/navigation";

function MainComponent() {
  const projects = [
    {
      image: "https://media.licdn.com/dms/image/v2/D4E2DAQHoH8yP3uotFw/profile-treasury-document-cover-images_480/B4EZWhiuxzG0A0-/0/1742171998305?e=1743386400&v=beta&t=AkMxYSW0lEbRHE3ikWxvdLjQP8ejyQ_ExSvPcH6jdoA",
      title: "EmberAid",
      description:
        "An AI-powered platform that automates insurance claims for wildfire victims—tackling a $70B+ problem where 72,000 homes fail to claim insurance and 150,000 people go homeless due to disasters.",
      technologies: ["OpenAI Agents", "YOLO V8", "Web Scraping", "Data Visualization"],
      demoLink: "",
      repoLink: "https://github.com/PalashAwasthi05/EmberAid",
    },
    {
      image: "https://media.licdn.com/dms/image/v2/D4E2DAQEgovg_0nJ84w/profile-treasury-image-shrink_160_160/B4EZUrJb6YHUAs-/0/1740185650336?e=1743386400&v=beta&t=IGNSj2SDZncTINvKtIMRQJkPtycrL15FrKoQ9H89Pe0",
      title: "Lumen",
      description:
        "An application that brings the safest and quickest path through neighborhoods, making it easier for tourists, travelers, and especially college students",
      technologies: ["JavaScript", "OpenAI API", "Flask", "React.js", "Python", "Tesseract"],
      demoLink: "https://www.youtube.com/watch?v=lcP4n6n1Ke8&ab_channel=AudreyN",
      repoLink: "https://github.com/audreynge/Lumen",
    },
    {
      image: "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/003/223/181/datas/gallery.jpg",
      title: "Inquisiv.",
      description:
        "An AI-powered dropshipping platform that automates product discovery, sentiment analysis, and ad generation by integrating web scraping, machine learning models, and a dynamic React-based interface.",
      technologies: ["React.js", "Flask", "NLP", "Web Scraping", "Playwright", "Bootstrap"],
      demoLink: "https://devpost.com/software/inquisiv",
      repoLink: "https://github.com/Sadfahlsdj/Finhacks_2025.git",
    },
    {
      image: "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/003/260/209/datas/gallery.jpg",
      title: "TrackNTrip",
      description:
        "Optimizing road trips with AI, TrackNTrip finds the best gas stops for cost, time, and sustainability while enhancing travel with AI-generated landmark storytelling and gamification.",
      technologies: ["XGBoost", "Express.js", "LLaMa", "OSMnx", "React.js", "Node.js"],
      demoLink: "https://www.youtube.com/watch?v=i76_YUxuZAc",
      repoLink: "https://github.com/username/task-manager",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation activeLink="projects" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 font-inter">
            My Projects
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 font-inter">
            See what I've built!
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainComponent;