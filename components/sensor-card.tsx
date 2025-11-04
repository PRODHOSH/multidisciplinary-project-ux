"use client"

import type { LucideIcon } from "lucide-react"

interface SensorCardProps {
  icon: LucideIcon
  label: string
  value: string
  unit: string
  color: string
  threshold: number
}

export default function SensorCard({ icon: Icon, label, value, unit, color, threshold }: SensorCardProps) {
  const numValue = Number.parseFloat(value)
  const isWarning = numValue < threshold || (color === "cyan" && numValue > 85)

  const colorClasses = {
    blue: "text-blue-600",
    red: "text-red-600",
    cyan: "text-cyan-600",
    yellow: "text-yellow-600",
  }

  return (
    <div
      className={`bg-white rounded-2xl p-6 border-2 transition-all duration-300 ${
        isWarning ? "border-orange-400 bg-orange-50" : "border-border hover:border-primary"
      }`}
    >
      <div className="flex items-start justify-between mb-4">
        <Icon className={`w-8 h-8 ${colorClasses[color as keyof typeof colorClasses]}`} />
        {isWarning && <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>}
      </div>
      <p className="text-sm text-muted-foreground mb-2">{label}</p>
      <div className="flex items-baseline gap-2">
        <span className="text-3xl font-bold text-foreground">{value}</span>
        <span className="text-lg text-muted-foreground">{unit}</span>
      </div>

      {/* Progress Bar */}
      <div className="mt-4 bg-gray-200 rounded-full h-2">
        <div
          className={`h-2 rounded-full transition-all duration-300 ${
            color === "blue"
              ? "bg-blue-600"
              : color === "red"
                ? "bg-red-600"
                : color === "cyan"
                  ? "bg-cyan-600"
                  : "bg-yellow-600"
          }`}
          style={{ width: `${Math.min(100, (numValue / 100) * 100)}%` }}
        ></div>
      </div>
    </div>
  )
}
