import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Jupyter Notebook Collection",
      description: "A variety of Jupyter Notebooks showcasing my work either for school or personal use. Continually updated.",
      tags: ["Python", "Machine Learning", "Data Science", "Data Analysis"],
      github: "https://github.com/yourusername/project1",
      demo: "https://project1.demo.com",
      image: "/api/placeholder/600/400"
    },
    {
      title: "Orchestrating AI Applications on the Cloud",
      description: "A CLI capable of deploying AI applications on the cloud without the hassle of managing infrastructure. To be completed by December 2024.",
      tags: ["Cloud", "Terraform", "Ansible", "Python"],
      github: "https://github.com/EC528-Fall-2024/orchestrating-ai-app-cloud",
      demo: "https://project2.demo.com",
      image: "/api/placeholder/600/400"
    },
    {
      title: "Financial News Engine",
      description: "An open-source financial news aggregator and search engine for my ECE capstone project. To be completed by May 2025.",
      tags: ["Elasticsearch", "Python", "NLP", "Recommenders"],
      github: "https://github.com/rohankumar-1/search-engine",
      demo: "https://project3.demo.com",
      image: "/api/placeholder/600/400"
    }
  ];

  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card group">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
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