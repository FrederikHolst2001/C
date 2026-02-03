import { useEffect, useState } from "react";
import { API_BASE } from "@/config/api";

export default function Calendar() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE}/api/events`)
      .then((res) => res.json())
      .then(setEvents)
      .catch(console.error);
  }, []);

  return (
    <div className="p-6 space-y-3">
      {events.map((e, i) => (
        <div
          key={i}
          className="bg-slate-800 rounded-lg p-4 flex justify-between"
        >
          <div>
            <strong>{e.event}</strong>
            <div className="text-sm opacity-70">
              {e.country} • {e.impact}
            </div>
          </div>
          <div className="text-sm opacity-70">{e.date}</div>
        </div>
      ))}
    </div>
  );
}
