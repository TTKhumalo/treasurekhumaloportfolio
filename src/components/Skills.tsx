import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";

const Skills = () => {
  const skillsWithPercentages = [
    { name: "Sound Editing", percentage: 75, color: "hsl(25 60% 35%)" },
    { name: "Photoshop", percentage: 72, color: "hsl(25 60% 40%)" },
    { name: "Video Editing", percentage: 73, color: "hsl(25 60% 35%)" },
    { name: "Programming", percentage: 79, color: "hsl(25 60% 40%)" },
    { name: "Web Design", percentage: 85, color: "hsl(25 60% 35%)" },
  ];

  const [animatedPercentages, setAnimatedPercentages] = useState(
    skillsWithPercentages.map(() => 0)
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedPercentages(skillsWithPercentages.map(skill => skill.percentage));
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="skills" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Technical Skills
          </h2>
          <p className="text-foreground/80 text-lg max-w-2xl mx-auto">
            Comprehensive skill set with measurable proficiency levels
          </p>
        </div>

        {/* Animated Skill Graphs */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="p-8 bg-gradient-card border-2 border-foreground/20">
            <h3 className="text-2xl font-semibold mb-8 text-center text-foreground">Skill Proficiency</h3>
            <div className="space-y-6">
              {skillsWithPercentages.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-medium text-foreground">{skill.name}</span>
                    <span className="text-lg font-bold text-foreground">{animatedPercentages[index]}%</span>
                  </div>
                  <div className="h-6 bg-background/50 rounded-full overflow-hidden border-2 border-foreground/30">
                    <div
                      className="h-full bg-primary transition-all duration-1000 ease-out flex items-center justify-end pr-2"
                      style={{ 
                        width: `${animatedPercentages[index]}%`,
                        backgroundColor: skill.color
                      }}
                    >
                      <div className="w-3 h-3 bg-foreground rounded-full animate-pulse" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
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
