import { Card, CardContent } from "@/components/ui/card";
import { 
  MapPin, 
  TrendingUp, 
  Heart, 
  History, 
  Factory, 
  Bell 
} from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: MapPin,
      title: "Real-Time AQI Mapping",
      description: "Hyperlocal air quality data combining ground stations and satellite sources for complete coverage",
      color: "text-primary"
    },
    {
      icon: TrendingUp,
      title: "Predictive Forecasting",
      description: "24-72 hour air quality forecasts using meteorological data and machine learning models",
      color: "text-blue-600"
    },
    {
      icon: Heart,
      title: "Health Recommendations",
      description: "Personalized health alerts and actionable advice based on current pollution levels",
      color: "text-amber-600"
    },
    {
      icon: History,
      title: "Historical Analysis",
      description: "Comprehensive trend analysis with location filters for pattern recognition",
      color: "text-purple-600"
    },
    {
      icon: Factory,
      title: "Pollution Source Mapping",
      description: "Identify and track pollution sources including traffic, factories, and fire events",
      color: "text-red-600"
    },
    {
      icon: Bell,
      title: "Smart Alerts",
      description: "Push notifications for pollution spikes and threshold-based emergency alerts",
      color: "text-green-600"
    }
  ];

  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Comprehensive Air Quality Intelligence
          </h2>
          <p className="text-xl text-gray-600">
            Advanced technology meets intuitive design for actionable environmental insights
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className={`w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4`}>
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
