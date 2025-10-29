import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Graduate Job Application System",
      description: "AI-powered platform designed to streamline the graduate job application process. Features intelligent matching algorithms and automated application tracking.",
      tags: ["React", "Google AI Studio", "Python", "Google Colab"],
      githubUrl: "https://github.com/TTKhumalo",
      liveUrl: "https://grad-job-application.vercel.app/",
      featured: true
    },
    {
      title: "Education Management Platform",
      description: "Comprehensive educational application integrating AI capabilities for personalized learning experiences and administrative efficiency.",
      tags: ["React", "AI/ML", "Database Management", "Google Colab"],
      githubUrl: "https://github.com/TTKhumalo",
      liveUrl: "https://logic-league.vercel.app/",
      featured: true
    },
    {
      title: "AI Resume Builder",
      description: "Intelligent resume creation tool utilizing AI to generate professional, ATS-optimized resumes tailored to specific job requirements.",
      tags: ["React", "Google AI Studio", "NLP", "TypeScript"],
      githubUrl: "https://github.com/TTKhumalo",
      liveUrl: "https://logic-league-one.vercel.app/",
      featured: true
    },
    {
      title: "Sentiment Analysis Application",
      description: "Advanced sentiment analyzer leveraging machine learning to process and interpret emotional content from text data.",
      tags: ["Python", "Machine Learning", "React", "Google Colab"],
      githubUrl: "https://github.com/TTKhumalo",
      liveUrl: "https://logic-league.github.io/Logic-League-Sentiment-Analyzer/",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Bootcamp capstone projects showcasing AI/ML expertise and full-stack development skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`p-6 bg-gradient-card border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-glow group ${
                project.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <Badge className="bg-gradient-primary">Featured</Badge>
                  )}
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="outline"
                      className="border-primary/50"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary/50 hover:bg-primary/10"
                    asChild
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="bg-gradient-primary hover:shadow-glow transition-all"
                    asChild
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-primary/50 hover:bg-primary/10"
            asChild
          >
            <a
              href="https://github.com/orgs/Logic-League/repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
