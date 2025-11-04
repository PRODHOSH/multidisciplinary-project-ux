"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { ArrowRight } from "lucide-react"

export default function Architecture() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-foreground mb-4">System Architecture</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Understanding how our IoT ecosystem works to monitor and optimize plant health
            </p>
          </div>

          {/* Architecture Flow */}
          <div className="bg-white rounded-2xl p-8 border border-border shadow-sm mb-8">
            <div className="space-y-8">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-1 bg-primary/10 rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-primary mb-2">Step 1: Sensor Data Collection</h3>
                  <p className="text-foreground">
                    IoT sensors attached to plants continuously measure soil moisture, temperature, humidity, and light
                    intensity. Data is captured every 30 seconds.
                  </p>
                  <div className="mt-4 space-y-2 text-sm">
                    <p>
                      <strong>Sensors:</strong> Capacitive soil moisture, DHT22 temperature/humidity, BH1750 light
                      sensor
                    </p>
                    <p>
                      <strong>Frequency:</strong> Every 30 seconds
                    </p>
                  </div>
                </div>
                <ArrowRight className="hidden md:block w-8 h-8 text-primary flex-shrink-0" />
              </div>

              {/* Step 2 */}
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-1 bg-accent/10 rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-accent mb-2">Step 2: Microcontroller Processing</h3>
                  <p className="text-foreground">
                    ESP8266 or Arduino microcontroller reads sensor data, processes it, and makes local decisions for
                    irrigation control.
                  </p>
                  <div className="mt-4 space-y-2 text-sm">
                    <p>
                      <strong>Microcontrollers:</strong> ESP8266, Arduino Uno
                    </p>
                    <p>
                      <strong>Processing:</strong> Data validation, threshold checking, averaging
                    </p>
                  </div>
                </div>
                <ArrowRight className="hidden md:block w-8 h-8 text-accent flex-shrink-0" />
              </div>

              {/* Step 3 */}
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-1 bg-blue-50 rounded-2xl p-6 border border-blue-200">
                  <h3 className="text-2xl font-bold text-blue-600 mb-2">Step 3: Cloud Transmission</h3>
                  <p className="text-foreground">
                    Data is transmitted to the cloud via WiFi using MQTT or HTTP protocols for real-time storage and
                    processing.
                  </p>
                  <div className="mt-4 space-y-2 text-sm">
                    <p>
                      <strong>Protocols:</strong> MQTT, HTTP REST API
                    </p>
                    <p>
                      <strong>Cloud:</strong> Firebase Realtime DB, AWS IoT Core, or custom backend
                    </p>
                  </div>
                </div>
                <ArrowRight className="hidden md:block w-8 h-8 text-blue-600 flex-shrink-0" />
              </div>

              {/* Step 4 */}
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-1 bg-green-50 rounded-2xl p-6 border border-green-200">
                  <h3 className="text-2xl font-bold text-green-600 mb-2">Step 4: Dashboard Visualization</h3>
                  <p className="text-foreground">
                    Real-time data is visualized on the web dashboard with interactive charts, alerts, and plant health
                    status indicators.
                  </p>
                  <div className="mt-4 space-y-2 text-sm">
                    <p>
                      <strong>Frontend:</strong> Next.js React, Recharts for visualization
                    </p>
                    <p>
                      <strong>Updates:</strong> Real-time WebSocket or polling
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Data Flow Diagram */}
          <div className="bg-white rounded-2xl p-8 border border-border shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Complete Data Flow</h2>
            <div className="overflow-x-auto">
              <div className="min-w-full inline-block">
                <div className="flex items-center justify-between py-4 px-2">
                  <div className="text-center">
                    <div className="bg-primary/20 rounded-lg p-4 mb-2">
                      <p className="font-bold text-primary">Sensors</p>
                    </div>
                    <p className="text-xs text-muted-foreground">DHT22, Moisture</p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-primary mx-2" />
                  <div className="text-center">
                    <div className="bg-accent/20 rounded-lg p-4 mb-2">
                      <p className="font-bold text-accent">Microcontroller</p>
                    </div>
                    <p className="text-xs text-muted-foreground">ESP8266/Arduino</p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-accent mx-2" />
                  <div className="text-center">
                    <div className="bg-blue-100 rounded-lg p-4 mb-2">
                      <p className="font-bold text-blue-600">Cloud</p>
                    </div>
                    <p className="text-xs text-muted-foreground">Firebase/AWS</p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-blue-600 mx-2" />
                  <div className="text-center">
                    <div className="bg-green-100 rounded-lg p-4 mb-2">
                      <p className="font-bold text-green-600">Dashboard</p>
                    </div>
                    <p className="text-xs text-muted-foreground">Web App</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scalability Section */}
          <div className="bg-white rounded-2xl p-8 border border-border shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Scalability & Performance</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-secondary/10 rounded-lg">
                <h4 className="font-bold text-foreground mb-2">Single Plant Setup</h4>
                <p className="text-sm text-muted-foreground">Perfect for home gardeners with 1-10 plants</p>
                <p className="text-xs text-muted-foreground mt-3">Low power consumption, direct WiFi connection</p>
              </div>
              <div className="p-6 bg-secondary/10 rounded-lg">
                <h4 className="font-bold text-foreground mb-2">Multi-Zone Garden</h4>
                <p className="text-sm text-muted-foreground">Multiple sensor nodes for larger gardens</p>
                <p className="text-xs text-muted-foreground mt-3">Mesh networking support, centralized control</p>
              </div>
              <div className="p-6 bg-secondary/10 rounded-lg">
                <h4 className="font-bold text-foreground mb-2">Enterprise Scale</h4>
                <p className="text-sm text-muted-foreground">Thousands of sensors across facilities</p>
                <p className="text-xs text-muted-foreground mt-3">Load balancing, distributed database, redundancy</p>
              </div>
            </div>
          </div>

          {/* Security & Privacy Section */}
          <div className="bg-white rounded-2xl p-8 border border-border shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Security & Privacy</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-foreground mb-4">Data Protection</h4>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>End-to-end encryption for all transmissions</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>SHA-256 hashing for sensitive data</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Secure token-based authentication (JWT)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Automatic data encryption at rest</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-4">Access Control</h4>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">✓</span>
                    <span>Role-based access control (RBAC)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">✓</span>
                    <span>Two-factor authentication support</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">✓</span>
                    <span>Audit logs for all data access</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">✓</span>
                    <span>Device-level security keys</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Technical Specs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-border shadow-sm">
              <h3 className="text-xl font-bold text-foreground mb-4">Hardware Components</h3>
              <ul className="space-y-3 text-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    <strong>Microcontroller:</strong> ESP8266 or Arduino Uno
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    <strong>Sensors:</strong> DHT22 (temp/humidity), Soil moisture, BH1750 (light)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    <strong>Pump:</strong> Water pump with relay control
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    <strong>Power:</strong> Battery or USB power supply
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-border shadow-sm">
              <h3 className="text-xl font-bold text-foreground mb-4">Software Stack</h3>
              <ul className="space-y-3 text-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>
                    <strong>Frontend:</strong> Next.js, React, Recharts
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>
                    <strong>Backend:</strong> Node.js, Firebase, or custom API
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>
                    <strong>Database:</strong> Firestore or PostgreSQL
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>
                    <strong>Protocol:</strong> MQTT or HTTP REST API
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
