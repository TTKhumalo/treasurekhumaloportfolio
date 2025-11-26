import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/Footer";
import Skills3DChart from "@/components/Skills3DChart";

const Skills = () => {
  const skillsData = [
    { name: "Sound Editing", value: 75, color: "#1e5a8e" },
    { name: "Photoshop", value: 90, color: "#f4c430" },
    { name: "Video Editing", value: 60, color: "#4caf50" },
    { name: "Programming", value: 88, color: "#e91e63" },
    { name: "Web Design", value: 50, color: "#ff6f3c" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Technical Skills
          </h2>
          <p className="text-foreground/80 text-lg max-w-2xl mx-auto">
            Comprehensive skill set with measurable proficiency levels
          </p>
        </div>

        {/* 3D Chart */}
        <div className="max-w-6xl mx-auto mb-16">
          <Card className="p-8 bg-gradient-card border-2 border-foreground/20">
            <h3 className="text-3xl font-bold mb-4 text-center text-foreground tracking-wider">
              STUNNING 3D CHART
            </h3>
            <p className="text-center text-muted-foreground mb-8">
              Drag to rotate • Auto-rotates when idle
            </p>
            <Skills3DChart skills={skillsData} />
            
            {/* Skill labels */}
            <div className="flex justify-center gap-8 mt-8 flex-wrap">
              {skillsData.map((skill, index) => (
                <div key={index} className="text-center">
                  <div 
                    className="w-4 h-4 rounded-full mx-auto mb-2" 
                    style={{ backgroundColor: skill.color }}
                  />
                  <p className="font-semibold text-foreground">{skill.name}</p>
                  <p className="text-2xl font-bold text-foreground">{skill.value}</p>
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
      </main>
      <Footer />
    </div>
  );
};

export default Skills;
