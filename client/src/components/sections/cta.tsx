import { Button } from "@/components/ui/button";
import { Smartphone, Code } from "lucide-react";

export default function CTA() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToDemo = () => {
    const element = document.getElementById("demo");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="cta" className="py-16 gradient-bg text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Breathe Easier?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Join thousands of users who rely on AQI Map for accurate air quality information
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg"
            className="bg-white text-primary hover:bg-gray-100 font-semibold"
            onClick={() => window.open("https://mahad2810.github.io/AQIMap/", "_blank")}
          >
            <Smartphone className="h-5 w-5 mr-2" />
            Launch Web App
          </Button>
          <Button 
            size="lg"
            className="bg-white/10 border-white text-white hover:bg-white/20"
            onClick={scrollToContact}
          >
            <Code className="h-5 w-5 mr-2" />
            Get API Access
          </Button>
        </div>
      </div>
    </section>
  );
}
