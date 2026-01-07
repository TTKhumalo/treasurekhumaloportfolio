import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MessageCircle, X } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";
import profilePhoto1 from "@/assets/profile-photo.jpg";
import profilePhoto2 from "@/assets/profile-photo-2.jpg";

const profilePhotos = [profilePhoto1, profilePhoto2];

const Hero = () => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentPhotoIndex((prev) => (prev + 1) % profilePhotos.length);
        setIsTransitioning(false);
      }, 500);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  // Generate random sizes for gallery mosaic based on number of photos
  const getGalleryLayout = () => {
    const layouts = profilePhotos.map((_, index) => {
      const sizes = ['small', 'medium', 'large'];
      const randomSize = sizes[index % sizes.length];
      return {
        size: randomSize,
        className: randomSize === 'large' 
          ? 'col-span-2 row-span-2' 
          : randomSize === 'medium' 
            ? 'col-span-1 row-span-2' 
            : 'col-span-1 row-span-1'
      };
    });
    return layouts;
  };

  const galleryLayout = getGalleryLayout();

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
          {/* Vintage Profile Frame - Clickable */}
          <div 
            className="relative group cursor-pointer"
            onClick={() => setIsGalleryOpen(true)}
          >
            {/* Ornate frame */}
            <div className="absolute -inset-4 border-8 border-primary rounded-sm transition-all duration-300 group-hover:border-accent" style={{ boxShadow: 'inset 0 0 0 4px hsl(var(--card)), inset 0 0 0 12px hsl(var(--primary)), 0 8px 24px hsl(30 20% 25% / 0.2)' }} />
            
            {/* Corner decorations */}
            <div className="absolute -top-2 -left-2 w-6 h-6 border-t-4 border-l-4 border-accent transition-all duration-300 group-hover:scale-110" />
            <div className="absolute -top-2 -right-2 w-6 h-6 border-t-4 border-r-4 border-accent transition-all duration-300 group-hover:scale-110" />
            <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-4 border-l-4 border-accent transition-all duration-300 group-hover:scale-110" />
            <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-4 border-r-4 border-accent transition-all duration-300 group-hover:scale-110" />
            
            
            <img
              src={profilePhotos[currentPhotoIndex]}
              alt="Treasure Khumalo"
              className={`relative w-[260px] h-[260px] lg:w-[350px] lg:h-[350px] object-cover transition-all duration-500 group-hover:scale-[1.02] ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
              style={{ filter: 'sepia(0.3) contrast(1.1) brightness(0.95)' }}
            />
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left space-y-6 max-w-2xl">
            <div className="space-y-3 border-y-2 border-primary py-6">
              <p className="text-primary font-semibold text-lg tracking-[0.2em] uppercase animate-fade-in" style={{ fontVariant: 'small-caps' }}>
                AI/ML Developer & Systems Specialist
              </p>
              <p className="text-accent font-semibold text-base tracking-[0.15em] uppercase animate-fade-in" style={{ fontVariant: 'small-caps' }}>
                CAPACITi Yes Program
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
              <a
                href="https://wa.me/27764248850"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card hover:bg-primary/20 border-2 border-primary transition-all duration-300"
              >
                <MessageCircle className="w-6 h-6 text-primary" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Dialog */}
      <Dialog open={isGalleryOpen} onOpenChange={setIsGalleryOpen}>
        <DialogContent className="max-w-4xl w-[95vw] max-h-[90vh] p-0 border-8 border-primary bg-card overflow-hidden">
          {/* Ornate frame for gallery */}
          <div className="absolute -inset-1 pointer-events-none" style={{ boxShadow: 'inset 0 0 0 4px hsl(var(--accent))' }} />
          
          <div className="p-6">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center tracking-wider uppercase border-b-2 border-primary pb-4">
              Photo Gallery
            </h2>
            
            {/* Mosaic Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[150px] md:auto-rows-[200px]">
              {profilePhotos.map((photo, index) => (
                <div 
                  key={index}
                  className={`relative overflow-hidden border-4 border-primary group ${galleryLayout[index]?.className}`}
                >
                  <img
                    src={photo}
                    alt={`Treasure Khumalo - Photo ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    style={{ filter: 'sepia(0.2) contrast(1.05) brightness(0.98)' }}
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Hero;
