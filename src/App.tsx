import { WeatherIconShowcase } from "./components/WeatherIconShowcase";
import { WeatherAppDemo } from "./components/WeatherAppDemo";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-indigo-900">Weather Icon Design Tutorial</h1>
          <p className="text-indigo-700">
            Learn to design recognizable and intuitive weather icons
          </p>
        </div>

        <WeatherIconShowcase />
        <WeatherAppDemo />
      </div>
    </div>
  );
}
