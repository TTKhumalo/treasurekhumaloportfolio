import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Open to exciting opportunities in AI/ML and full-stack development
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-gradient-card border-primary/20">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Information */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                
                <a
                  href="mailto:treasuretapelo@gmail.com"
                  className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 hover:bg-primary/10 transition-all duration-300 group"
                >
                  <div className="p-2 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">treasuretapelo@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/50">
                  <div className="p-2 rounded-lg bg-primary/20">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-sm text-muted-foreground">Mamelodi, Pretoria, South Africa</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold mb-6">Connect With Me</h3>
                
                <a
                  href="https://www.linkedin.com/in/treasure-khumalo-2106a8238"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-primary/10 transition-all duration-300 group"
                >
                  <div className="p-2 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors">
                    <Linkedin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <p className="text-sm text-muted-foreground">Professional Profile</p>
                  </div>
                </a>

                <a
                  href="https://github.com/TTKhumalo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-primary/10 transition-all duration-300 group"
                >
                  <div className="p-2 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors">
                    <Github className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">GitHub</p>
                    <p className="text-sm text-muted-foreground">View My Code</p>
                  </div>
                </a>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 pt-8 border-t border-border text-center space-y-4">
              <p className="text-lg text-muted-foreground">
                Ready to discuss your next project?
              </p>
              <Button
                size="lg"
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                asChild
              >
                <a href="mailto:treasuretapelo@gmail.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Send Me an Email
                </a>
              </Button>
            </div>
          </Card>

          {/* Additional Info */}
          <Card className="mt-8 p-6 bg-gradient-card border-primary/20 text-center">
            <p className="text-muted-foreground">
              Currently seeking opportunities in AI/ML development, full-stack engineering, 
              and innovative technology projects. Available for both remote and on-site positions.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
