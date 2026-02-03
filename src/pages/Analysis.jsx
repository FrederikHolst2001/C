import { useEffect, useState } from "react";
import { API_BASE } from "@/config/api";

export default function Analysis() {
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE}/api/forecast`)
      .then((res) => res.json())
      .then(setForecast)
      .catch(console.error);
  }, []);

  if (!forecast) {
    return <div className="p-6">Loading analysis…</div>;
  }

  return (
    <div className="p-6 bg-slate-900 rounded-lg">
      <h2 className="text-xl font-bold mb-4">{forecast.pair}</h2>
      <p>
        <strong>Bias:</strong> {forecast.bias}
      </p>
      <p>
        <strong>Confidence:</strong> {forecast.confidence}%
      </p>
      <p className="mt-3 opacity-80">{forecast.summary}</p>
    </div>
  );
}
