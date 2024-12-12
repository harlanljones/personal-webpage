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
      details: ['GPA: 3.1/4.0'],
      coursework: [
        'Software Engineering',
        'Machine Learning',
        'Cloud Computing',
        'Deep Learning',
        'Applied Algorithms',
        'Statistics'
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
        'Researched and developed a recommendation system for Waiter.com using machine learning',
        'Technologies used: Python, TensorFlow, scikit-learn, PyTorch, Matplotlib'
      ],
      icon: Briefcase
    }
  ];

  return (
    <section id="experience" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">
          Experience & Education
          <div className="h-1 w-20 bg-primary mx-auto mt-4 rounded-full"></div>
        </h2>
        
        {/* Timeline */}
        <div className="relative">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="mb-12 flex gap-8 p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex-none">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center ring-4 ring-white">
                  <exp.icon className="w-7 h-7 text-primary" />
                </div>
              </div>
              <div className="flex-grow">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="font-medium">{exp.duration}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{exp.title}</h3>
                <div className="text-lg font-medium text-primary mb-1">{exp.organization}</div>
                <div className="text-gray-500 mb-4">{exp.location}</div>
                <ul className="list-disc list-outside ml-4 text-gray-600 space-y-2">
                  {exp.details.map((detail, idx) => (
                    <li key={idx} className="leading-relaxed">{detail}</li>
                  ))}
                </ul>
                
                {exp.coursework && (
                  <div className="mt-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Relevant Coursework</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.coursework.map((course, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;