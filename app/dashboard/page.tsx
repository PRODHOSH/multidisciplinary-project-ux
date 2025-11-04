"use client"

import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import SensorCard from "@/components/sensor-card"
import DataChart from "@/components/data-chart"
import HealthStatus from "@/components/health-status"
import { Button } from "@/components/ui/button"
import { Droplets, Thermometer, Wind, Sun } from "lucide-react"
import { AlertTriangle } from "lucide-react"

export default function Dashboard() {
  const [sensorData, setSensorData] = useState({
    moisture: 65,
    temperature: 24,
    humidity: 72,
    light: 850,
  })

  const [alerts, setAlerts] = useState<string[]>([])

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setSensorData((prev) => {
        const newMoisture = Math.max(20, Math.min(100, prev.moisture + (Math.random() - 0.5) * 10))
        const newTemperature = Math.max(15, Math.min(35, prev.temperature + (Math.random() - 0.5) * 3))
        const newHumidity = Math.max(30, Math.min(95, prev.humidity + (Math.random() - 0.5) * 8))
        const newLight = Math.max(100, Math.min(1000, prev.light + (Math.random() - 0.5) * 50))
        return {
          moisture: newMoisture,
          temperature: newTemperature,
          humidity: newHumidity,
          light: newLight,
        }
      })

      // Check for alerts
      const newAlerts: string[] = []
      setSensorData((prev) => {
        if (prev.moisture < 30) newAlerts.push("Soil moisture low - consider watering")
        if (prev.temperature > 30) newAlerts.push("Temperature too high - check ventilation")
        if (prev.humidity > 85) newAlerts.push("Humidity high - improve air circulation")
        return prev
      })
      setAlerts(newAlerts)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">Live Plant Dashboard</h1>
            <p className="text-muted-foreground">Real-time monitoring of your garden's health metrics</p>
          </div>

          {/* Alerts */}
          {alerts.length > 0 && (
            <div className="mb-8 space-y-3">
              {alerts.map((alert, i) => (
                <div key={i} className="flex items-center gap-3 bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <AlertTriangle className="w-5 h-5 text-orange-600 flex-shrink-0" />
                  <p className="text-orange-800">{alert}</p>
                </div>
              ))}
            </div>
          )}

          {/* Health Status */}
          <div className="mb-8">
            <HealthStatus moisture={sensorData.moisture} temperature={sensorData.temperature} />
          </div>

          {/* Sensor Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <SensorCard
              icon={Droplets}
              label="Soil Moisture"
              value={sensorData.moisture.toFixed(1)}
              unit="%"
              color="blue"
              threshold={30}
            />
            <SensorCard
              icon={Thermometer}
              label="Temperature"
              value={sensorData.temperature.toFixed(1)}
              unit="°C"
              color="red"
              threshold={30}
            />
            <SensorCard
              icon={Wind}
              label="Humidity"
              value={sensorData.humidity.toFixed(1)}
              unit="%"
              color="cyan"
              threshold={85}
            />
            <SensorCard
              icon={Sun}
              label="Light Intensity"
              value={sensorData.light.toFixed(0)}
              unit="lux"
              color="yellow"
              threshold={100}
            />
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <DataChart title="Soil Moisture Trend" dataKey="moisture" color="#3b82f6" />
            <DataChart title="Temperature Trend" dataKey="temperature" color="#ef4444" />
            <DataChart title="Humidity Trend" dataKey="humidity" color="#06b6d4" />
            <DataChart title="Light Intensity Trend" dataKey="light" color="#f59e0b" />
          </div>

          {/* Action Section */}
          <div className="bg-white rounded-2xl p-8 border border-border shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">Irrigation Control</h2>
                <p className="text-muted-foreground">Manually trigger irrigation or enable automatic mode</p>
              </div>
              <div className="flex gap-4">
                <Button variant="outline" className="rounded-full px-6 py-5 bg-transparent">
                  Auto Mode
                </Button>
                <Button className="bg-primary hover:bg-accent text-white rounded-full px-6 py-5">Water Now</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
