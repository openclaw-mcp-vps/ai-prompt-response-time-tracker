import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Prompt Response Time Tracker — Monitor AI Latency Across Providers",
  description: "Real-time dashboard tracking AI API response times, costs, and reliability metrics across OpenAI, Anthropic, and more."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="96294cad-997f-481b-abc0-f2c118e82311"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
