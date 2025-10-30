import { Card } from "@/components/ui/card";
import { GraduationCap, Briefcase, Target } from "lucide-react";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Driven by innovation and a passion for technology
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Education */}
          <Card className="p-6 bg-gradient-card border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-glow group">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Education</h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div>
                    <p className="font-medium text-foreground">National Diploma IT, Multimedia</p>
                    <p>Tshwane University of Technology, 2023</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">National Certificate</p>
                    <p>IT Systems Development, 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Experience */}
          <Card className="p-6 bg-gradient-card border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-glow group">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-secondary/20 group-hover:bg-secondary/30 transition-colors">
                <Briefcase className="w-6 h-6 text-secondary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Experience</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Completed comprehensive bootcamp focusing on AI/ML applications</p>
                  <p className="font-medium text-foreground">Key Projects:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Graduate Job Application System</li>
                    <li>Education Management Platform</li>
                    <li>AI-Powered Resume Builder</li>
                    <li>Sentiment Analysis Tool</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>

          {/* Career Objective */}
          <Card className="p-6 bg-gradient-card border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-glow group">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Career Goals</h3>
                <p className="text-sm text-muted-foreground">
                  Seeking opportunities in an innovative work environment that fosters continuous learning
                  and professional growth. Committed to contributing acquired skills for organizational
                  excellence while expanding expertise in AI/ML technologies.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Personal Details */}
        <Card className="p-8 bg-gradient-card border-primary/20">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold mb-4">Profile</h3>
              <div className="space-y-2 text-muted-foreground">
                <p><span className="text-foreground font-medium">Location:</span> Mamelodi, Pretoria</p>
                <p><span className="text-foreground font-medium">Languages:</span> English, IsiZulu, Sepedi</p>
                <p><span className="text-foreground font-medium">Age:</span> 30</p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold mb-4">Interests</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>• Chess enthusiast</p>
                <p>• Digital content creation and editing</p>
                <p>• Gaming and interactive media</p>
                <p>• Continuous learning in AI/ML</p>
              </div>
            </div>
          </div>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default About;
