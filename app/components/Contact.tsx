'use client';

import { useState } from 'react';
import { submitToGoogleSheet } from '@/lib/googleSheets';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await submitToGoogleSheet(formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', projectType: '', message: '' });
    } catch (error) {
      console.error(error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <h2 className="text-3xl font-bold text-center mb-4 dark:text-white">Let's Collaborate</h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
          Have a project in mind? I’d love to hear about it.
        </p>

        {/* Main Grid: Contact Info + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Info Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-yellow-100 rounded flex items-center justify-center text-yellow-600">
                  ✉️
                </div>
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-gray-600">zaraartistartist@gmail.com</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-yellow-100 rounded flex items-center justify-center text-yellow-600">
                  📞
                </div>
                <div>
                  <div className="font-medium">Phone</div>
                  <div className="text-gray-600">+92 327 9178535</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-yellow-100 rounded flex items-center justify-center text-yellow-600">
                  📍
                </div>
                <div>
                  <div className="font-medium">Studio</div>
                  <div className="text-gray-600">Islamabad , Pakistan</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">Your Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Project Type */}
              <div>
                <label htmlFor="projectType" className="block mb-2 text-sm font-medium text-gray-700">Project Type *</label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  <option value="Custom Garment Design">Custom Garment Design</option>
                  <option value="Textile Pattern Development">Textile Pattern Development</option>
                  <option value="Styling Consultation">Styling Consultation</option>
                  <option value="Freelance Collaboration">Freelance Collaboration</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">Tell me about your project *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Share your vision, timeline, and any specific requirements..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 font-bold rounded ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-primary hover:bg-[#c06a20] text-white'
                } flex items-center justify-center gap-2`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message →'}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <p className="text-green-600 text-center mt-4">Thank you! Your message has been sent.</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-600 text-center mt-4">Something went wrong. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}