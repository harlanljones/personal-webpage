import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Cynthus: Orchestrating AI Applications on the Cloud",
      description: "A CLI capable of deploying AI applications on the cloud without the hassle of managing infrastructure. To be completed by December 2024.",
      tags: ["Cloud Computing", "Serverless, Event-Driven Architecture", "Docker and Containerization", "Terraform, Ansible, and Cloud-Init", "Google Cloud Platform"],
      github: "https://github.com/EC528-Fall-2024/orchestrating-ai-app-cloud",
      demo: "https://drive.google.com/file/d/13fSNSEtQF0qnoiahnbd-I3b9YrVk6Zgy/view?usp=sharing",
      image: "/images/cynthus.png"
    },
    {
      title: "Financial News Engine",
      description: "An open-source financial news aggregator and search engine for my ECE capstone project. To be completed by May 2025.",
      tags: ["Search Engine", "Full Stack", "NLP", "Data Science", "Vector Databases", "Recommendation Engines"],
      github: "https://github.com/rohankumar-1/search-engine",
      demo: "https://drive.google.com/file/d/1G8iIDGvsWVDQE3o4o-Mgq4T80k2MH-Z4/view?usp=sharing",
      image: "/images/financialnewsengine.png"
    }
  ];

  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card">
              <div className="relative group mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4 rounded-lg">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <ExternalLink className="h-6 w-6" />
                  </a>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;