import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { AuthProvider } from "./hooks/useAuth";
import Navigation from "./components/Navigation";
import Index from "./pages/Index";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Certificates from "./pages/Certificates";
import VideosAndPictures from "./pages/VideosAndPictures";
import Resume from "./pages/Resume";
import Documentation from "./pages/Documentation";
import CoverLetter from "./pages/CoverLetter";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AuthProvider>
            <div className="h-screen flex flex-col overflow-hidden">
              <Navigation />
              <div className="flex-1 overflow-y-auto pt-16">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/skills" element={<Skills />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/certificates" element={<Certificates />} />
                  <Route path="/videos-and-pictures" element={<VideosAndPictures />} />
                  <Route path="/resume" element={<Resume />} />
                  <Route path="/documentation" element={<Documentation />} />
                  <Route path="/cover-letter" element={<CoverLetter />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/admin" element={<Admin />} />
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
            </div>
          </AuthProvider>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
