import { Card, CardContent } from "@/components/ui/card";
import { Check, Heart, Bell } from "lucide-react";

export default function Health() {
  const healthFeatures = [
    {
      icon: Check,
      title: "Real-time Activity Guidance",
      description: "\"Perfect day for outdoor exercise\" or \"Stay indoors, wear a mask if going out\"",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Heart,
      title: "Vulnerable Group Alerts",
      description: "Special recommendations for children, elderly, and those with respiratory conditions",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Bell,
      title: "Emergency Notifications",
      description: "Immediate alerts for hazardous air quality spikes in your area",
      color: "bg-purple-100 text-purple-600"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Personalized Health Recommendations
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Get actionable advice based on current air quality conditions and your personal health profile.
            </p>
            
            <div className="space-y-6">
              {healthFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${feature.color}`}>
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Person checking air quality app on smartphone outdoors" 
              className="rounded-xl shadow-lg w-full"
            />
            <Card className="absolute top-4 right-4 bg-white shadow-lg">
              <CardContent className="p-3">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">Safe to Exercise</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
