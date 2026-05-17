"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const notifications = [
  {
    id: 1,
    severity: "red" as const,
    title: "High voltage detected",
    time: "2 min ago",
    desc: "Voltage exceeded safe threshold on motor 2.",
  },
  {
    id: 2,
    severity: "red" as const,
    title: "Signal lost",
    time: "15 min ago",
    desc: "Connection to drone interrupted briefly.",
  },
  {
    id: 3,
    severity: "yellow" as const,
    title: "Drone battery low",
    time: "32 min ago",
    desc: "Battery level dropped below 20%.",
  },
];

const dotColors = {
  red: "bg-[#EF4444]",
  yellow: "bg-yellow-400",
};

export default function NotificationBell() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      <button
        aria-label="Notifications"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="p-2 -mr-2 text-primary"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
      </button>
      <span className="absolute top-1.5 right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#EF4444] text-[10px] font-bold text-white pointer-events-none">
        {notifications.length}
      </span>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-80 max-w-[calc(100vw-2rem)] bg-card rounded-2xl shadow-2xl border border-black/10 dark:border-white/10 z-50 overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-black/10 dark:border-white/10">
            <span className="text-primary text-sm font-semibold">Notifications</span>
            <span className="bg-[#EF4444] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
              {notifications.length} new
            </span>
          </div>

          {/* List */}
          <div className="divide-y divide-black/5 dark:divide-white/5">
            {notifications.map((n) => (
              <div
                key={n.id}
                className="flex gap-3 px-4 py-3 hover:bg-[var(--bg-hover)] transition-colors"
              >
                <div className={`w-2 h-2 rounded-full mt-[5px] flex-shrink-0 ${dotColors[n.severity]}`} />
                <div className="flex-1 min-w-0">
                  <p className="text-primary text-sm font-medium leading-snug">{n.title}</p>
                  <p className="text-secondary text-xs mt-0.5 leading-relaxed">{n.desc}</p>
                  <p className="text-secondary text-xs mt-1">{n.time}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <Link
            href="/alerts"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-1 py-3 text-[#22C55E] text-sm font-medium hover:bg-[var(--bg-hover)] transition-colors border-t border-black/10 dark:border-white/10"
          >
            View all alerts
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </Link>
        </div>
      )}
    </div>
  );
}
