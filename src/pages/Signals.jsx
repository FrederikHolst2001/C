import { useEffect, useState } from "react";
import { API_BASE } from "@/config/api";

export default function Signals() {
  const [signals, setSignals] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE}/api/signals`)
      .then((res) => res.json())
      .then(setSignals)
      .catch(console.error);
  }, []);

  return (
    <div className="p-6 space-y-3">
      {signals.map((s, i) => (
        <div
          key={i}
          className="bg-slate-800 rounded-lg p-4 flex justify-between"
        >
          <div>
            <strong>{s.pair}</strong> — {s.direction}
            <div className="text-sm opacity-70">
              Entry: {s.entry}
            </div>
          </div>
          <div className="text-sm opacity-70">
            SL: {s.stopLoss} / TP: {s.takeProfit}
          </div>
        </div>
      ))}
    </div>
  );
}
