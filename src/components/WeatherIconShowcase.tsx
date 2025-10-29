import { Card } from "./ui/card";
import {
  SunIcon,
  CloudIcon,
  RainIcon,
  PartlyCloudyIcon,
  SnowIcon,
  ThunderstormIcon,
} from "./WeatherIcons";

const icons = [
  {
    name: "Sunny",
    component: SunIcon,
    description: "Clear circular shape with radiating lines for sun rays",
    principles: ["Simple geometric shape", "Recognizable rays pattern", "Warm color palette"],
  },
  {
    name: "Cloudy",
    component: CloudIcon,
    description: "Soft rounded cloud shape with layered appearance",
    principles: ["Rounded organic shapes", "Overlapping circles technique", "Neutral gray tones"],
  },
  {
    name: "Rainy",
    component: RainIcon,
    description: "Cloud with falling rain drops represented by lines",
    principles: ["Combines cloud + rain elements", "Angled lines for motion", "Blue accent for water"],
  },
  {
    name: "Partly Cloudy",
    component: PartlyCloudyIcon,
    description: "Sun partially covered by cloud",
    principles: ["Layered composition", "Both sun and cloud elements", "Depth through overlap"],
  },
  {
    name: "Snowy",
    component: SnowIcon,
    description: "Cloud with snowflakes represented by dots",
    principles: ["Dots for snowflakes", "Light color palette", "Soft winter feel"],
  },
  {
    name: "Thunderstorm",
    component: ThunderstormIcon,
    description: "Dark cloud with lightning bolt",
    principles: ["Darker cloud for severity", "Lightning zigzag pattern", "High contrast"],
  },
];

export function WeatherIconShowcase() {
  return (
    <div className="space-y-6">
      <Card className="p-6 bg-white/80 backdrop-blur">
        <h2 className="text-indigo-900 mb-4">Icon Design Principles</h2>
        <div className="grid md:grid-cols-3 gap-4 text-slate-700">
          <div className="p-4 bg-indigo-50 rounded-lg">
            <h3 className="text-indigo-900 mb-2">Simplicity</h3>
            <p>Use basic geometric shapes and minimal details for instant recognition</p>
          </div>
          <div className="p-4 bg-indigo-50 rounded-lg">
            <h3 className="text-indigo-900 mb-2">Consistency</h3>
            <p>Maintain the same style, stroke width, and visual weight across all icons</p>
          </div>
          <div className="p-4 bg-indigo-50 rounded-lg">
            <h3 className="text-indigo-900 mb-2">Clarity</h3>
            <p>Ensure icons are recognizable at any size and universally understood</p>
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-white/80 backdrop-blur">
        <h2 className="text-indigo-900 mb-6">Weather Icon Collection</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {icons.map((icon) => (
            <div
              key={icon.name}
              className="p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl border-2 border-slate-200 hover:border-indigo-300 transition-colors"
            >
              <div className="flex flex-col items-center space-y-4">
                <div className="w-24 h-24 flex items-center justify-center">
                  <icon.component size={96} />
                </div>
                <h3 className="text-slate-900">{icon.name}</h3>
                <p className="text-slate-600 text-center">{icon.description}</p>
                <div className="w-full pt-4 border-t border-slate-300">
                  <p className="text-slate-500 mb-2">Design principles:</p>
                  <ul className="space-y-1">
                    {icon.principles.map((principle, idx) => (
                      <li key={idx} className="text-slate-600 text-sm flex items-start">
                        <span className="text-indigo-500 mr-2">•</span>
                        {principle}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
