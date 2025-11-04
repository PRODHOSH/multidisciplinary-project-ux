"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Droplets, Thermometer, Wind, Sun } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-72 h-72 bg-primary rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="text-center space-y-8">
            <div className="space-y-4 animate-grow">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                Smart Plant Health <span className="text-primary">Monitoring</span> System
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto">
                IoT-powered solution for smarter, sustainable gardening. Monitor your plants in real-time and automate
                irrigation when needed.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Link href="/dashboard">
                <Button size="lg" className="bg-primary hover:bg-accent text-white rounded-full px-8 py-6 text-lg">
                  View Live Dashboard
                </Button>
              </Link>
              <Link href="#features">
                <Button size="lg" variant="outline" className="rounded-full px-8 py-6 text-lg bg-transparent">
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Feature Cards Preview */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-16">
              {[
                { icon: Droplets, label: "Soil Moisture", value: "65%" },
                { icon: Thermometer, label: "Temperature", value: "24°C" },
                { icon: Wind, label: "Humidity", value: "72%" },
                { icon: Sun, label: "Light Intensity", value: "850 lux" },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow duration-300"
                >
                  <feature.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground">{feature.label}</p>
                  <p className="text-2xl font-bold text-foreground mt-2">{feature.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose Our System?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Solve the problem of manual plant care with intelligent IoT sensors that monitor and automate your garden.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Real-Time Monitoring",
                description: "Track soil moisture, temperature, humidity, and light intensity with precision sensors.",
                icon: "📊",
              },
              {
                title: "Automated Irrigation",
                description: "Water your plants automatically when soil moisture drops below threshold levels.",
                icon: "💧",
              },
              {
                title: "Sustainable Gardening",
                description: "Reduce water waste and optimize plant health with data-driven insights.",
                icon: "🌱",
              },
              {
                title: "Cloud Dashboard",
                description: "Access your plant data anytime, anywhere through our intuitive web interface.",
                icon: "☁️",
              },
              {
                title: "Smart Alerts",
                description: "Receive notifications when your plants need attention or conditions are critical.",
                icon: "🔔",
              },
              {
                title: "Easy Installation",
                description: "Simple setup with Arduino and ESP8266 microcontrollers. No coding required.",
                icon: "⚙️",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-sm border border-border hover:border-primary transition-colors duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold text-foreground">Ready to Transform Your Garden?</h2>
          <p className="text-lg text-muted-foreground">
            Explore our live dashboard to see real-time plant health metrics and system capabilities.
          </p>
          <Link href="/dashboard">
            <Button size="lg" className="bg-primary hover:bg-accent text-white rounded-full px-8 py-6 text-lg">
              Explore Dashboard Now
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
