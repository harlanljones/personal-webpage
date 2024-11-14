import React from 'react';
import { Calendar, Briefcase, GraduationCap } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      type: 'education',
      title: 'Bachelor of Science, Computer Engineering',
      organization: 'Boston University',
      duration: 'August 2021 - May 2025',
      location: 'Boston, MA',
      details: [
        'Relevant Coursework: Software Engineering, Machine Learning, Cloud Computing, Deep Learning',
        'GPA: 3.1/4.0'
      ],
      icon: GraduationCap
    },
    {
      type: 'work',
      title: 'Data Science Intern',
      organization: 'Waiter.com',
      duration: 'Summer 2023',
      location: 'Sunnyvale, CA',
      details: [
        'Developed a recommendation system for Waiter.com using machine learning',
        'Technologies used: Python, TensorFlow, scikit-learn, PyTorch, Matplotlib'
      ],
      icon: Briefcase
    }
  ];

  return (
    <section id="experience" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Experience & Education</h2>
        
        {/* Timeline */}
        <div className="relative">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-8 flex gap-8">
              <div className="flex-none">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <exp.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="flex-grow">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.duration}</span>
                </div>
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <div className="text-lg text-primary">{exp.organization}</div>
                <div className="text-gray-500 mb-2">{exp.location}</div>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {exp.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;