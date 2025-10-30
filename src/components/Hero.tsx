import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Vintage paper texture background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-muted" />
      
      {/* Subtle vignette overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_40%,hsl(30_20%_25%/0.1)_100%)]" />
      
      {/* Paper texture overlay */}
      <div className="absolute inset-0 opacity-[0.15] mix-blend-multiply bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNub2lzZSkiIG9wYWNpdHk9IjAuNSIvPjwvc3ZnPg==')]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Vintage Profile Frame */}
          <div className="relative group">
            {/* Ornate frame */}
            <div className="absolute -inset-4 border-8 border-primary rounded-sm" style={{ boxShadow: 'inset 0 0 0 4px hsl(var(--card)), inset 0 0 0 12px hsl(var(--primary)), 0 8px 24px hsl(30 20% 25% / 0.2)' }} />
            
            {/* Corner decorations */}
            <div className="absolute -top-2 -left-2 w-6 h-6 border-t-4 border-l-4 border-accent" />
            <div className="absolute -top-2 -right-2 w-6 h-6 border-t-4 border-r-4 border-accent" />
            <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-4 border-l-4 border-accent" />
            <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-4 border-r-4 border-accent" />
            
            <img
              src={profilePhoto}
              alt="Treasure Khumalo"
              className="relative w-[260px] h-[260px] lg:w-[350px] lg:h-[350px] object-cover sepia-[0.3] contrast-[1.1] brightness-[0.95]"
              style={{ filter: 'sepia(0.3) contrast(1.1) brightness(0.95)' }}
            />
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left space-y-6 max-w-2xl">
            <div className="space-y-3 border-y-2 border-primary py-6">
              <p className="text-primary font-semibold text-lg tracking-[0.2em] uppercase animate-fade-in" style={{ fontVariant: 'small-caps' }}>
                AI/ML Developer & Systems Specialist
              </p>
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground animate-slide-up leading-tight" style={{ textShadow: '2px 2px 0px hsl(var(--muted))' }}>
                Treasure Khumalo
              </h1>
            </div>

            <p className="text-lg text-foreground/80 leading-relaxed animate-fade-in-delayed italic border-l-4 border-accent pl-4">
              Passionate about creating innovative AI solutions and building robust applications.
              Specializing in web development, database management, and multimedia technologies.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-in-delayed-more">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground border-2 border-foreground/20 shadow-vintage transition-all duration-300 uppercase tracking-wider font-semibold"
                asChild
              >
                <Link to="/projects">View My Work</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-primary hover:bg-primary/20 text-foreground uppercase tracking-wider font-semibold"
                asChild
              >
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start pt-4">
              <a
                href="https://github.com/TTKhumalo"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card hover:bg-primary/20 border-2 border-primary transition-all duration-300"
              >
                <Github className="w-6 h-6 text-primary" />
              </a>
              <a
                href="https://www.linkedin.com/in/treasure-khumalo-2106a8238"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card hover:bg-primary/20 border-2 border-primary transition-all duration-300"
              >
                <Linkedin className="w-6 h-6 text-primary" />
              </a>
              <a
                href="mailto:treasuretapelo@gmail.com"
                className="p-3 bg-card hover:bg-primary/20 border-2 border-primary transition-all duration-300"
              >
                <Mail className="w-6 h-6 text-primary" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
