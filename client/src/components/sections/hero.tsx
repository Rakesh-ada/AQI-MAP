import { Button } from "@/components/ui/button";
import { Smartphone, Play, Satellite, Clock, TrendingUp } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-24 pb-16 hero-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Hyperlocal Air Quality 
              <span className="text-primary"> Monitoring</span> 
              for Everyone
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Bridge the data gap for underserved regions with real-time AQI monitoring, 
              predictive forecasting, and personalized health recommendations—even in small towns and rural areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white"
                onClick={() => scrollToSection("demo")}
              >
                <Smartphone className="h-5 w-5 mr-2" />
                Launch Web App
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => scrollToSection("demo")}
              >
                <Play className="h-5 w-5 mr-2" />
                Watch Demo
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 text-sm text-gray-600 justify-center">
              <div className="flex items-center">
                <Satellite className="h-5 w-5 text-primary mr-2" />
                <span>Satellite Data</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-primary mr-2" />
                <span>Real-time Updates</span>
              </div>
              <div className="flex items-center">
                <TrendingUp className="h-5 w-5 text-primary mr-2" />
                <span>72hr Forecasts</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
