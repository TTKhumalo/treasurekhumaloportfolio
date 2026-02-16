import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Folder, ChevronDown, ChevronRight, ArrowLeft } from "lucide-react";
import graduateJobImage from "@/assets/videos/graduate-job-system.jpg";
import aiMaintenanceImage from "@/assets/videos/ai-predictive-maintenance.jpg";
import sentimentAnalysisImage from "@/assets/videos/sentiment-analysis.jpg";

interface Video {
  title: string;
  url: string;
  description: string;
  image: string;
}

interface VideoCategory {
  name: string;
  color: string;
  videos: Video[];
}

const videoCategories: VideoCategory[] = [
  {
    name: "Project Demonstration Videos",
    color: "hsl(260 60% 50%)",
    videos: [
      {
        title: "Graduate Job Application System Video",
        url: "https://www.veed.io/view/61299e10-8eee-4ab8-b05d-417a0befb52b?source=editor&panel=share",
        description: "Demonstration of the Graduate Job Application System",
        image: graduateJobImage
      },
      {
        title: "AI Predictive Maintenance Video",
        url: "https://www.veed.io/view/d76b08b7-8597-43b2-9178-0327a67173dc?panel=share",
        description: "Overview of AI Predictive Maintenance capabilities",
        image: aiMaintenanceImage
      },
      {
        title: "Sentiment Analysis Application",
        url: "https://www.veed.io/view/3c77e96b-a0b2-4ef8-bcf3-5c9e05d8b3de?source=editor&panel=share",
        description: "Showcase of Sentiment Analysis Application features",
        image: sentimentAnalysisImage
      }
    ]
  },
  {
    name: "Adobe After Effects",
    color: "hsl(270 80% 55%)",
    videos: []
  },
  {
    name: "Adobe Photoshop",
    color: "hsl(200 80% 50%)",
    videos: []
  }
];

const VideosAndPictures = () => {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const [visibleCards, setVisibleCards] = useState<string[]>([]);

  const toggleCategory = (categoryName: string) => {
    setExpandedCategories(prev =>
      prev.includes(categoryName)
        ? prev.filter(name => name !== categoryName)
        : [...prev, categoryName]
    );
  };

  useEffect(() => {
    let delay = 0;
    videoCategories.forEach(category => {
      if (expandedCategories.includes(category.name)) {
        category.videos.forEach((video) => {
          setTimeout(() => {
            setVisibleCards(prev => [...prev, `${category.name}-${video.title}`]);
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
          <h1 className="text-5xl font-bold mb-4">Videos & Pictures</h1>
          <p className="text-xl text-muted-foreground">
            Project demonstrations and creative work
          </p>
        </div>

        <div className="max-w-7xl mx-auto space-y-6">
          {videoCategories.map((category) => (
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
                    {category.videos.length} video{category.videos.length !== 1 ? 's' : ''}
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
                  {category.videos.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {category.videos.map((video, index) => (
                        <Card
                          key={index}
                          className={`hover:shadow-lg transition-all duration-500 overflow-hidden ${
                            visibleCards.includes(`${category.name}-${video.title}`)
                              ? 'opacity-100 translate-y-0'
                              : 'opacity-0 translate-y-4'
                          }`}
                        >
                          <div className="aspect-video w-full overflow-hidden">
                            <img
                              src={video.image}
                              alt={video.title}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <CardHeader>
                            <CardTitle className="text-xl">{video.title}</CardTitle>
                            <CardDescription>{video.description}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <Button variant="default" className="w-full" asChild>
                              <a
                                href={video.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2"
                              >
                                <ExternalLink className="w-4 h-4" />
                                Watch Video
                              </a>
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12 text-muted-foreground">
                      <Folder size={48} className="mx-auto mb-4 opacity-30" />
                      <p>No content in this category yet</p>
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

export default VideosAndPictures;
