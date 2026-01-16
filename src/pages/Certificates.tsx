import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, ArrowLeft, Folder, ChevronDown, ChevronRight } from "lucide-react";

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
import badge1 from "@/assets/certificates/ibm-ai-essentials-v2-badge.jpg";
import badge2 from "@/assets/certificates/ibm-software-engineering-essentials-badge.jpg";
import pd1 from "@/assets/certificates/active-listening.jpg";
import pd2 from "@/assets/certificates/developing-interpersonal-skills.jpg";
import pd3 from "@/assets/certificates/emotional-intelligence.jpg";
import pd4 from "@/assets/certificates/financial-planning.jpg";
import pd5 from "@/assets/certificates/professional-voice.jpg";
import pd6 from "@/assets/certificates/grit-growth-mindset.jpg";
import pd7 from "@/assets/certificates/personal-branding.jpg";
import pd8 from "@/assets/certificates/leading-with-impact.jpg";
import pd9 from "@/assets/certificates/managing-conflicts.jpg";
import pd10 from "@/assets/certificates/negotiation-skills.jpg";
import pd11 from "@/assets/certificates/positive-psychology.jpg";
import pd12 from "@/assets/certificates/job-interviews.jpg";
import pd13 from "@/assets/certificates/psychology-self.jpg";
import pd14 from "@/assets/certificates/creative-critical-thinking.jpg";
import pd15 from "@/assets/certificates/verbal-communication.jpg";
import pd16 from "@/assets/certificates/time-management.jpg";
import pd17 from "@/assets/certificates/professional-emails.jpg";
import ibm1 from "@/assets/certificates/developing-frontend-react.jpg";
import ibm2 from "@/assets/certificates/intro-cloud-computing.jpg";
import ibm3 from "@/assets/certificates/intro-html-css-js.jpg";
import ibm4 from "@/assets/certificates/intro-software-engineering.jpg";
import ibm5 from "@/assets/certificates/python-data-science-ai.jpg";

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  image: string;
  pdf: string;
  color: string;
}

interface CertificateCategory {
  name: string;
  color: string;
  certificates: Certificate[];
}

