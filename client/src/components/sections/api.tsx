import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Building, Hospital, GraduationCap, Smartphone } from "lucide-react";

export default function Api() {
  const integrations = [
    {
      icon: Building,
      title: "City Government Dashboards",
      color: "text-blue-600"
    },
    {
      icon: Hospital,
      title: "Healthcare Systems",
      color: "text-red-600"
    },
    {
      icon: GraduationCap,
      title: "Educational Institutions",
      color: "text-green-600"
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      color: "text-purple-600"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="api" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Developer API Access
          </h2>
          <p className="text-xl text-gray-600">
            Integrate air quality data into your applications and services
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                RESTful API
              </h3>
              <p className="text-gray-600 mb-6">
                Access real-time and historical air quality data with our comprehensive API
              </p>
              
              <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono mb-6">
                <div className="text-green-400">GET</div>
                <div className="text-blue-400">https://api.aqimap.com/v1/current</div>
                <div className="text-gray-400">?lat=22.5726&lon=88.3639</div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-primary hover:bg-primary/90 text-white"
                  onClick={scrollToContact}
                >
                  Get API Key
                </Button>
                <Button variant="outline">
                  View Documentation
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Integration Partners
              </h3>
              <p className="text-gray-600 mb-6">
                Trusted by cities, schools, and healthcare organizations
              </p>
              
              <div className="space-y-4">
                {integrations.map((integration, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <integration.icon className={`h-6 w-6 ${integration.color}`} />
                    <span className="text-gray-700">{integration.title}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
