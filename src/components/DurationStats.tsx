"use client";

interface DurationStatsProps {
  totalScenes: number;
  totalTransitions: number;
}

export default function DurationStats({ totalScenes, totalTransitions }: DurationStatsProps) {
  return (
    <div className="bg-white p-4 mt-4 rounded shadow">
      <p className="text-lg font-semibold">Durée totale du show : {totalScenes + totalTransitions} sec</p>
      <p className="text-gray-600">Durée des scènes : {totalScenes} sec</p>
      <p className="text-gray-600">Durée des transitions : {totalTransitions} sec</p>
    </div>
  );
}
