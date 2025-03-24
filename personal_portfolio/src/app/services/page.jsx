"use client";
import React from "react";
import ServiceCard from "../../components/service-card";
import Navigation from "../../components/navigation";

function MainComponent() {
  const services = [
    {
      icon: "fas fa-layer-group",
      title: "Full-Stack Development",
      description:
        "End-to-end development of web applications with modern technologies and best practices",
      experience: "10+ years",
      caseStudies: [
        "Built scalable e-commerce platform serving 100k+ users",
        "Developed custom CRM system for enterprise client",
      ],
    },
    {
      icon: "fas fa-comments",
      title: "Technical Consulting",
      description:
        "Strategic technology advisory and solution planning for businesses",
      experience: "8+ years",
      caseStudies: [
        "Guided startup through technical stack selection and implementation",
        "Provided roadmap for legacy system modernization",
      ],
    },
    {
      icon: "fas fa-code",
      title: "Code Review & Optimization",
      description: "Comprehensive code analysis and performance optimization",
      experience: "7+ years",
      caseStudies: [
        "Reduced application load time by 60% through optimization",
        "Implemented automated code review process for development team",
      ],
    },
    {
      icon: "fas fa-sitemap",
      title: "Architecture Design",
      description: "Scalable and maintainable system architecture planning",
      experience: "9+ years",
      caseStudies: [
        "Designed microservices architecture for fintech platform",
        "Created cloud-native architecture for healthcare application",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation activeLink="services" />
      <div className="pt-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="py-12">
          <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12 font-inter">
            Our Services
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;