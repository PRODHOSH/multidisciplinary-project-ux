"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Droplets,
  Thermometer,
  Wind,
  Sun,
  BarChart3,
  Zap,
  Leaf,
  Shield,
  TrendingUp,
  Smartphone,
  Cloud,
  Lock,
} from "lucide-react"

export default function About() {
  const coreFeatures = [
    {
      icon: Droplets,
      title: "Soil Moisture Monitoring",
      description:
        "Real-time soil moisture detection with precision sensors and customizable thresholds for optimal watering",
    },
    {
      icon: Thermometer,
      title: "Temperature Control",
      description: "Monitor ambient temperature to ensure your plants stay within their ideal growing range",
    },
    {
      icon: Wind,
      title: "Humidity Tracking",
      description: "Track air humidity levels for disease prevention and optimal photosynthesis conditions",
    },
    {
      icon: Sun,
      title: "Light Intensity",
      description: "Measure light levels to ensure plants receive adequate illumination for growth",
    },
    {
      icon: Zap,
      title: "Automated Irrigation",
      description: "Smart watering system that activates based on soil moisture thresholds you define",
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      description: "Comprehensive historical data and trends to optimize your gardening practices over time",
    },
  ]

  const technicalFeatures = [
    {
      icon: Smartphone,
      title: "Web Dashboard",
      description: "Access your garden data anytime, anywhere from any device with an internet connection",
    },
    {
      icon: Cloud,
      title: "Cloud Storage",
      description: "Secure cloud-based storage for all your sensor data with automatic backups",
    },
    {
      icon: Leaf,
      title: "Sustainable Design",
      description: "Energy-efficient sensors and systems that minimize power consumption and environmental impact",
    },
    {
      icon: Lock,
      title: "Data Security",
      description: "Enterprise-grade encryption and security protocols to protect your garden data",
    },
    {
      icon: TrendingUp,
      title: "Real-Time Updates",
      description: "Live sensor data refreshed every 5 seconds for immediate awareness of garden conditions",
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "99.9% uptime guarantee with redundant systems and failover protection",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6">
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground">About SmartPlant</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're revolutionizing sustainable gardening through IoT technology, intelligent automation, and
              data-driven insights.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-4">
                To empower gardeners and farmers worldwide with intelligent IoT solutions that reduce water waste,
                increase plant health, and make sustainable gardening accessible to everyone.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Whether you're a passionate home gardener or managing a large-scale operation, our Smart Plant Health
                Monitoring System adapts to your needs and grows with your ambitions.
              </p>
              <div className="flex gap-4">
                <Link href="/dashboard">
                  <Button className="bg-primary hover:bg-accent text-white rounded-full px-8 py-6">
                    Explore Dashboard
                  </Button>
                </Link>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 border border-border">
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Leaf className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Sustainable</h3>
                    <p className="text-sm text-muted-foreground">
                      Reduce water waste by 40% with intelligent irrigation
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Data-Driven</h3>
                    <p className="text-sm text-muted-foreground">
                      Make informed decisions with comprehensive analytics
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Efficient</h3>
                    <p className="text-sm text-muted-foreground">Automate garden care and save time on maintenance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Monitoring Capabilities</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive sensor suite monitors every aspect of your plant's environment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreFeatures.map((feature, i) => {
              const Icon = feature.icon
              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-8 border border-border hover:border-primary transition-colors"
                >
                  <Icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Technical Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Platform Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Advanced technology ensuring reliability, security, and ease of use
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technicalFeatures.map((feature, i) => {
              const Icon = feature.icon
              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-8 border border-border hover:border-primary transition-colors"
                >
                  <Icon className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose SmartPlant?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">40%</div>
              <p className="text-lg text-muted-foreground">Average water savings with our system</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <p className="text-lg text-muted-foreground">Automatic monitoring and alerts</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">5s</div>
              <p className="text-lg text-muted-foreground">Real-time data refresh rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold text-foreground">Ready to Transform Your Garden?</h2>
          <p className="text-lg text-muted-foreground">
            Start monitoring your plants today and see the difference intelligent gardening can make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dashboard">
              <Button size="lg" className="bg-primary hover:bg-accent text-white rounded-full px-8 py-6 text-lg">
                View Dashboard
              </Button>
            </Link>
            <Link href="/team">
              <Button size="lg" variant="outline" className="rounded-full px-8 py-6 text-lg bg-transparent">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
