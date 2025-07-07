import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Cloud, Droplets, Wind, Eye, Compass, Factory, Heart, RefreshCw } from "lucide-react";

export default function Demo() {
  const [activeTab, setActiveTab] = useState("heatmap");

  const demoData = {
    location: "Kolkata, West Bengal",
    temperature: "27°",
    weather: "Rain",
    aqi: 62,
    aqiLevel: "Moderate",
    humidity: "84%",
    windSpeed: "7.7 km/h",
    visibility: "10 km"
  };

  const pollutants = ["NO₂", "CO", "SO₂", "O₃", "HCHO"];

  return (
    <section id="demo" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Experience the Interface
          </h2>
          <p className="text-xl text-gray-600">
            Interactive preview of real-time air quality monitoring
          </p>
        </div>
        
        <Card className="bg-gray-900 text-white">
          <CardContent className="p-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left Panel - Current Data */}
              <div>
                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    <MapPin className="h-5 w-5 text-primary mr-2" />
                    <span className="text-lg">{demoData.location}</span>
                  </div>
                  <div className="flex items-center text-4xl font-bold mb-2">
                    {demoData.temperature}
                    <Cloud className="h-8 w-8 text-blue-400 ml-4" />
                  </div>
                  <div className="text-gray-400">{demoData.weather}</div>
                </div>
                
                <div className="bg-yellow-600 inline-flex items-center px-4 py-2 rounded-lg mb-6">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></div>
                  <span className="font-semibold">AQI: {demoData.aqi} {demoData.aqiLevel}</span>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <Droplets className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                    <div className="text-sm text-gray-400">Humidity</div>
                    <div className="text-xl font-semibold">{demoData.humidity}</div>
                  </div>
                  <div className="text-center">
                    <Wind className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                    <div className="text-sm text-gray-400">Wind</div>
                    <div className="text-xl font-semibold">{demoData.windSpeed}</div>
                  </div>
                  <div className="text-center">
                    <Eye className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                    <div className="text-sm text-gray-400">Visibility</div>
                    <div className="text-xl font-semibold">{demoData.visibility}</div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <Button 
                    variant={activeTab === "heatmap" ? "default" : "secondary"}
                    size="sm"
                    onClick={() => setActiveTab("heatmap")}
                    className="bg-primary hover:bg-primary/80"
                  >
                    <Compass className="h-4 w-4 mr-1" />
                    AQI Heatmap
                  </Button>
                  <Button 
                    variant={activeTab === "sources" ? "default" : "secondary"}
                    size="sm"
                    onClick={() => setActiveTab("sources")}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    <Factory className="h-4 w-4 mr-1" />
                    Pollution Sources
                  </Button>
                  <Button 
                    variant={activeTab === "health" ? "default" : "secondary"}
                    size="sm"
                    onClick={() => setActiveTab("health")}
                    className="bg-amber-600 hover:bg-amber-700"
                  >
                    <Heart className="h-4 w-4 mr-1" />
                    Health Tips
                  </Button>
                </div>
              </div>

              {/* Right Panel - Interactive Demo */}
              <div>
                <Card className="bg-gray-800 border-gray-700">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-white">
                        Real-Time AQI & Pollutant Heatmap
                      </h3>
                      <Button size="sm" variant="outline" className="border-gray-600">
                        <RefreshCw className="h-4 w-4 mr-1" />
                        Refresh
                      </Button>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {pollutants.map((pollutant, index) => (
                        <span 
                          key={pollutant}
                          className={`px-2 py-1 rounded text-xs text-white ${
                            index === 0 ? 'bg-red-600' :
                            index === 1 ? 'bg-yellow-600' :
                            index === 2 ? 'bg-blue-600' :
                            index === 3 ? 'bg-green-600' :
                            'bg-purple-600'
                          }`}
                        >
                          {pollutant}
                        </span>
                      ))}
                    </div>
                    
                    <div className="h-48 bg-gray-700 rounded-lg overflow-hidden relative">
                      <img 
                        src="https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Air quality heatmap visualization" 
                        className="w-full h-full object-cover opacity-70"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end">
                        <div className="p-4 text-white">
                          <p className="text-sm font-medium">Interactive Pollution Heatmap</p>
                          <p className="text-xs text-gray-300">Real-time satellite and ground station data</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