const certificateCategories: CertificateCategory[] = [
  {
    name: "Artificial Intelligence (AI) Bootcamp Certificates",
    color: "hsl(260 60% 50%)",
    certificates: [
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
      }
    ]
  },
  {
    name: "National Certificates",
    color: "hsl(180 60% 40%)",
    certificates: [
      {
        title: "National Certificate: Systems Development",
        issuer: "MICT SETA - NQF Level 5",
        date: "Mar 28, 2024",
        image: cert10,
        pdf: "/certificates/System_Development_NQF5.pdf",
        color: "hsl(180 60% 40%)"
      }
    ]
  },
  {
    name: "Professional Development Certificates",
    color: "hsl(45 80% 50%)",
    certificates: [
      {
        title: "Active Listening: Enhancing Communication Skills",
        issuer: "Coursera Instructor Network",
        date: "Sep 9, 2025",
        image: pd1,
        pdf: "/certificates/Active_Listening_Enhancing_Communication_Skills.pdf",
        color: "hsl(200 60% 45%)"
      },
      {
        title: "Developing Interpersonal Skills",
        issuer: "IBM",
        date: "Sep 15, 2025",
        image: pd2,
        pdf: "/certificates/Developing_Interpersonal_Skills.pdf",
        color: "hsl(210 80% 50%)"
      },
      {
        title: "Emotional Intelligence",
        issuer: "Arizona State University",
        date: "Sep 23, 2025",
        image: pd3,
        pdf: "/certificates/Emotional_Intelligence.pdf",
        color: "hsl(340 60% 45%)"
      },
      {
        title: "Financial Planning for Young Adults",
        issuer: "University of Illinois Urbana-Champaign",
        date: "2025",
        image: pd4,
        pdf: "/certificates/Financial_Planning_Young_Adults.pdf",
        color: "hsl(120 60% 40%)"
      },
      {
        title: "Finding Your Professional Voice: Confidence & Impact",
        issuer: "University of London",
        date: "Sep 21, 2025",
        image: pd5,
        pdf: "/certificates/Finding_Your_Professional_Voice.pdf",
        color: "hsl(280 60% 45%)"
      },
      {
        title: "Grit and Growth Mindset",
        issuer: "Arizona State University",
        date: "Oct 7, 2025",
        image: pd6,
        pdf: "/certificates/Grit_and_Growth_Mindset.pdf",
        color: "hsl(25 60% 45%)"
      },
      {
        title: "Introduction to Personal Branding",
        issuer: "University of Virginia",
        date: "Sep 21, 2025",
        image: pd7,
        pdf: "/certificates/Introduction_to_Personal_Branding.pdf",
        color: "hsl(160 60% 40%)"
      },
      {
        title: "Leading with Impact: Team Dynamics, Strategy and Ethics",
        issuer: "Coursera Instructor Network",
        date: "Sep 21, 2025",
        image: pd8,
        pdf: "/certificates/Leading_with_Impact.pdf",
        color: "hsl(0 60% 45%)"
      },
      {
        title: "Managing Conflicts with Cultural and Emotional Intelligence",
        issuer: "University of Maryland",
        date: "Oct 6, 2025",
        image: pd9,
        pdf: "/certificates/Managing_Conflicts.pdf",
        color: "hsl(45 70% 50%)"
      },
      {
        title: "Negotiation Skills: Negotiate and Resolve Conflict",
        issuer: "Macquarie University",
        date: "Oct 12, 2025",
        image: pd10,
        pdf: "/certificates/Negotiation_Skills.pdf",
        color: "hsl(260 60% 50%)"
      },
      {
        title: "Positive Psychology: Resilience Skills",
        issuer: "University of Pennsylvania",
        date: "Oct 7, 2025",
        image: pd11,
        pdf: "/certificates/Positive_Psychology_Resilience_Skills.pdf",
        color: "hsl(180 60% 40%)"
      },
      {
        title: "Preparation for Job Interviews",
        issuer: "Coursera Project Network",
        date: "Sep 30, 2025",
        image: pd12,
        pdf: "/certificates/Preparation_for_Job_Interviews.pdf",
        color: "hsl(320 60% 50%)"
      },
      {
        title: "Psychology of the Self",
        issuer: "American Psychological Association",
        date: "2025",
        image: pd13,
        pdf: "/certificates/Psychology_of_the_Self.pdf",
        color: "hsl(200 60% 45%)"
      },
      {
        title: "Solving Problems with Creative and Critical Thinking",
        issuer: "IBM",
        date: "Oct 12, 2025",
        image: pd14,
        pdf: "/certificates/Solving_Problems_Creative_Critical_Thinking.pdf",
        color: "hsl(210 80% 50%)"
      },
      {
        title: "Verbal Communications and Presentation Skills",
        issuer: "Starweaver",
        date: "Sep 3, 2025",
        image: pd15,
        pdf: "/certificates/Verbal_Communication_Presentation_Skills.pdf",
        color: "hsl(25 60% 45%)"
      },
      {
        title: "Work Smarter, Not Harder: Time Management",
        issuer: "University of California, Irvine",
        date: "Sep 19, 2025",
        image: pd16,
        pdf: "/certificates/Work_Smarter_Time_Management.pdf",
        color: "hsl(40 70% 50%)"
      },
      {
        title: "Write Professional Emails in English",
        issuer: "Georgia Institute of Technology",
        date: "Aug 26, 2025",
        image: pd17,
        pdf: "/certificates/Write_Professional_Emails.pdf",
        color: "hsl(160 60% 40%)"
      }
    ]
  },
  {
    name: "IBM Full Stack Software Developer Professional Certificates",
    color: "hsl(210 80% 50%)",
    certificates: [
      {
        title: "Developing Front-End Apps with React",
        issuer: "IBM via Coursera",
        date: "Nov 27, 2025",
        image: ibm1,
        pdf: "/certificates/Developing_Front-End_Apps_with_React.pdf",
        color: "hsl(200 70% 50%)"
      },
      {
        title: "Introduction to Cloud Computing",
        issuer: "IBM via Coursera",
        date: "Nov 26, 2025",
        image: ibm2,
        pdf: "/certificates/Introduction_to_Cloud_Computing.pdf",
        color: "hsl(210 80% 50%)"
      },
      {
        title: "Introduction to HTML, CSS, & JavaScript",
        issuer: "IBM via Coursera",
        date: "Dec 11, 2025",
        image: ibm3,
        pdf: "/certificates/Introduction_to_HTML_CSS_JavaScript.pdf",
        color: "hsl(25 70% 50%)"
      },
      {
        title: "Introduction to Software Engineering",
        issuer: "IBM via Coursera",
        date: "Dec 2, 2025",
        image: ibm4,
        pdf: "/certificates/Introduction_to_Software_Engineering.pdf",
        color: "hsl(260 60% 50%)"
      },
      {
        title: "Python for Data Science, AI & Development",
        issuer: "IBM via Coursera",
        date: "Nov 7, 2025",
        image: ibm5,
        pdf: "/certificates/Python_for_Data_Science_AI_Development.pdf",
        color: "hsl(45 80% 50%)"
      }
    ]
  },
  {
    name: "Badges",
    color: "hsl(320 60% 50%)",
    certificates: [
      {
        title: "Artificial Intelligence Essentials V2",
        issuer: "IBM via Coursera",
        date: "Sep 2, 2025",
        image: badge1,
        pdf: "/certificates/IBM_AI_Essentials_V2_Badge.pdf",
        color: "hsl(210 80% 50%)"
      },
      {
        title: "Software Engineering Essentials",
        issuer: "IBM via Coursera",
        date: "Dec 3, 2025",
        image: badge2,
        pdf: "/certificates/IBM_Software_Engineering_Essentials_Badge.pdf",
        color: "hsl(260 60% 50%)"
      }
    ]
  },
  {
    name: "yes4youth Certificates",
    color: "hsl(140 60% 45%)",
    certificates: [
      {
        title: "Entrepreneurship Certificate",
        issuer: "Yes4Youth Program",
        date: "2025",
        image: "/certificates/Yes4Youth_Entrepreneurship.pdf",
        pdf: "/certificates/Yes4Youth_Entrepreneurship.pdf",
        color: "hsl(140 60% 45%)"
      },
      {
        title: "Digital Skills Certificate",
        issuer: "Yes4Youth Program",
        date: "2025",
        image: "/certificates/Yes4Youth_Digital.pdf",
        pdf: "/certificates/Yes4Youth_Digital.pdf",
        color: "hsl(200 60% 50%)"
      },
      {
        title: "Work Readiness Certificate",
        issuer: "Yes4Youth Program",
        date: "2025",
        image: "/certificates/Yes4Youth_Work_Readiness.pdf",
        pdf: "/certificates/Yes4Youth_Work_Readiness.pdf",
        color: "hsl(45 70% 50%)"
      }
    ]
  }
];

