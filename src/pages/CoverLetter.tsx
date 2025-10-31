import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download } from "lucide-react";

const CoverLetter = () => {
  const coverLetters = [
    {
      title: "DevOps Engineer",
      description: "Cover letter tailored for DevOps and infrastructure roles",
      file: "/cover-letters/Cover_Letter_for_DevOps_Engineer.pdf"
    },
    {
      title: "Full Stack Development",
      description: "Cover letter focused on full stack development positions",
      file: "/cover-letters/Cover_Letter_for_Full_Stack_Development.pdf"
    },
    {
      title: "IT Support Technician",
      description: "Cover letter designed for IT support and technical roles",
      file: "/cover-letters/Cover_Letter_for_IT_Support_Technician.pdf"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-4">Cover Letters</h1>
        <p className="text-muted-foreground mb-8">
          Professional cover letters tailored for different roles and opportunities
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coverLetters.map((letter, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="h-5 w-5 text-primary" />
                  <CardTitle>{letter.title}</CardTitle>
                </div>
                <CardDescription>{letter.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex gap-2">
                <Button asChild className="flex-1">
                  <a href={letter.file} target="_blank" rel="noopener noreferrer">
                    View
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href={letter.file} download>
                    <Download className="h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CoverLetter;
