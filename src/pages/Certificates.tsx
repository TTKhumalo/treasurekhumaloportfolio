import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, ArrowLeft } from "lucide-react";

import cert1 from "@/assets/certificates/advanced-learning-algorithms.jpg";
import cert2 from "@/assets/certificates/ai-essentials.jpg";
import cert3 from "@/assets/certificates/ai-for-everyone.jpg";
import cert4 from "@/assets/certificates/ai-foundations-prompt-engineering.jpg";
import cert5 from "@/assets/certificates/generative-ai-llm.jpg";
import cert6 from "@/assets/certificates/intro-generative-ai.jpg";
import cert7 from "@/assets/certificates/intro-responsible-ai.jpg";
import cert8 from "@/assets/certificates/supervised-machine-learning.jpg";
import cert9 from "@/assets/certificates/trustworthy-ai.jpg";
import cert10 from "@/assets/certificates/system-development-nqf5.jpg";

const certificates = [
  {
    title: "Advanced Learning Algorithms",
    issuer: "DeepLearning.AI & Stanford University",
    date: "Oct 13, 2025",
    image: cert1,
    pdf: "/certificates/Advanced_Learning_Algorithms.pdf",
    color: "hsl(25 60% 35%)"
  },
  {
    title: "AI Essentials",
    issuer: "Intel",
    date: "Sep 11, 2025",
    image: cert2,
    pdf: "/certificates/AI_Essentils.pdf",
    color: "hsl(200 60% 45%)"
  },
  {
    title: "AI For Everyone",
    issuer: "DeepLearning.AI",
    date: "Aug 26, 2025",
    image: cert3,
    pdf: "/certificates/AI_for_Everyone.pdf",
    color: "hsl(280 60% 45%)"
  },
  {
    title: "AI Foundations: Prompt Engineering with ChatGPT",
    issuer: "Arizona State University",
    date: "Sep 17, 2025",
    image: cert4,
    pdf: "/certificates/AI_Foundations_Prompt_Engineering_with_ChatGPT.pdf",
    color: "hsl(340 60% 45%)"
  },
  {
    title: "Generative AI with Large Language Models",
    issuer: "DeepLearning.AI & AWS",
    date: "Sep 11, 2025",
    image: cert5,
    pdf: "/certificates/Generative_AI_with_Large_Language_Models.pdf",
    color: "hsl(160 60% 40%)"
  },
  {
    title: "Introduction to Generative AI",
    issuer: "Google Cloud",
    date: "Sep 9, 2025",
    image: cert6,
    pdf: "/certificates/Intoduction_to_Generative_AI.pdf",
    color: "hsl(120 60% 40%)"
  },
  {
    title: "Introduction to Responsible AI",
    issuer: "Google Cloud",
    date: "Oct 13, 2025",
    image: cert7,
    pdf: "/certificates/Introiduction_to_Responsive_AI.pdf",
    color: "hsl(40 70% 50%)"
  },
  {
    title: "Supervised Machine Learning: Regression and Classification",
    issuer: "DeepLearning.AI & Stanford",
    date: "Oct 8, 2025",
    image: cert8,
    pdf: "/certificates/Supervised_Machine_Learning_Regression_and_Classification.pdf",
    color: "hsl(260 60% 50%)"
  },
  {
    title: "Trustworthy AI: Managing Bias, Ethics, and Accountability",
    issuer: "Johns Hopkins University",
    date: "Oct 13, 2025",
    image: cert9,
    pdf: "/certificates/Trustworthy_AI_Managing_Bias_Ethics_and_Accountability.pdf",
    color: "hsl(0 60% 45%)"
  },
  {
    title: "National Certificate: Systems Development",
    issuer: "MICT SETA - NQF Level 5",
    date: "Mar 28, 2024",
    image: cert10,
    pdf: "/certificates/System_Development_NQF5.pdf",
    color: "hsl(180 60% 40%)"
  }
];

const Certificates = () => {
  const [visibleCerts, setVisibleCerts] = useState<number[]>([]);
  
  useEffect(() => {
    certificates.forEach((_, index) => {
      setTimeout(() => {
        setVisibleCerts(prev => [...prev, index]);
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
          <h1 className="text-5xl font-bold mb-4">AI Certificates</h1>
          <p className="text-xl text-muted-foreground">
            Professional certifications from leading institutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {certificates.map((cert, index) => (
            <Card
              key={index}
              className={`certificate-card overflow-hidden cursor-pointer transition-all duration-500 ${
                visibleCerts.includes(index) ? 'certificate-visible' : 'certificate-hidden'
              }`}
              style={{ 
                borderColor: cert.color,
                borderWidth: '2px'
              }}
            >
              <div className="certificate-inner">
                <div className="certificate-front p-6">
                  <div className="mb-4 overflow-hidden rounded-lg shadow-lg">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: cert.color }}>
                    {cert.title}
                  </h3>
                  <p className="text-sm mb-1">{cert.issuer}</p>
                  <p className="text-xs text-muted-foreground">{cert.date}</p>
                </div>
                
                <div className="certificate-back p-6 flex flex-col items-center justify-center" style={{ backgroundColor: cert.color }}>
                  <h3 className="text-xl font-bold text-white mb-4 text-center">
                    {cert.title}
                  </h3>
                  <a
                    href={cert.pdf}
                    download
                    className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
                  >
                    <Download size={20} />
                    Download PDF
                  </a>
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

export default Certificates;
