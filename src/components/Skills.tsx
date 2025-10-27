import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Network, Palette } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Scripting",
      icon: Code2,
      color: "text-primary",
      skills: ["Python", "JavaScript", "TypeScript", "React", "HTML/CSS", "Node.js"]
    },
    {
      title: "Database Management",
      icon: Database,
      color: "text-secondary",
      skills: ["SQL", "Database Design", "Data Modeling", "Query Optimization"]
    },
    {
      title: "System Administration",
      icon: Network,
      color: "text-primary",
      skills: ["Networking", "System Configuration", "Technical Support", "Troubleshooting"]
    },
    {
      title: "Multimedia & Design",
      icon: Palette,
      color: "text-secondary",
      skills: ["Digital Editing", "UI/UX Design", "Multimedia Production", "Content Creation"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive skill set spanning development, systems, and design
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className="p-6 bg-gradient-card border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-glow group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors">
                    <Icon className={`w-6 h-6 ${category.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold pt-2">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="bg-muted hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Soft Skills Section */}
        <Card className="mt-8 p-8 bg-gradient-card border-primary/20">
          <h3 className="text-2xl font-semibold mb-6 text-center">Core Competencies</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              "Problem Solving",
              "Technical Support",
              "Team Collaboration",
              "Continuous Learning",
              "Project Management",
              "Communication",
              "Attention to Detail",
              "Creative Thinking"
            ].map((skill, index) => (
              <Badge
                key={index}
                className="px-4 py-2 bg-gradient-primary hover:shadow-glow transition-all"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
