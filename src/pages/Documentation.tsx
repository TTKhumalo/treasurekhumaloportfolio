import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileText, Download, BookOpen, Code, Palette, Globe, Database, Lightbulb } from "lucide-react";

const Documentation = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 300);
  }, []);

  // Documentation content structure
  const sections = [
    {
      icon: BookOpen,
      title: "Project Overview",
      color: "hsl(180 60% 45%)",
      content: `This portfolio website showcases the professional journey, skills, and achievements of Treasure Khumalo, a Full Stack Developer and DevOps Engineer with expertise in AI/ML technologies. The platform serves as a comprehensive digital resume and project showcase.`
    },
    {
      icon: Lightbulb,
      title: "Purpose & Goals",
      color: "hsl(200 60% 45%)",
      content: `The primary purpose is to provide potential employers, collaborators, and clients with an interactive and engaging view of qualifications, projects, and professional capabilities. It demonstrates proficiency in modern web development, UI/UX design, and AI/ML applications.`
    },
    {
      icon: Code,
      title: "Technical Stack",
      color: "hsl(220 60% 45%)",
      content: `Built with cutting-edge technologies: React 18, TypeScript, Vite, Tailwind CSS, and Shadcn UI components. Features responsive design, smooth animations, and optimized performance. Deployed using modern CI/CD practices for seamless updates.`
    },
    {
      icon: Globe,
      title: "Key Features",
      color: "hsl(240 60% 45%)",
      content: `• Interactive Hero Section with professional photo
• Comprehensive About page with education and experience
• Skills showcase with technology categories
• Project portfolio with live demos and GitHub links
• AI/ML Certification gallery with downloadable PDFs
• Professional Resume display with download option
• Cover Letter collection for various positions
• Contact form for professional inquiries
• Responsive design for all devices
• Dark theme with cyan accents`
    },
    {
      icon: Database,
      title: "Project Structure",
      color: "hsl(260 60% 45%)",
      content: `The application follows a clean component-based architecture:
• Pages: Home, About, Skills, Projects, Certificates, Resume, Cover Letter, Contact
• Reusable UI Components: Cards, Buttons, Forms, Navigation
• Responsive layouts optimized for mobile, tablet, and desktop
• Organized asset management for images, PDFs, and documents`
    },
    {
      icon: Palette,
      title: "Design System",
      color: "hsl(280 60% 45%)",
      content: `Professional tech-focused dark theme with:
• Primary cyan accent color (hsl(180 60% 45%))
• Smooth animations and transitions
• Gradient effects and glow shadows
• Typography optimized for readability
• Consistent spacing and layout patterns
• Accessible color contrasts`
    }
  ];

  const handlePrintToPDF = () => {
    window.print();
  };

  const handleDownloadDocumentation = () => {
    const documentContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Portfolio Documentation - Treasure Khumalo</title>
  <style>
    body { font-family: Arial, sans-serif; max-width: 1200px; margin: 0 auto; padding: 20px; line-height: 1.6; }
    h1 { color: #0891b2; border-bottom: 3px solid #0891b2; padding-bottom: 10px; }
    h2 { color: #0284c7; margin-top: 30px; }
    h3 { color: #0369a1; }
    .section { margin-bottom: 30px; padding: 20px; background: #f8f9fa; border-left: 4px solid #0891b2; }
    ul { margin-left: 20px; }
    .footer { margin-top: 50px; padding-top: 20px; border-top: 2px solid #0891b2; text-align: center; color: #666; }
  </style>
</head>
<body>
  <h1>Project Documentation - Portfolio Website</h1>
  <p><strong>Developer:</strong> Treasure Khumalo<br>
  <strong>Version:</strong> 1.0.0<br>
  <strong>Last Updated:</strong> November 2025</p>

  ${sections.map(section => `
    <div class="section">
      <h2>${section.title}</h2>
      <p>${section.content.replace(/\n/g, '<br>')}</p>
    </div>
  `).join('')}

  <div class="section">
    <h2>Technology Details</h2>
    
    <h3>Frontend Framework</h3>
    <p>React 18.3.1 with TypeScript for type-safe development, utilizing modern hooks and functional components for optimal performance and maintainability.</p>
    
    <h3>Build Tool & Development</h3>
    <p>Vite for lightning-fast hot module replacement (HMR) and optimized production builds. React Router DOM for seamless client-side navigation.</p>
    
    <h3>Styling & UI Components</h3>
    <p>Tailwind CSS 3.4+ for utility-first styling with custom design tokens. Shadcn UI component library built on Radix UI primitives for accessible, customizable components. Custom animations using CSS keyframes and Tailwind animations.</p>
    
    <h3>Notable Features</h3>
    <ul>
      <li>Flip card animations for interactive certificate and document displays</li>
      <li>Staggered fade-in animations for enhanced user experience</li>
      <li>Responsive navigation with mobile menu support</li>
      <li>PDF viewing and downloading capabilities</li>
      <li>Icon integration using Lucide React</li>
      <li>Form handling with React Hook Form and Zod validation</li>
    </ul>
    
    <h3>Pages & Routes</h3>
    <ul>
      <li><strong>Home (/):</strong> Hero section with professional introduction</li>
      <li><strong>About (/about):</strong> Education, experience, and career goals</li>
      <li><strong>Skills (/skills):</strong> Technical skills and competencies</li>
      <li><strong>Projects (/projects):</strong> Portfolio of AI/ML and web development projects</li>
      <li><strong>Certificates (/certificates):</strong> AI/ML certification showcase</li>
      <li><strong>Resume (/resume):</strong> Professional CV display and download</li>
      <li><strong>Cover Letter (/cover-letter):</strong> Position-specific cover letters</li>
      <li><strong>Contact (/contact):</strong> Professional contact form</li>
      <li><strong>Documentation (/documentation):</strong> This comprehensive guide</li>
    </ul>
    
    <h3>Target Audience</h3>
    <p>Hiring managers, recruiters, potential collaborators, and clients seeking a Full Stack Developer with DevOps and AI/ML expertise. The portfolio demonstrates technical proficiency, project experience, and professional presentation skills.</p>
    
    <h3>Future Enhancements</h3>
    <ul>
      <li>Blog section for technical articles and tutorials</li>
      <li>Integration with backend APIs for dynamic content</li>
      <li>Analytics dashboard for tracking visitor engagement</li>
      <li>Multilingual support</li>
      <li>Dark/Light theme toggle</li>
    </ul>
  </div>

  <div class="footer">
    <p><strong>Tech Stack:</strong> React + TypeScript + Vite + Tailwind CSS</p>
  </div>
</body>
</html>
    `;

    const blob = new Blob([documentContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Portfolio_Documentation_Treasure_Khumalo.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
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
          <h1 className="text-5xl font-bold mb-4">Project Documentation</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Complete guide to the portfolio website functionality and architecture
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              onClick={handlePrintToPDF}
              variant="outline"
              className="inline-flex items-center gap-2"
            >
              <FileText size={20} />
              Print to PDF
            </Button>
            <Button 
              onClick={handleDownloadDocumentation}
              className="inline-flex items-center gap-2 bg-gradient-primary"
            >
              <Download size={20} />
              Download Documentation
            </Button>
          </div>
        </div>

        {/* Documentation Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <Card
                key={index}
                className={`certificate-card overflow-hidden cursor-pointer transition-all duration-500 ${
                  isVisible ? 'certificate-visible' : 'certificate-hidden'
                }`}
                style={{ 
                  borderColor: section.color,
                  borderWidth: '2px',
                  animationDelay: `${index * 150}ms`
                }}
              >
                <div className="certificate-inner">
                  <div className="certificate-front p-6">
                    <div className="mb-4 flex items-center justify-center h-32 rounded-lg">
                      <Icon size={60} style={{ color: section.color }} />
                    </div>
                    <h3 className="text-lg font-bold text-center" style={{ color: section.color }}>
                      {section.title}
                    </h3>
                  </div>
                  
                  <div className="certificate-back p-6" style={{ backgroundColor: section.color }}>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {section.title}
                    </h3>
                    <p className="text-white text-sm leading-relaxed whitespace-pre-line">
                      {section.content}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Detailed Documentation Section */}
        <Card className="p-8 bg-gradient-card border-primary/20 mb-8">
          <CardHeader>
            <CardTitle className="text-3xl mb-6">Technology Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-primary">Frontend Framework</h3>
              <p className="text-muted-foreground leading-relaxed">
                React 18.3.1 with TypeScript for type-safe development, utilizing modern hooks and functional components 
                for optimal performance and maintainability.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-primary">Build Tool & Development</h3>
              <p className="text-muted-foreground leading-relaxed">
                Vite for lightning-fast hot module replacement (HMR) and optimized production builds. 
                React Router DOM for seamless client-side navigation.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-primary">Styling & UI Components</h3>
              <p className="text-muted-foreground leading-relaxed">
                Tailwind CSS 3.4+ for utility-first styling with custom design tokens. Shadcn UI component library 
                built on Radix UI primitives for accessible, customizable components. Custom animations using CSS 
                keyframes and Tailwind animations.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-primary">Notable Features</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Flip card animations for interactive certificate and document displays</li>
                <li>Staggered fade-in animations for enhanced user experience</li>
                <li>Responsive navigation with mobile menu support</li>
                <li>PDF viewing and downloading capabilities</li>
                <li>Icon integration using Lucide React</li>
                <li>Form handling with React Hook Form and Zod validation</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-primary">Pages & Routes</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>Home (/):</strong> Hero section with professional introduction</li>
                <li><strong>About (/about):</strong> Education, experience, and career goals</li>
                <li><strong>Skills (/skills):</strong> Technical skills and competencies</li>
                <li><strong>Projects (/projects):</strong> Portfolio of AI/ML and web development projects</li>
                <li><strong>Certificates (/certificates):</strong> AI/ML certification showcase</li>
                <li><strong>Resume (/resume):</strong> Professional CV display and download</li>
                <li><strong>Cover Letter (/cover-letter):</strong> Position-specific cover letters</li>
                <li><strong>Contact (/contact):</strong> Professional contact form</li>
                <li><strong>Documentation (/documentation):</strong> This comprehensive guide</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-primary">Target Audience</h3>
              <p className="text-muted-foreground leading-relaxed">
                Hiring managers, recruiters, potential collaborators, and clients seeking a Full Stack Developer 
                with DevOps and AI/ML expertise. The portfolio demonstrates technical proficiency, project experience, 
                and professional presentation skills.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-primary">Future Enhancements</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Blog section for technical articles and tutorials</li>
                <li>Integration with backend APIs for dynamic content</li>
                <li>Analytics dashboard for tracking visitor engagement</li>
                <li>Multilingual support</li>
                <li>Dark/Light theme toggle</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Footer Info */}
        <Card className="p-6 bg-gradient-card border-primary/20 text-center">
          <p className="text-muted-foreground">
            <strong className="text-foreground">Developer:</strong> Treasure Khumalo<br/>
            <strong className="text-foreground">Version:</strong> 1.0.0<br/>
            <strong className="text-foreground">Last Updated:</strong> November 2025<br/>
            <strong className="text-foreground">Tech Stack:</strong> React + TypeScript + Vite + Tailwind CSS
          </p>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default Documentation;
