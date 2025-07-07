import Navigation from "@/components/navigation";
import Hero from "@/components/sections/hero";
import Features from "@/components/sections/features";
import Demo from "@/components/sections/demo";
import Technology from "@/components/sections/technology";
import Health from "@/components/sections/health";
import Api from "@/components/sections/api";
import Testimonials from "@/components/sections/testimonials";
import CTA from "@/components/sections/cta";
import ContactForm from "@/components/contact-form";
import Footer from "@/components/sections/footer";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Clock, User } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      
      {/* Problem Statement Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              The Air Quality Data Gap
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              While most AQI apps focus on large metropolitan areas, millions in small towns and rural areas lack access to granular, real-time air quality information.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-red-50 border-red-200">
              <CardContent className="p-6 text-center">
                <AlertTriangle className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Limited Coverage</h3>
                <p className="text-gray-600">Ground stations concentrated in major cities, leaving rural areas uninformed</p>
              </CardContent>
            </Card>
            
            <Card className="bg-yellow-50 border-yellow-200">
              <CardContent className="p-6 text-center">
                <Clock className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Delayed Updates</h3>
                <p className="text-gray-600">Existing solutions often provide outdated information when real-time data is critical</p>
              </CardContent>
            </Card>
            
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-6 text-center">
                <User className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No Health Guidance</h3>
                <p className="text-gray-600">Raw data without actionable health recommendations or personalized advice</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Features />
      <Demo />
      <Technology />
      <Health />
      <Api />
      <Testimonials />
      <CTA />
      <ContactForm />
      <Footer />
    </div>
  );
}