const Certificates = () => {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const [visibleCerts, setVisibleCerts] = useState<string[]>([]);

  const toggleCategory = (categoryName: string) => {
    setExpandedCategories(prev => 
      prev.includes(categoryName)
        ? prev.filter(name => name !== categoryName)
        : [...prev, categoryName]
    );
  };

  useEffect(() => {
    let delay = 0;
    certificateCategories.forEach(category => {
      if (expandedCategories.includes(category.name)) {
        category.certificates.forEach((cert) => {
          setTimeout(() => {
            setVisibleCerts(prev => [...prev, `${category.name}-${cert.title}`]);
          }, delay);
          delay += 150;
        });
      }
    });
  }, [expandedCategories]);

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
          <h1 className="text-5xl font-bold mb-4">Certificates & Credentials</h1>
          <p className="text-xl text-muted-foreground">
            Professional certifications organized by category
          </p>
        </div>

        <div className="max-w-7xl mx-auto space-y-6">
          {certificateCategories.map((category) => (
            <div key={category.name} className="rounded-xl border border-border overflow-hidden">
              <button
                onClick={() => toggleCategory(category.name)}
                className="w-full flex items-center gap-4 p-5 bg-card hover:bg-accent/50 transition-colors"
              >
                <div 
                  className="p-3 rounded-lg"
                  style={{ backgroundColor: `${category.color}20` }}
                >
                  <Folder size={28} style={{ color: category.color }} />
                </div>
                <div className="flex-1 text-left">
                  <h2 className="text-xl font-semibold">{category.name}</h2>
                  <p className="text-sm text-muted-foreground">
                    {category.certificates.length} certificate{category.certificates.length !== 1 ? 's' : ''}
                  </p>
                </div>
                {expandedCategories.includes(category.name) ? (
                  <ChevronDown size={24} className="text-muted-foreground" />
                ) : (
                  <ChevronRight size={24} className="text-muted-foreground" />
                )}
              </button>

              {expandedCategories.includes(category.name) && (
                <div className="p-6 bg-background border-t border-border">
                  {category.certificates.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {category.certificates.map((cert, index) => (
                        <Card
                          key={index}
                          className={`certificate-card overflow-hidden cursor-pointer transition-all duration-500 ${
                            visibleCerts.includes(`${category.name}-${cert.title}`) 
                              ? 'certificate-visible' 
                              : 'certificate-hidden'
                          }`}
                          style={{ 
                            borderColor: cert.color,
                            borderWidth: '2px'
                          }}
                        >
                          <div className="certificate-inner">
                            <div className="certificate-front p-5">
                              <div className="mb-4 overflow-hidden rounded-lg shadow-lg">
                                <img
                                  src={cert.image}
                                  alt={cert.title}
                                  className="w-full h-auto object-cover"
                                />
                              </div>
                              <h3 className="text-base font-bold mb-2" style={{ color: cert.color }}>
                                {cert.title}
                              </h3>
                              <p className="text-sm mb-1">{cert.issuer}</p>
                              <p className="text-xs text-muted-foreground">{cert.date}</p>
                            </div>
                            
                            <div 
                              className="certificate-back p-5 flex flex-col items-center justify-center" 
                              style={{ backgroundColor: cert.color }}
                            >
                              <h3 className="text-lg font-bold text-white mb-4 text-center">
                                {cert.title}
                              </h3>
                              <a
                                href={cert.pdf}
                                download
                                className="inline-flex items-center gap-2 bg-white text-primary px-5 py-2.5 rounded-lg font-semibold hover:bg-white/90 transition-colors"
                              >
                                <Download size={18} />
                                Download PDF
                              </a>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12 text-muted-foreground">
                      <Folder size={48} className="mx-auto mb-4 opacity-30" />
                      <p>No certificates in this category yet</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Certificates;
