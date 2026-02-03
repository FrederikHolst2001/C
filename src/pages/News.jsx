import { useEffect, useState } from "react";
import { API_BASE } from "@/config/api";

export default function News() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE}/api/news`)
      .then((res) => res.json())
      .then((data) => setNews(data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="p-6">Loading news…</div>;
  }

  return (
    <div className="p-6 space-y-4">
      {news.map((item, i) => (
        <div key={i} className="bg-slate-800 rounded-lg p-4">
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <p className="text-sm opacity-80 mt-2">
            {item.summary || item.description}
          </p>
          {item.url && (
            <a
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 text-sm mt-2 inline-block"
            >
              Read more →
            </a>
          )}
        </div>
      ))}
    </div>
  );
}
