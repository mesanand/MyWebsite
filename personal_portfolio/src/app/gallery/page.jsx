"use client";
import React from "react";
import ProjectCard from "../../components/project-card";
import Navigation from "../../components/navigation";

function MainComponent() {
  const posts = [
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
      image: "/chat-app.jpg",
      title: "AI-Powered Chat Application",
      description:
        "An intelligent chat platform featuring real-time messaging and AI-driven conversation assistance.",
      technologies: ["Next.js", "OpenAI API", "WebSocket", "PostgreSQL"],
      demoLink: "https://ai-chat-demo.com",
      repoLink: "https://github.com/username/ai-chat",
    },
    {
      image: "/portfolio.jpg",
      title: "Portfolio Website",
      description:
        "A responsive portfolio website showcasing projects and professional achievements with modern design.",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      demoLink: "https://portfolio-demo.com",
      repoLink: "https://github.com/username/portfolio",
    },
    {
      image: "/task-manager.jpg",
      title: "Task Management System",
      description:
        "A comprehensive task management solution with team collaboration and progress tracking features.",
      technologies: ["React", "Redux", "Express", "MySQL"],
      demoLink: "https://task-manager-demo.com",
      repoLink: "https://github.com/username/task-manager",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation activeLink="projects" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 font-inter">
            My Gallery
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 font-inter">
            See what I've built!
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <ProjectCard key={index} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainComponent;