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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
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
            <div className="flex flex-col sm:flex-row gap-6 text-sm text-gray-600">
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
          <div className="relative animate-slide-up">
            <img 
              src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1000" 
              alt="Air quality monitoring app on smartphone" 
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
            />
            <div className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">62</div>
                <div className="text-sm text-gray-600">AQI Good</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
