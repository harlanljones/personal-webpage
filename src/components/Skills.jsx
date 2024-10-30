import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Machine Learning",
      skills: [
        { name: "Python", level: 95 },
        { name: "Natural Language Processing", level: 80 },
        { name: "Reinforcement Learning", level: 85 },
        { name: "Feature Engineering", level: 90 },
        { name: "Deep Learning", level: 85 }
      ]
    },
    {
      title: "Cloud Computing",
      skills: [
        { name: "Google Cloud", level: 85 },
        { name: "AWS", level: 80 },
        { name: "Cloud Storage", level: 85 },
        { name: "Terraform", level: 80 },
        { name: "Docker", level: 70 }
      ]
    },
    {
      title: "Data Science",
      skills: [
        { name: "Data Wrangling", level: 85 },
        { name: "Data Visualization", level: 80 },
        { name: "SQL Databases", level: 70 },
        { name: "Hypothesis Testing", level: 85 },
        { name: "Statistical Analysis", level: 80 }
      ]
    }
  ];

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
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-primary rounded-full h-2 transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      />
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