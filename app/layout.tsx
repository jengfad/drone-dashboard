import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Drone Dashboard",
  description: "Drone monitoring dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0D0F1E] text-white antialiased">{children}</body>
    </html>
  );
}
