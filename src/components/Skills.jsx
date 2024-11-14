import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Machine Learning",
      skills: [
        { name: "Python", level: "expert" },
        { name: "Linear Algebra", level: "advanced" },
        { name: "Deep Learning", level: "advanced" },
        { name: "Natural Language Processing", level: "advanced" },
        { name: "Reinforcement Learning", level: "advanced" }
      ]
    },
    {
      title: "Data Science",
      skills: [
        { name: "Data Wrangling", level: "expert" },
        { name: "Data Visualization", level: "expert" },
        { name: "Hypothesis Testing", level: "advanced" },
        { name: "Statistical Analysis", level: "advanced" },
        { name: "SQL Databases", level: "intermediate" }
      ]
    },
    {
      title: "Cloud Computing",
      skills: [
        { name: "Google Cloud", level: "expert" },
        { name: "AWS", level: "advanced" },
        { name: "Serverless", level: "advanced" },
        { name: "Event-Driven Architecture", level: "advanced" },
        { name: "IaaC/Terraform", level: "intermediate" }
      ]
    }
  ];

  const getLevelDots = (level) => {
    const dots = {
      expert: 5,
      advanced: 4,
      intermediate: 3
    };
    return Array(dots[level]).fill('●').join(' ');
  };

  return (
    <section id="skills" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="card">
              <h3 className="text-xl font-semibold mb-6">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex justify-between items-center">
                    <span className="text-gray-700">{skill.name}</span>
                    <span className="text-primary tracking-wider">{getLevelDots(skill.level)}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;