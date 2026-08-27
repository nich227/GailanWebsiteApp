import type { Metadata } from "next";
import { Inter_Tight, JetBrains_Mono, DotGothic16 } from "next/font/google";
import "./globals.css";

/* Three faces, each with one job: a tight grotesque for headlines, monospace for
   anything small or technical, and a dot matrix for the wordmark and the section
   numbers, which is what gives the page its instrument-panel feel. */
const sans = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const dots = DotGothic16({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dots",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gailan — widgets on your desktop, written in TypeScript",
  description:
    "A macOS desktop widget host. Widgets are TypeScript modules, bundled by esbuild as you save them, glassed by macOS, and driven from Shortcuts or AppleScript.",
  icons: {icon: "/favicon.png", apple: "/gailan-icon.png"},
  openGraph: {
    title: "Gailan",
    description:
      "Widgets on your desktop, written in TypeScript. A fork of Übersicht, rebuilt.",
    type: "website",
  },
};

// The font variables go on html rather than body: globals.css composes its font
// stacks in :root, and a custom property that is not defined there makes the
// whole declaration invalid, which falls back to serif.
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable} ${dots.variable}`}>
      <body>
        <div className="grid-lines" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
