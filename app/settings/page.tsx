import Link from "next/link";
import BottomNav from "@/app/components/BottomNav";
import SettingsToggle from "@/app/components/SettingsToggle";

function SettingsRow({
  label,
  value,
  tappable = false,
}: {
  label: string;
  value: string;
  tappable?: boolean;
}) {
  if (tappable) {
    return (
      <button className="w-full flex items-center justify-between px-4 py-4 border-b border-white/5 last:border-b-0 hover:bg-white/5 transition-colors text-left">
        <span className="text-white text-sm">{label}</span>
        <div className="flex items-center gap-1 text-[#22C55E] text-sm">
          <span>{value}</span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </div>
      </button>
    );
  }
  return (
    <div className="flex items-center justify-between px-4 py-4 border-b border-white/5 last:border-b-0">
      <span className="text-white text-sm">{label}</span>
      <span className="text-gray-400 text-sm">{value}</span>
    </div>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-widest px-4 pt-6 pb-2">
      {title}
    </h2>
  );
}

export default function SettingsPage() {
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
          <h1 className="text-lg font-bold text-white">Settings</h1>
        </div>
      </header>

      <div className="max-w-lg mx-auto">
        {/* Account */}
        <SectionTitle title="Account" />
        <div className="bg-[#151929] rounded-2xl mx-4 overflow-hidden">
          <SettingsRow label="Username" value="User" />
          <SettingsRow label="Email" value="user@yesha.app" />
        </div>

        {/* Notifications */}
        <SectionTitle title="Notifications" />
        <div className="bg-[#151929] rounded-2xl mx-4 overflow-hidden">
          <SettingsToggle label="Push Notifications" defaultOn={true} />
          <SettingsToggle label="Alert Sound" defaultOn={true} />
        </div>

        {/* Device */}
        <SectionTitle title="Device" />
        <div className="bg-[#151929] rounded-2xl mx-4 overflow-hidden">
          <SettingsRow label="Device Name" value="Drone Unit #1" />
          <SettingsRow label="Firmware Version" value="v2.1.4" />
        </div>

        {/* About */}
        <SectionTitle title="About" />
        <div className="bg-[#151929] rounded-2xl mx-4 overflow-hidden">
          <SettingsRow label="App Version" value="1.0.0" />
          <SettingsRow label="Privacy Policy" value="View" tappable />
          <SettingsRow label="Terms of Service" value="View" tappable />
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
