"use client";

import { useState } from "react";

export default function SettingsToggle({
  label,
  defaultOn = false,
}: {
  label: string;
  defaultOn?: boolean;
}) {
  const [on, setOn] = useState(defaultOn);

  return (
    <div className="flex items-center justify-between px-4 py-4 border-b border-black/5 dark:border-white/5 last:border-b-0">
      <span className="text-primary text-sm">{label}</span>
      <button
        onClick={() => setOn((v) => !v)}
        role="switch"
        aria-checked={on}
        aria-label={label}
        className={`relative w-12 h-6 rounded-full transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#22C55E] ${
          on ? "bg-[#22C55E]" : "bg-gray-300 dark:bg-gray-600"
        }`}
      >
        <span
          className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow-md transition-all duration-200 ${
            on ? "left-[26px]" : "left-0.5"
          }`}
        />
      </button>
    </div>
  );
}
