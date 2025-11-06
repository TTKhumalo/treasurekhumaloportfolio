import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/skills", label: "Skills" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
    { path: "/certificates", label: "Certificates" },
    { path: "/videos-and-pictures", label: "Videos & Pictures" },
    { path: "/resume", label: "Resume" },
    { path: "/documentation", label: "Documentation" },
    { path: "/cover-letter", label: "Letters" }
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 shadow-lg bg-card border-b border-border"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Theme Toggle */}
          <div className="flex items-center gap-4">
            <Link
              to="/login"
              className="text-2xl font-bold text-primary hover:opacity-80 transition-opacity"
            >
              TK
            </Link>
            <div className="flex items-center gap-2">
              <Sun className="h-4 w-4 text-foreground" />
              <Switch
                checked={theme === "dark"}
                onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
              />
              <Moon className="h-4 w-4 text-foreground" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-left px-4 py-2 rounded-lg hover:bg-muted transition-colors font-medium text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
