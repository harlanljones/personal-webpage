import React from 'react';
import { Mail, Github, Linkedin, Calendar, Phone, MapPin } from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Let's Connect</h3>
            <p className="text-gray-600">
              I'm always interested in hearing about new projects and opportunities.
              Feel free to reach out through any of the channels below.
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

          {/* Schedule Meeting Card */}
          <Card className="bg-white">
            <CardHeader>
              <h3 className="text-xl font-semibold">Schedule a Meeting</h3>
              <p className="text-gray-600">
                Let's discuss opportunities for collaboration
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
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
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;