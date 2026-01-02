"use client";
import { useState } from "react";

export default function SizePicker() {
  const sizes = [39, 40, 41, 42, 43, 44];
  const [selected, setSelected] = useState(40);

  return (
    <div className="my-5">
      <p className="font-bold mb-2">Select Size:</p>
      <div className="flex gap-3">
        {sizes.map((s) => (
          <button
            key={s}
            onClick={() => setSelected(s)}
            className={`p-3 border-2 rounded-xl transition-all ${selected === s ? "border-black bg-black text-white" : "border-gray-400"}`}
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}