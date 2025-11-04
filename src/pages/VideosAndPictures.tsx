import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const VideosAndPictures = () => {
  const videos = [
    {
      title: "Graduate Job Application System Video",
      url: "https://www.veed.io/view/61299e10-8eee-4ab8-b05d-417a0befb52b?source=editor&panel=share",
      description: "Demonstration of the Graduate Job Application System"
    },
    {
      title: "AI Predictive Maintenance Video",
      url: "https://www.veed.io/view/d76b08b7-8597-43b2-9178-0327a67173dc?panel=share",
      description: "Overview of AI Predictive Maintenance capabilities"
    },
    {
      title: "Sentiment Analysis Application",
      url: "https://www.veed.io/view/3c77e96b-a0b2-4ef8-bcf3-5c9e05d8b3de?source=editor&panel=share",
      description: "Showcase of Sentiment Analysis Application features"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Videos & Pictures</h1>
        
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-primary">Logic League Project Videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{video.title}</CardTitle>
                  <CardDescription>{video.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="default"
                    className="w-full"
                    asChild
                  >
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
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default VideosAndPictures;
