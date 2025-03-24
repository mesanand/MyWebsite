"use client";
import React, { useState, useEffect } from "react";


const MainComponent = ({ activeLink = 'home' }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Experience', href: '/experience' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 font-inter bg-blue-100 dark:bg-blue-900/30
      ${isScrolled ? 'bg-white dark:bg-gray-900/30 shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-1 flex justify-center sm:justify-end">
            <div className="hidden sm:flex sm:space-x-8">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors duration-200
                    ${activeLink === link.name.toLowerCase()
                      ? 'text-gray-900 dark:text-white'
                      : 'text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
                    }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div className="sm:hidden flex items-center justify-center w-full">
            <select
              className="block w-32 py-2 px-3 border border-gray-200 dark:border-gray-700 rounded-md text-sm 
                bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
              value={activeLink}
              onChange={(e) => window.location.href = links.find(l => l.name.toLowerCase() === e.target.value)?.href}
            >
              {links.map((link) => (
                <option key={link.name} value={link.name.toLowerCase()}>
                  {link.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
}

const StoryComponent= () => {
  return (
    <div>
      <div className="pt-20">
        <MainComponent activeLink="home" />
      </div>
      <div>
        <MainComponent activeLink="about" />
      </div>
      <div>
        <MainComponent activeLink="projects" />
      </div>
    </div>
  );
};


export default function Index() {
  return (
    <div>
      <StoryComponent />
    </div>
  )
}