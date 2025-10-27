import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background animate-pulse-slow" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Profile Image */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-primary rounded-full blur-xl opacity-75 group-hover:opacity-100 transition duration-500" />
            <img
              src={profilePhoto}
              alt="Treasure Khumalo"
              className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-primary/50 shadow-glow"
            />
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left space-y-6 max-w-2xl">
            <div className="space-y-2">
              <p className="text-secondary font-semibold text-lg tracking-wide animate-fade-in">
                AI/ML Developer & Systems Specialist
              </p>
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent animate-slide-up">
                Treasure Khumalo
              </h1>
            </div>

            <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in-delayed">
              Passionate about creating innovative AI solutions and building robust applications.
              Specializing in web development, database management, and multimedia technologies.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-in-delayed-more">
              <Button
                onClick={() => scrollToSection("projects")}
                size="lg"
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
              >
                View My Work
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                size="lg"
                className="border-primary/50 hover:bg-primary/10"
              >
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start pt-4">
              <a
                href="https://github.com/TTKhumalo"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-primary/20 border border-border hover:border-primary transition-all duration-300 hover:shadow-glow"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/treasure-khumalo-2106a8238"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-primary/20 border border-border hover:border-primary transition-all duration-300 hover:shadow-glow"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:treasuretapelo@gmail.com"
                className="p-3 rounded-full bg-card hover:bg-primary/20 border border-border hover:border-primary transition-all duration-300 hover:shadow-glow"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="w-8 h-8 text-primary" />
      </button>
    </section>
  );
};

export default Hero;
