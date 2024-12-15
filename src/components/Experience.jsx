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
        'Researched recommendation systems for Waiter.com using machine learning'
      ],
      concepts: [
        'Content-Based Filtering',
        'Natural Language Processing',
        'Data Wrangling',
        'Feature Engineering',
        'Model Evaluation'
      ],
      technologies: [
        'Python',
        'TensorFlow',
        'scikit-learn',
        'PyTorch',
        'Matplotlib'
      ],
      icon: Briefcase
    }
  ];

  return (
    <section id="experience" className="section section-light">
      <div className="section-container">
        <h2 className="section-title">Experience & Education</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="card h-full"
            >
              {/* Header with icon and duration */}
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-none">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                    <exp.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="font-medium">{exp.duration}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{exp.title}</h3>
                  <div className="text-lg font-medium text-primary">{exp.organization}</div>
                  <div className="text-gray-500">{exp.location}</div>
                </div>
              </div>

              {/* Details section */}
              <div className="text-gray-600 mb-6">
                {exp.details.map((detail, idx) => (
                  <p key={idx} className="leading-relaxed">{detail}</p>
                ))}
              </div>
              
              {/* New Concepts section for work experience */}
              {exp.concepts && (
                <div className="mt-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Concepts & Principles</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.concepts.map((concept, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors duration-200"
                      >
                        {concept}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Technologies section */}
              {exp.technologies && (
                <div className="mt-auto">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Coursework section */}
              {exp.coursework && (
                <div className="mt-auto">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Relevant Coursework</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.coursework.map((course, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors duration-200"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;