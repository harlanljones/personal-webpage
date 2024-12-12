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
        { name: "Data Visualization", level: "expert" },
        { name: "Data Wrangling", level: "advanced" },
        { name: "Hypothesis Testing", level: "advanced" },
        { name: "Statistical Analysis", level: "advanced" },
        { name: "Databases", level: "advanced" }
      ]
    },
    {
      title: "Cloud Computing",
      skills: [
        { name: "Google Cloud", level: "advanced" },
        { name: "Docker and Containerization", level: "advanced" },
        { name: "Microservices Architecture", level: "advanced" },
        { name: "Terraform and IaC", level: "advanced" },
        { name: "AWS", level: "intermediate" }
      ]
    }
  ];

  const getLevelPercentage = (level) => {
    const percentages = {
      expert: 100,
      advanced: 80,
      intermediate: 60
    };
    return percentages[level];
  };

  return (
    <section id="skills" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="card p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-6 text-primary">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-500 capitalize">{skill.level}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${getLevelPercentage(skill.level)}%` }}
                      ></div>
                    </div>
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