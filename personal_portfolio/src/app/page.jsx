"use client";
import React, { useState, useEffect } from "react";
import Navigation from "../components/navigation";
import ParticleBackground from "../components/blocks/particle-background";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  const [isVisible, setIsVisible] = useState({
    hero: false,
    intro: false,
    connect: false,
  });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.dataset.section]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll("[data-section]");
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 relative">
      <ParticleBackground className="z-100"/>
      <Navigation activeLink="home" />

      <div
        data-section="hero"
        className={`pt-20 md:pt-32 px-4 md:px-8 max-w-7xl mx-auto transition-opacity duration-1000 ease-in-out ${
          isVisible.hero ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white font-inter">
              Hi, I'm Mehr Anand
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-inter">
              Full-Stack Developer & Software Consultant
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <div 
              className="relative w-full aspect-square max-w-[500px] mx-auto group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className={`absolute inset-0 bg-blue-100 dark:bg-blue-900 rounded-2xl transform transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                isHovered ? "rotate-12 scale-105" : "rotate-6"
              }`} />
              <img
                src="/mehr_headshot.jpg"
                alt="Mehr Anand - Professional headshot"
                className={`relative z-10 w-full h-full object-cover rounded-2xl shadow-xl transition-transform duration-500 ${
                  isHovered ? "scale-105" : ""
                }`}
              />
            </div>
          </div>
        </div>
      </div>

      <div
        data-section="intro"
        className={`py-20 px-4 md:px-8 max-w-7xl mx-auto transition-all duration-1000 ease-in-out ${
          isVisible.intro
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
        }`}
      >
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white font-inter">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 font-inter leading-relaxed">
            With over 2 years of experience in software development, I
            specialize in building scalable web applications and providing
            technical solutions to complex business problems. My expertise spans
            across modern web technologies, cloud architecture, and agile
            methodologies.
          </p>
        </div>
      </div>

      <div
        data-section="connect"
        className={`py-20 px-4 md:px-8 max-w-7xl mx-auto transition-all duration-1000 ease-in-out ${
          isVisible.connect
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
        }`}
      >
        <div className="text-center space-y-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white font-inter">
            Connect with Me
          </h2>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>
      </div>

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}