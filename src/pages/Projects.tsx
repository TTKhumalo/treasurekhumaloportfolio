import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, FileText } from "lucide-react";
import Footer from "@/components/Footer";

const Projects = () => {
  const projects = [
    {
      title: "Graduate Job Application System",
      description: "AI-powered platform designed to streamline the graduate job application process. Features intelligent matching algorithms and automated application tracking.",
      tags: ["React", "Google AI Studio", "Python", "Google Colab"],
      githubUrl: "https://github.com/orgs/Logic-League/repositories",
      liveUrl: "https://grad-job-application.vercel.app/",
      documentationUrl: "https://capeitinitiative-my.sharepoint.com/:w:/g/personal/thubelihle_titi_capaciti_org_za/EXWl6ZBtlmVInZt9vo_hAY4BnWId_PSsnB4aGTGay-J6UA?e=OSgXyq",
      featured: true
    },
    {
      title: "Education Management Platform",
      description: "Comprehensive educational application integrating AI capabilities for personalized learning experiences and administrative efficiency.",
      tags: ["React", "AI/ML", "Database Management", "Google Colab"],
      githubUrl: "https://github.com/orgs/Logic-League/repositories",
      liveUrl: "https://logic-league.vercel.app/",
      documentationUrl: "https://capeitinitiative-my.sharepoint.com/:w:/g/personal/elonathemba_phosa_capaciti_org_za/EfBUCjOl8sxFgGsLEQg6hNYBEdZwzjItM5N8GBZHTXM20g?e=hQtlDN",
      featured: true
    },
    {
      title: "AI Resume Builder",
      description: "Intelligent resume creation tool utilizing AI to generate professional, ATS-optimized resumes tailored to specific job requirements.",
      tags: ["React", "Google AI Studio", "NLP", "TypeScript"],
      githubUrl: "https://github.com/orgs/Logic-League/repositories",
      liveUrl: "https://logic-league-one.vercel.app/",
      documentationUrl: "https://capeitinitiative-my.sharepoint.com/:w:/g/personal/treasure_khumalo_capaciti_org_za/EWzvDabcT4xJmHtDs4oybowBcvqlEsu2drbDJN799PmC_Q?e=LeXcMI",
      featured: true
    },
    {
      title: "Sentiment Analysis Application",
      description: "Advanced sentiment analyzer leveraging machine learning to process and interpret emotional content from text data.",
      tags: ["Python", "Machine Learning", "React", "Google Colab"],
      githubUrl: "https://github.com/orgs/Logic-League/repositories",
      liveUrl: "https://logic-league.github.io/Logic-League-Sentiment-Analyzer/",
      documentationUrl: "https://capeitinitiative-my.sharepoint.com/:w:/g/personal/treasure_khumalo_capaciti_org_za/EdB8LXx6aXlHk9TvjRKHITIBz-7laYhJMx3QIxMAcPxKgA?e=ovbBrT",
      featured: false
    },
    {
      title: "AI Predictive Maintenance System",
      description: "Interactive design showcase featuring UI/UX projects and prototypes built with modern design tools.",
      tags: ["Figma", "UI/UX", "Design Systems", "Prototyping"],
      githubUrl: "https://github.com/orgs/Logic-League/repositories",
      liveUrl: "https://crow-flask-51049066.figma.site/",
      documentationUrl: "https://capeitinitiative-my.sharepoint.com/:p:/g/personal/thobeka_zitha_capaciti_org_za/EW1g39CR3gpMlWE3_igHk1IBRi50iy1UAl7_LY0nSUbZ1g?e=NYAryD&wdLOR=cF3106D29-4C99-4CB3-BCEB-2690E502E768",
      featured: false
    },
    {
      title: "Loan Prediction System",
      description: "Machine learning classification model for predicting loan approvals using various financial and demographic features.",
      tags: ["Python", "Machine Learning", "Jupyter", "Classification"],
      githubUrl: "https://github.com/Logic-League/Loan-Prediction-Using-Classification-Machine-Learning-/blob/main/LoanPrediction_Logic_league%20(1).ipynb",
      liveUrl: "https://github.com/Logic-League/Loan-Prediction-Using-Classification-Machine-Learning-/blob/main/LoanPrediction_Logic_league%20(1).ipynb",
      documentationUrl: "https://capeitinitiative-my.sharepoint.com/:w:/g/personal/mthobisi_ntshakala_capaciti_org_za/EWW9DB8TR5ZNpIjYkixmUNkBjAdBUoCtWT9vA9mKGY2icg?e=05luNe",
      featured: false
    },
    {
      title: "AI Chatbot Assistant",
      description: "Conversational AI interface powered by natural language processing for automated customer interactions and support.",
      tags: ["AI", "Chatbot", "NLP", "Automation"],
      githubUrl: "https://github.com/orgs/Logic-League/repositories",
      liveUrl: "https://landbot.online/v3/H-3106021-L0BWBVHVKR7Y1AMH/index.html",
      documentationUrl: "https://capeitinitiative-my.sharepoint.com/:w:/g/personal/treasure_khumalo_capaciti_org_za/EWYUJXW0QNJGoVgDAQ8Hq5wBEJr-WUdCYajdkAP9hwf22A?e=YYtp2H",
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto px-4 py-12">
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

                <div className="flex flex-wrap gap-3 pt-4">
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
                    variant="outline"
                    size="sm"
                    className="border-primary/50 hover:bg-primary/10"
                    asChild
                  >
                    <a
                      href={project.documentationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <FileText className="w-4 h-4" />
                      Documentation
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
              href="https://github.com/Logic-League"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
