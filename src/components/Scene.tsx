"use client";

interface SceneProps {
  name: string;
  duration: number;
  onDelete?: () => void;
  onAdd?: () => void;
  onNameChange?: (newName: string) => void;
  onDurationChange?: (newDuration: number) => void;
}

export default function Scene({ name, duration, onDelete, onAdd, onNameChange, onDurationChange }: SceneProps) {
  return (
    <div className="border p-4 m-2 flex items-center justify-between bg-white shadow">
      <input
        type="text"
        value={name}
        onChange={(e) => onNameChange?.(e.target.value)}
        className="border p-2 w-32"
      />
      <input
        type="number"
        value={duration}
        onChange={(e) => onDurationChange?.(parseInt(e.target.value) || 0)}
        className="border p-2 w-20"
      />
      <div className="space-x-2">
        {onDelete && (
          <button className="bg-red-500 text-white px-3 py-1 rounded" onClick={onDelete}>-</button>
        )}
        {onAdd && (
          <button className="bg-green-500 text-white px-3 py-1 rounded" onClick={onAdd}>+</button>
        )}
      </div>
    </div>
  );
}
