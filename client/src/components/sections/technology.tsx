import { Card, CardContent } from "@/components/ui/card";
import { Satellite, Cloud, BarChart, Brain } from "lucide-react";

export default function Technology() {
  const technologies = [
    {
      icon: Satellite,
      title: "ISRO Satellite Data",
      description: "High-resolution satellite imagery and atmospheric data",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Cloud,
      title: "IMD Weather Data",
      description: "Meteorological data from India Meteorological Department",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: BarChart,
      title: "CPCB Ground Stations",
      description: "Real-time data from Central Pollution Control Board",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Brain,
      title: "ML Forecasting",
      description: "TensorFlow models for predictive air quality analysis",
      color: "bg-red-100 text-red-600"
    }
  ];

  return (
    <section id="technology" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Built on Trusted Data Sources
          </h2>
          <p className="text-xl text-gray-600">
            Leveraging official government and international environmental agencies
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 ${tech.color}`}>
                  <tech.icon className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {tech.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {tech.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
