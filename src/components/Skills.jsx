import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Software Engineering",
      skills: [
        { name: "Python", level: "expert" },
        { name: "Full Stack Development", level: "advanced" },
        { name: "Architecture Design", level: "advanced" },
        { name: "RESTful APIs", level: "advanced" },
        { name: "Agile Development", level: "advanced" },
        { name: "Git Version Control", level: "advanced" }
      ]
    },
    {
      title: "Data Science",
      skills: [
        { name: "Machine Learning", level: "advanced" },
        { name: "Deep Learning", level: "advanced" },
        { name: "Natural Language Processing", level: "advanced" },
        { name: "Recommendation Systems", level: "advanced" },
        { name: "Data Preprocessing", level: "advanced" },
        { name: "Data Visualization", level: "advanced" }
      ] 
    },
    {
      title: "Cloud Computing",
      skills: [
        { name: "Google Cloud Platform", level: "advanced" },
        { name: "Serverless & Event-Driven Systems", level: "advanced" },
        { name: "Terraform & Infrastructure as Code", level: "advanced" },
        { name: "Docker & Containerization", level: "intermediate" },
        { name: "Cloud-Init & Ansible", level: "intermediate" },
        { name: "Amazon Web Services", level: "intermediate" }
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
    <section id="skills" className="section section-dark">
      <div className="section-container">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="card">
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