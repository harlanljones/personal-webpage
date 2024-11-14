import React from 'react';
import { Mail, Github, Linkedin, Calendar, Users, Code, Briefcase } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Schedule Meeting Section */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Schedule a Meeting</h3>
              <p className="text-gray-600">
                Let's discuss your project or opportunities for collaboration
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600">
                I'm available for:
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-gray-600">
                  <Users className="h-5 w-5 mr-3 text-primary" />
                  <span>Project consultations</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Code className="h-5 w-5 mr-3 text-primary" />
                  <span>Technical discussions</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Briefcase className="h-5 w-5 mr-3 text-primary" />
                  <span>Collaboration opportunities</span>
                </div>
              </div>
              <a
                href="https://calendly.com/harlanljones"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 mt-4 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-secondary transition-colors"
              >
                Schedule Meeting
                <Calendar className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>

          {/* New Message Form Section */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-6">Leave a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-secondary transition-colors"
                >
                  Send Message
                  <Mail className="ml-2 h-5 w-5" />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-16 space-y-6">
          <h3 className="text-2xl font-semibold">Let's Connect</h3>
          <p className="text-gray-600">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <div className="space-y-4">
            <div className="flex items-center text-gray-600">
              <Mail className="h-5 w-5 mr-3" />
              <a href="mailto:harlanljones@gmail.com" className="hover:text-primary transition-colors">
                harlanljones@gmail.com
              </a>
            </div>
            <div className="flex items-center text-gray-600">
              <MapPin className="h-5 w-5 mr-3" />
              <span>Boston, MA</span>
            </div>
            <div className="flex space-x-4 pt-4">
              <a
                href="https://github.com/harlanljones"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;