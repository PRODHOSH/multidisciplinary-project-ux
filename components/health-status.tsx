"use client"

import { CheckCircle, AlertTriangle } from "lucide-react"

interface HealthStatusProps {
  moisture: number
  temperature: number
}

export default function HealthStatus({ moisture, temperature }: HealthStatusProps) {
  const isHealthy = moisture > 30 && moisture < 85 && temperature > 15 && temperature < 30

  return (
    <div
      className={`rounded-2xl p-6 border-2 ${
        isHealthy ? "bg-green-50 border-green-200" : "bg-orange-50 border-orange-200"
      }`}
    >
      <div className="flex items-center gap-3">
        {isHealthy ? (
          <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
        ) : (
          <AlertTriangle className="w-6 h-6 text-orange-600 flex-shrink-0" />
        )}
        <div>
          <h3 className={`text-lg font-bold ${isHealthy ? "text-green-800" : "text-orange-800"}`}>
            {isHealthy ? "🌱 Plant Status: Healthy" : "⚠️ Plant Status: Needs Attention"}
          </h3>
          <p className={isHealthy ? "text-green-700" : "text-orange-700"}>
            {isHealthy
              ? "All conditions are optimal for healthy plant growth."
              : "Some readings are outside ideal ranges. Please review sensor data."}
          </p>
        </div>
      </div>
    </div>
  )
}
