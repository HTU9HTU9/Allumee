"use client";

interface ControlsProps {
  onReset: () => void;
  onLoad: () => void;
  onSave: () => void;
}

export default function Controls({ onReset, onLoad, onSave }: ControlsProps) {
  return (
    <div className="mt-4 flex gap-4">
      <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={onReset}>
        Reset
      </button>
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={onLoad}>
        Load
      </button>
      <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={onSave}>
        Save
      </button>
    </div>
  );
}
