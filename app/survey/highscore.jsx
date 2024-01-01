"use client";
import useSWR from "swr";

export default function Highscore() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(`/api/notes`, fetcher);
  if (isLoading) return <div>Loading...</div>;
  if (data) {
    const pidCounts = data.reduce((counts, item) => {
      const { PID, category } = item;
      const parsedCategory = JSON.parse(category);
      const itemCount = parsedCategory.reduce((total, entry) => {
        return total + entry.finalSelect.length;
      }, 0);
      counts[PID] = (counts[PID] || 0) + itemCount;
      return counts;
    }, {});

    const pidArray = Object.entries(pidCounts).map(([pid, count]) => ({
      pid,
      count,
    }));

    const top10 = pidArray.sort((a, b) => b.count - a.count).slice(0, 10);

    return (
      <div className="border-4 border-black p-4 mt-10">
        <h1 className="font-bold text-lg mb-4">HIGHSCORE</h1>
        <ul>
          {top10.map(({ pid, count }, index) => (
            <li key={pid} className="mb-2">
              {index + 1}. {pid} ({count} point)
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
