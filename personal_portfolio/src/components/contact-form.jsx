"use client";
import React, { useState } from "react";

const MainComponent = ({ onSubmit, className }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      try {
        await onSubmit?.(formData);
        setSuccess(true);
        setFormData({ name: '', email: '', message: '' });
      } catch (error) {
        setErrors({ submit: 'Failed to send message. Please try again.' });
      }
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <div className={`max-w-lg mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md ${className}`}>
      {success ? (
        <div className="text-center p-6">
          <i className="fas fa-check-circle text-green-500 text-4xl mb-4"></i>
          <p className="text-lg font-medium text-gray-900 dark:text-white font-inter">Thank you for your message!</p>
          <p className="text-gray-600 dark:text-gray-300 mt-2 font-inter">We'll get back to you soon.</p>
          <button
            onClick={() => setSuccess(false)}
            className="mt-4 text-blue-600 hover:text-blue-700 font-medium font-inter"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-inter">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-md shadow-sm py-2 px-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white border ${
                errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
              } focus:ring-2 focus:ring-blue-500 font-inter`}
            />
            {errors.name && <p className="mt-1 text-sm text-red-500 font-inter">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-inter">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-md shadow-sm py-2 px-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white border ${
                errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
              } focus:ring-2 focus:ring-blue-500 font-inter`}
            />
            {errors.email && <p className="mt-1 text-sm text-red-500 font-inter">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-inter">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-md shadow-sm py-2 px-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white border ${
                errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
              } focus:ring-2 focus:ring-blue-500 font-inter`}
            />
            {errors.message && <p className="mt-1 text-sm text-red-500 font-inter">{errors.message}</p>}
          </div>

          {errors.submit && <p className="text-sm text-red-500 font-inter">{errors.submit}</p>}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed font-inter"
          >
            {isSubmitting ? (
              <>
                <i className="fas fa-spinner fa-spin mr-2"></i>
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </button>
        </form>
      )}
    </div>
  );
}

const StoryComponent= () => {
  const handleSubmit = async (formData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Form submitted:', formData);
        resolve();
      }, 1000);
    });
  };

  return (
    <div className="p-4 space-y-8">
      <MainComponent onSubmit={handleSubmit} />
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