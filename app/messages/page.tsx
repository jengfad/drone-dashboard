import Link from "next/link";
import BottomNav from "@/app/components/BottomNav";

const threads = [
  {
    id: 1,
    initials: "JD",
    color: "bg-purple-600",
    name: "John Doe",
    preview: "Drone is ready for deployment. Confirm when you're ready.",
    time: "10:42 AM",
  },
  {
    id: 2,
    initials: "AS",
    color: "bg-blue-600",
    name: "Admin Support",
    preview: "Maintenance scheduled for Sunday at 3 PM. Please stand by.",
    time: "Yesterday",
  },
  {
    id: 3,
    initials: "MK",
    color: "bg-orange-500",
    name: "Maria K.",
    preview: "Flight logs have been updated and exported successfully.",
    time: "Mon",
  },
  {
    id: 4,
    initials: "DT",
    color: "bg-red-600",
    name: "Dev Team",
    preview: "Firmware v2.1.4 patch notes are now attached to the report.",
    time: "Sun",
  },
  {
    id: 5,
    initials: "OP",
    color: "bg-teal-600",
    name: "Ops Center",
    preview: "Session data exported successfully. Archive is ready.",
    time: "Fri",
  },
];

export default function MessagesPage() {
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
          <h1 className="text-lg font-bold text-white">Messages</h1>
        </div>
      </header>

      <div className="max-w-lg mx-auto px-4 pt-4 space-y-2">
        {threads.map((thread) => (
          <button
            key={thread.id}
            className="w-full bg-[#151929] rounded-2xl p-4 flex items-center gap-3 hover:bg-[#1b2236] transition-colors text-left active:scale-[0.99]"
          >
            {/* Avatar */}
            <div
              className={`w-11 h-11 rounded-full ${thread.color} flex-shrink-0 flex items-center justify-center text-white text-sm font-bold`}
            >
              {thread.initials}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-0.5">
                <span className="text-white text-sm font-semibold">
                  {thread.name}
                </span>
                <span className="text-gray-500 text-xs flex-shrink-0 ml-2">
                  {thread.time}
                </span>
              </div>
              <p className="text-gray-400 text-xs truncate leading-relaxed">
                {thread.preview}
              </p>
            </div>
          </button>
        ))}
      </div>

      <BottomNav />
    </div>
  );
}
