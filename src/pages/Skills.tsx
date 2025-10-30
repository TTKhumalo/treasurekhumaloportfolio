import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from "recharts";
import Footer from "@/components/Footer";

const Skills = () => {
  const [isHovered, setIsHovered] = useState(false);

  const chartData = [
    { name: "Sound Editing", value: 75, fill: "hsl(25 60% 35%)" },
    { name: "Photoshop", value: 72, fill: "hsl(30 65% 45%)" },
    { name: "Video Editing", value: 73, fill: "hsl(35 70% 50%)" },
    { name: "Programming", value: 79, fill: "hsl(20 55% 40%)" },
    { name: "Web Design", value: 85, fill: "hsl(25 60% 30%)" },
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

        {/* Sunburst Chart */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="p-8 bg-gradient-card border-2 border-foreground/20">
            <h3 className="text-2xl font-semibold mb-8 text-center text-foreground">Skill Proficiency</h3>
            <div 
              className="w-full h-[500px] transition-transform duration-700 ease-in-out"
              style={{ transform: isHovered ? 'rotate(360deg)' : 'rotate(0deg)' }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart
                  cx="50%"
                  cy="50%"
                  innerRadius="20%"
                  outerRadius="90%"
                  data={chartData}
                  startAngle={90}
                  endAngle={450}
                >
                  <RadialBar
                    background
                    dataKey="value"
                    cornerRadius={10}
                  />
                  <Legend
                    iconSize={16}
                    layout="vertical"
                    verticalAlign="middle"
                    align="right"
                    formatter={(value, entry: any) => (
                      <span className="text-foreground font-medium">
                        {value} ({entry.payload.value}%)
                      </span>
                    )}
                  />
                </RadialBarChart>
              </ResponsiveContainer>
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
