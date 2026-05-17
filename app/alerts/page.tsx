import Link from "next/link";
import BottomNav from "@/app/components/BottomNav";

const alerts = [
  {
    id: 1,
    severity: "red" as const,
    title: "High voltage detected",
    time: "2 min ago",
    desc: "Voltage exceeded safe threshold on motor 2.",
    read: false,
  },
  {
    id: 2,
    severity: "red" as const,
    title: "Signal lost",
    time: "15 min ago",
    desc: "Connection to drone interrupted briefly.",
    read: false,
  },
  {
    id: 3,
    severity: "yellow" as const,
    title: "Drone battery low",
    time: "32 min ago",
    desc: "Battery level dropped below 20%.",
    read: false,
  },
  {
    id: 4,
    severity: "yellow" as const,
    title: "Wind speed high",
    time: "1 hr ago",
    desc: "Wind conditions may affect flight stability.",
    read: true,
  },
  {
    id: 5,
    severity: "blue" as const,
    title: "Firmware update available",
    time: "3 hr ago",
    desc: "Version v2.2.0 is ready to install.",
    read: true,
  },
];

const severityStyles = {
  red: {
    bg: "bg-[#EF4444]/20",
    text: "text-[#EF4444]",
    dot: "bg-[#EF4444]",
  },
  yellow: {
    bg: "bg-yellow-500/20",
    text: "text-yellow-400",
    dot: "bg-yellow-400",
  },
  blue: {
    bg: "bg-blue-500/20",
    text: "text-blue-400",
    dot: "bg-blue-400",
  },
};

function WarningIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}

function InfoIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  );
}

export default function AlertsPage() {
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
          <h1 className="text-lg font-bold text-white">Alerts</h1>
        </div>
      </header>

      <div className="max-w-lg mx-auto px-4 pt-4 space-y-3">
        {alerts.map((alert) => {
          const styles = severityStyles[alert.severity];
          return (
            <div
              key={alert.id}
              className={`rounded-2xl p-4 transition-opacity ${
                alert.read
                  ? "bg-[#151929]/50 opacity-60"
                  : "bg-[#151929]"
              }`}
            >
              <div className="flex gap-3">
                <div
                  className={`w-9 h-9 rounded-full ${styles.bg} flex-shrink-0 flex items-center justify-center`}
                >
                  {alert.severity === "blue" ? (
                    <InfoIcon className={styles.text} />
                  ) : (
                    <WarningIcon className={styles.text} />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-0.5">
                    <p
                      className={`text-sm font-semibold leading-snug ${
                        alert.read ? "text-gray-300" : "text-white"
                      }`}
                    >
                      {alert.title}
                    </p>
                    <span className="text-gray-500 text-xs whitespace-nowrap flex-shrink-0">
                      {alert.time}
                    </span>
                  </div>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    {alert.desc}
                  </p>
                  {!alert.read && (
                    <span
                      className={`inline-block w-1.5 h-1.5 rounded-full mt-2 ${styles.dot}`}
                    />
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <BottomNav />
    </div>
  );
}
