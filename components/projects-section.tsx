import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "GAN-Enhanced Pneumonia Classifier",
    description: "Enhancing Pneumonia Detection with GAN-Generated Synthetic Chest X-rays",
    image: "/gradcam.png",
    technologies: ["Python", "Deep Learning", "PyTorch", "Data Engineering"],
    liveUrl: "https://github.com/harlanljones/gan-enhanced-pneumonia-classifier/blob/main/README.md",
  },
  {
    title: "Personal Website",
    description: "You found it! Initial template generated with v0",
    image: "/nextjstailwind.jpg",
    technologies: ["React", "TypeScript", "Next.js", "TailwindCSS", "HTML"],
    liveUrl: "https://github.com/harlanljones/personal-webpage",
  },
  {
    title: "Coming Soon",
    description: "",
    image: "",
    technologies: [],
    liveUrl: "",
  },
  {
    title: "Coming Soon",
    description: "",
    image: "",
    technologies: [],
    liveUrl: "",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300"></div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex-grow">
                    <CardTitle className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="currentColor">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                        <path
                          d="M8 12c0-2.21 1.79-4 4-4s4 1.79 4 4"
                          stroke="currentColor"
                          strokeWidth="1"
                          fill="none"
                        />
                        <path
                          d="M8 12c0 2.21 1.79 4 4 4s4-1.79 4-4"
                          stroke="currentColor"
                          strokeWidth="1"
                          fill="none"
                        />
                      </svg>
                      {project.title}
                    </CardTitle>
                    <CardDescription className="mt-2">{project.description}</CardDescription>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button size="sm" className="w-full">
                        Learn More
                      </Button>
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
