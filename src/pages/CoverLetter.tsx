import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, ArrowLeft, FileText } from "lucide-react";

const letters = [
  {
    title: "DevOps Engineer",
    description: "Cover letter tailored for DevOps and infrastructure roles",
    file: "/cover-letters/Cover_Letter_for_DevOps_Engineer.pdf",
    color: "hsl(200 60% 45%)"
  },
  {
    title: "Full Stack Development",
    description: "Cover letter focused on full stack development positions",
    file: "/cover-letters/Cover_Letter_for_Full_Stack_Development.pdf",
    color: "hsl(280 60% 45%)"
  },
  {
    title: "IT Support Technician",
    description: "Cover letter designed for IT support and technical roles",
    file: "/cover-letters/Cover_Letter_for_IT_Support_Technician.pdf",
    color: "hsl(160 60% 40%)"
  },
  {
    title: "Learnership Completion Letter",
    description: "Learnership completion certificate from Initium Venture Solution",
    file: "/letters/Learnership_Completion_Letter.pdf",
    color: "hsl(220 60% 45%)"
  }
];

const CoverLetter = () => {
  const [visibleLetters, setVisibleLetters] = useState<number[]>([]);
  
  useEffect(() => {
    letters.forEach((_, index) => {
      setTimeout(() => {
        setVisibleLetters(prev => [...prev, index]);
      }, index * 600);
    });
  }, []);

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
          <h1 className="text-5xl font-bold mb-4">Letters</h1>
          <p className="text-xl text-muted-foreground">
            Professional letters and documents for various roles and opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {letters.map((letter, index) => (
            <Card
              key={index}
              className={`certificate-card overflow-hidden cursor-pointer transition-all duration-500 ${
                visibleLetters.includes(index) ? 'certificate-visible' : 'certificate-hidden'
              }`}
              style={{ 
                borderColor: letter.color,
                borderWidth: '2px'
              }}
            >
              <div className="certificate-inner">
                <div className="certificate-front p-6">
                  <div className="mb-4 flex items-center justify-center h-48 bg-gradient-to-br from-background to-muted rounded-lg shadow-lg">
                    <FileText size={80} style={{ color: letter.color }} />
                  </div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: letter.color }}>
                    {letter.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{letter.description}</p>
                </div>
                
                <div className="certificate-back p-6 flex flex-col items-center justify-center" style={{ backgroundColor: letter.color }}>
                  <h3 className="text-xl font-bold text-white mb-4 text-center">
                    {letter.title}
                  </h3>
                  <div className="flex flex-col gap-3 w-full">
                    <a
                      href={letter.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
                    >
                      View PDF
                    </a>
                    <a
                      href={letter.file}
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
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CoverLetter;
