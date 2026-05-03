import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AutoFill Killer – Disable Autofill on Sensitive Forms",
  description: "Browser extension that prevents autofill on payment and sensitive forms. Protect your privacy with AutoFill Killer."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="18c35844-6753-4e63-bc23-6d4ba747c908"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
