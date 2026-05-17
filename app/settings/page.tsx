import Link from "next/link";
import BottomNav from "@/app/components/BottomNav";
import SettingsToggle from "@/app/components/SettingsToggle";
import ThemeToggle from "@/app/components/ThemeToggle";

function SettingsRow({ label, value, tappable = false }: { label: string; value: string; tappable?: boolean }) {
  if (tappable) {
    return (
      <button className="w-full flex items-center justify-between px-4 py-4 border-b border-black/5 dark:border-white/5 last:border-b-0 hover:bg-[var(--bg-hover)] transition-colors text-left">
        <span className="text-primary text-sm">{label}</span>
        <div className="flex items-center gap-1 text-[#22C55E] text-sm">
          <span>{value}</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </div>
      </button>
    );
  }
  return (
    <div className="flex items-center justify-between px-4 py-4 border-b border-black/5 dark:border-white/5 last:border-b-0">
      <span className="text-primary text-sm">{label}</span>
      <span className="text-secondary text-sm">{value}</span>
    </div>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <h2 className="text-xs font-semibold text-secondary uppercase tracking-widest px-4 md:px-0 pt-6 pb-2">
      {title}
    </h2>
  );
}

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-bg pb-24">
      <header className="sticky top-0 z-40 bg-bg backdrop-blur-sm border-b border-black/5 dark:border-white/5">
        <div className="max-w-3xl mx-auto flex items-center gap-3 px-4 py-3">
          <Link href="/" aria-label="Back to dashboard" className="p-2 -ml-2 text-secondary hover:text-primary transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
          </Link>
          <h1 className="text-lg font-bold text-primary">Settings</h1>
          <div className="ml-auto"><ThemeToggle /></div>
        </div>
      </header>

      <div className="max-w-3xl mx-auto md:px-4">
        <div className="md:grid md:grid-cols-2 md:gap-5">
          {/* Left: Account + Device */}
          <div>
            <SectionTitle title="Account" />
            <div className="bg-card rounded-2xl mx-4 md:mx-0 overflow-hidden">
              <SettingsRow label="Username" value="User" />
              <SettingsRow label="Email" value="user@yesha.app" />
            </div>

            <SectionTitle title="Device" />
            <div className="bg-card rounded-2xl mx-4 md:mx-0 overflow-hidden">
              <SettingsRow label="Device Name" value="Drone Unit #1" />
              <SettingsRow label="Firmware Version" value="v2.1.4" />
            </div>
          </div>

          {/* Right: Notifications + About */}
          <div>
            <SectionTitle title="Notifications" />
            <div className="bg-card rounded-2xl mx-4 md:mx-0 overflow-hidden">
              <SettingsToggle label="Push Notifications" defaultOn={true} />
              <SettingsToggle label="Alert Sound" defaultOn={true} />
            </div>

            <SectionTitle title="About" />
            <div className="bg-card rounded-2xl mx-4 md:mx-0 overflow-hidden">
              <SettingsRow label="App Version" value="1.0.0" />
              <SettingsRow label="Privacy Policy" value="View" tappable />
              <SettingsRow label="Terms of Service" value="View" tappable />
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
