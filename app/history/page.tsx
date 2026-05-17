import Link from "next/link";
import BottomNav from "@/app/components/BottomNav";

const logs = [
  {
    id: 1,
    color: "green" as const,
    title: "Drone session started",
    time: "Today, 10:32 AM",
    desc: "Session initiated with optimal battery and signal levels.",
  },
  {
    id: 2,
    color: "yellow" as const,
    title: "Alert triggered",
    time: "Today, 10:18 AM",
    desc: "High voltage warning detected on motor 2.",
  },
  {
    id: 3,
    color: "green" as const,
    title: "Feed reconnected",
    time: "Today, 9:54 AM",
    desc: "Live feed restored after a brief connection interruption.",
  },
  {
    id: 4,
    color: "green" as const,
    title: "Battery recharged",
    time: "Today, 9:20 AM",
    desc: "Device battery charged to 100%. Ready for deployment.",
  },
  {
    id: 5,
    color: "red" as const,
    title: "Signal lost",
    time: "Yesterday, 6:47 PM",
    desc: "Drone connection dropped for approximately 12 seconds.",
  },
  {
    id: 6,
    color: "green" as const,
    title: "Drone session ended",
    time: "Yesterday, 6:30 PM",
    desc: "Session completed successfully. Total duration: 47 min.",
  },
  {
    id: 7,
    color: "yellow" as const,
    title: "Wind warning issued",
    time: "Yesterday, 5:55 PM",
    desc: "Wind speed exceeded the recommended flight threshold.",
  },
  {
    id: 8,
    color: "green" as const,
    title: "System check passed",
    time: "Yesterday, 5:30 PM",
    desc: "All systems nominal. Pre-flight check completed.",
  },
];

const dotColors = {
  green: "bg-[#22C55E]",
  yellow: "bg-yellow-400",
  red: "bg-[#EF4444]",
};

const labelColors = {
  green: "text-[#22C55E]",
  yellow: "text-yellow-400",
  red: "text-[#EF4444]",
};

export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-[#0D0F1E] pb-24">
      <header className="sticky top-0 z-40 bg-[#0D0F1E]/95 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-lg mx-auto flex items-center gap-3 px-4 py-3">
          <Link
            href="/"
            aria-label="Back to dashboard"
            className="p-2 -ml-2 text-gray-400 hover:text-white transition-colors"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
          </Link>
          <h1 className="text-lg font-bold text-white">History &amp; Logs</h1>
        </div>
      </header>

      <div className="max-w-lg mx-auto px-4 pt-4">
        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[19px] top-3 bottom-3 w-px bg-white/10" />

          <div className="space-y-1">
            {logs.map((log) => (
              <div key={log.id} className="flex gap-4">
                {/* Dot */}
                <div className="flex-shrink-0 flex flex-col items-center pt-[18px]">
                  <div
                    className={`w-2.5 h-2.5 rounded-full ring-2 ring-[#0D0F1E] ${dotColors[log.color]}`}
                  />
                </div>

                {/* Card */}
                <div className="flex-1 bg-[#151929] rounded-2xl p-4 mb-2">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <p className="text-white text-sm font-semibold leading-snug">
                      {log.title}
                    </p>
                    <span
                      className={`text-[10px] font-semibold flex-shrink-0 ${labelColors[log.color]}`}
                    >
                      {log.color.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-gray-500 text-[10px] mb-1">{log.time}</p>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    {log.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
