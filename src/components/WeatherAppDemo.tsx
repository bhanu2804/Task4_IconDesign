import { Card } from "./ui/card";
import { useState } from "react";
import {
  SunIcon,
  CloudIcon,
  RainIcon,
  PartlyCloudyIcon,
  SnowIcon,
  ThunderstormIcon,
} from "./WeatherIcons";

const weatherData = [
  {
    day: "Monday",
    condition: "Sunny",
    icon: SunIcon,
    temp: "72°F",
    high: "75°F",
    low: "58°F",
  },
  {
    day: "Tuesday",
    condition: "Partly Cloudy",
    icon: PartlyCloudyIcon,
    temp: "68°F",
    high: "70°F",
    low: "55°F",
  },
  {
    day: "Wednesday",
    condition: "Cloudy",
    icon: CloudIcon,
    temp: "64°F",
    high: "66°F",
    low: "52°F",
  },
  {
    day: "Thursday",
    condition: "Rainy",
    icon: RainIcon,
    temp: "60°F",
    high: "62°F",
    low: "48°F",
  },
  {
    day: "Friday",
    condition: "Thunderstorm",
    icon: ThunderstormIcon,
    temp: "58°F",
    high: "60°F",
    low: "50°F",
  },
  {
    day: "Saturday",
    condition: "Snowy",
    icon: SnowIcon,
    temp: "35°F",
    high: "38°F",
    low: "28°F",
  },
  {
    day: "Sunday",
    condition: "Sunny",
    icon: SunIcon,
    temp: "70°F",
    high: "73°F",
    low: "56°F",
  },
];

export function WeatherAppDemo() {
  const [selectedDay, setSelectedDay] = useState(weatherData[0]);

  return (
    <Card className="p-6 bg-white/80 backdrop-blur">
      <h2 className="text-indigo-900 mb-6">Weather App Demo</h2>
      <p className="text-slate-600 mb-6">
        See how the icons work in a real application context. The icons remain clear and recognizable at different sizes.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Current Weather */}
        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-8 text-white">
          <div className="space-y-6">
            <div>
              <p className="text-indigo-100">Today</p>
              <h3 className="text-white">{selectedDay.day}</h3>
            </div>
            
            <div className="flex items-center justify-center py-8">
              <selectedDay.icon size={120} className="drop-shadow-lg" />
            </div>
            
            <div className="text-center space-y-2">
              <div className="text-6xl">{selectedDay.temp}</div>
              <p className="text-xl text-indigo-100">{selectedDay.condition}</p>
              <div className="flex justify-center gap-4 text-indigo-100">
                <span>H: {selectedDay.high}</span>
                <span>L: {selectedDay.low}</span>
              </div>
            </div>
          </div>
        </div>

        {/* 7-Day Forecast */}
        <div className="space-y-3">
          <h3 className="text-slate-900 mb-4">7-Day Forecast</h3>
          {weatherData.map((day, index) => (
            <button
              key={index}
              onClick={() => setSelectedDay(day)}
              className={`w-full p-4 rounded-lg transition-all ${
                selectedDay.day === day.day
                  ? "bg-indigo-100 border-2 border-indigo-400"
                  : "bg-slate-50 border-2 border-transparent hover:border-slate-300"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-slate-900 w-24 text-left">{day.day}</span>
                <div className="flex items-center gap-4 flex-1 justify-center">
                  <day.icon size={32} />
                  <span className="text-slate-600 w-32 text-left">{day.condition}</span>
                </div>
                <div className="flex gap-3 text-slate-700">
                  <span>{day.high}</span>
                  <span className="text-slate-400">{day.low}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </Card>
  );
}
