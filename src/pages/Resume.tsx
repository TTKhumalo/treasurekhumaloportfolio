import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, ArrowLeft, FileText } from "lucide-react";

const Resume = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 300);
  }, []);

  const resume = {
    title: "Professional Resume",
    description: "Treasure Khumalo - Full Stack Developer & DevOps Engineer",
    file: "/resume/Treasure_Khumalo_CV_V2.pdf",
    color: "hsl(180 60% 45%)"
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-16 animate-fade-in">
          <Link to="/">
            <Button variant="outline" className="mb-6 inline-flex items-center gap-2">
              <ArrowLeft size={20} />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-5xl font-bold mb-4">Resume</h1>
          <p className="text-xl text-muted-foreground">
            Professional CV and career experience
          </p>
        </div>

        <div className="flex justify-center max-w-md mx-auto">
          <Card
            className={`certificate-card overflow-hidden cursor-pointer transition-all duration-500 w-full ${
              isVisible ? 'certificate-visible' : 'certificate-hidden'
            }`}
            style={{ 
              borderColor: resume.color,
              borderWidth: '2px'
            }}
          >
            <div className="certificate-inner">
              <div className="certificate-front p-6">
                <div className="mb-4 flex items-center justify-center h-48 bg-gradient-to-br from-background to-muted rounded-lg shadow-lg">
                  <FileText size={80} style={{ color: resume.color }} />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: resume.color }}>
                  {resume.title}
                </h3>
                <p className="text-sm text-muted-foreground">{resume.description}</p>
              </div>
              
              <div className="certificate-back p-6 flex flex-col items-center justify-center" style={{ backgroundColor: resume.color }}>
                <h3 className="text-xl font-bold text-white mb-4 text-center">
                  {resume.title}
                </h3>
                <div className="flex flex-col gap-3 w-full">
                  <a
                    href={resume.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
                  >
                    View PDF
                  </a>
                  <a
                    href={resume.file}
                    download
                    className="inline-flex items-center justify-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
                  >
                    <Download size={20} />
                    Download PDF
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Resume;
