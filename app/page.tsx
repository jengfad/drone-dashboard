import BottomNav from "@/app/components/BottomNav";
import NotificationBell from "@/app/components/NotificationBell";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#0D0F1E] pb-24">
      {/* Sticky header */}
      <header className="sticky top-0 z-40 bg-[#0D0F1E]/95 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-lg mx-auto flex items-center justify-between px-4 py-3">
          <button aria-label="Open menu" className="p-2 -ml-2 text-white">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
          <NotificationBell />
        </div>
      </header>

      <div className="max-w-lg mx-auto px-4 pt-5">
        <h1 className="text-2xl font-bold text-white mb-5">Hello, Nacho!</h1>

        {/* Status Cards */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          {/* System Status */}
          <div className="bg-[#151929] rounded-2xl p-4">
            <div className="w-9 h-9 rounded-full bg-[#22C55E]/15 flex items-center justify-center mb-3">
              <svg
                className="text-[#22C55E]"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <p className="text-white text-sm font-semibold leading-snug">
              All systems active
            </p>
            <p className="text-gray-500 text-xs mt-1">Last update: Just now</p>
          </div>

          {/* Emergency Contact */}
          <button className="bg-[#151929] rounded-2xl p-4 text-left hover:bg-[#1b2236] transition-colors active:scale-[0.97]">
            <div className="w-9 h-9 rounded-full bg-[#EF4444]/15 flex items-center justify-center mb-3">
              <svg
                className="text-[#EF4444]"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.61 4.36 2 2 0 0 1 3.58 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.13 6.13l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <p className="text-white text-sm font-semibold leading-snug">
              Emergency Contact
            </p>
            <p className="text-gray-500 text-xs mt-1">Tap to call</p>
          </button>
        </div>

        {/* Live Feed */}
        <div className="mb-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-white font-semibold text-base">
              Live Feed
            </span>
            <span className="flex items-center gap-1.5 bg-[#EF4444] text-white text-[10px] px-2 py-0.5 rounded font-bold tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              LIVE
            </span>
          </div>
          <div className="relative bg-black rounded-2xl overflow-hidden">
            {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
            <video
              src="https://archive.org/download/PowerLinesroyaltyFreeHdStockFootage/PowerLines.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full aspect-video object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 flex justify-between p-3">
              <button
                aria-label="Camera"
                className="p-2 bg-black/60 rounded-full backdrop-blur-sm"
              >
                <svg
                  className="text-white"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M23 7l-7 5 7 5V7z" />
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                </svg>
              </button>
              <button
                aria-label="Fullscreen"
                className="p-2 bg-black/60 rounded-full backdrop-blur-sm"
              >
                <svg
                  className="text-white"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 3 21 3 21 9" />
                  <polyline points="9 21 3 21 3 15" />
                  <line x1="21" y1="3" x2="14" y2="10" />
                  <line x1="3" y1="21" x2="10" y2="14" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Device Stats */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          {/* Rotation — SVG circle r=32, circumference=2π×32≈201.06 */}
          <div className="bg-[#151929] rounded-2xl p-4 flex flex-col items-center">
            <p className="text-gray-400 text-xs font-medium mb-3 self-start">
              Device Rotation
            </p>
            <div className="relative w-20 h-20 mb-2">
              <svg viewBox="0 0 80 80" className="w-full h-full -rotate-90">
                <circle
                  cx="40"
                  cy="40"
                  r="32"
                  fill="none"
                  stroke="#1E293B"
                  strokeWidth="8"
                />
                <circle
                  cx="40"
                  cy="40"
                  r="32"
                  fill="none"
                  stroke="#22C55E"
                  strokeWidth="8"
                  strokeDasharray="201.06"
                  strokeDashoffset="0"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-sm font-bold">360°</span>
              </div>
            </div>
            <span className="text-gray-400 text-xs">Auto-rotate</span>
          </div>

          {/* Battery */}
          <div className="bg-[#151929] rounded-2xl p-4 flex flex-col items-center">
            <p className="text-gray-400 text-xs font-medium mb-3 self-start">
              Device Battery
            </p>
            <div className="flex items-center gap-0.5 mt-1 mb-2">
              <div className="w-14 h-7 border-2 border-gray-500 rounded-md relative overflow-hidden">
                <div className="absolute inset-0 bg-[#22C55E]" />
              </div>
              <div className="w-1.5 h-3.5 bg-gray-500 rounded-r-sm" />
            </div>
            <span className="text-[#22C55E] text-sm font-bold">100%</span>
            <span className="text-gray-500 text-xs mt-1">Charging on Hold</span>
          </div>
        </div>

        {/* Drone View */}
        <div className="mb-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-white font-semibold text-base">
              Drone View
            </span>
          </div>
          <div className="bg-black rounded-2xl overflow-hidden">
            {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
            <video
              src="https://archive.org/download/PowerLinesPole/Power%20lines%20pole.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full aspect-video object-cover"
            />
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
