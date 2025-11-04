"use client"

import { useState, useEffect } from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

interface DataChartProps {
  title: string
  dataKey: string
  color: string
}

export default function DataChart({ title, dataKey, color }: DataChartProps) {
  const [data, setData] = useState<any[]>([])

  useEffect(() => {
    // Initialize with some data
    const initialData = Array.from({ length: 12 }, (_, i) => ({
      time: `${(i * 5 + 1).toString().padStart(2, "0")}:00`,
      [dataKey]: Math.random() * 100,
    }))
    setData(initialData)

    // Update data periodically
    const interval = setInterval(() => {
      setData((prev) => {
        const newData = [...prev.slice(1)]
        const lastValue = prev[prev.length - 1]?.[dataKey] || 50
        newData.push({
          time: new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }),
          [dataKey]: Math.max(0, Math.min(100, lastValue + (Math.random() - 0.5) * 20)),
        })
        return newData
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [dataKey])

  return (
    <div className="bg-white rounded-2xl p-6 border border-border shadow-sm">
      <h3 className="text-lg font-bold text-foreground mb-4">{title}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="time" tick={{ fontSize: 12 }} stroke="#9ca3af" />
          <YAxis tick={{ fontSize: 12 }} stroke="#9ca3af" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#fff",
              border: `2px solid ${color}`,
              borderRadius: "8px",
            }}
          />
          <Line type="monotone" dataKey={dataKey} stroke={color} dot={false} strokeWidth={3} isAnimationActive={true} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
