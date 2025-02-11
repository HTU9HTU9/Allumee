"use client";

interface TransitionProps {
  id: number;
  from: string;
  to: string;
  duration: number;
  onDurationChange?: (newDuration: number) => void;
}

export default function Transition({ from, to, duration, onDurationChange }: TransitionProps) {
  return (
    <div className="border p-4 m-2 text-gray-500 flex justify-between items-center bg-white shadow">
      <p>Transition: {from} → {to}</p>
      <input
        type="number"
        value={duration}
        onChange={(e) => onDurationChange?.(parseInt(e.target.value) || 0)}
        className="border p-2 w-20"
      />
    </div>
  );
}
