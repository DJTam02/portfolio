import type { Metadata } from "next";
import {
  Alegreya_Sans,
  Instrument_Serif,
  Rubik_Glitch,
} from "next/font/google";
import "./globals.css";

const alegreyaSans = Alegreya_Sans({
  subsets: ["latin"],
  weight: ["400", "300"],
  variable: "--font-alegreya-sans",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
});

const rubikGlitch = Rubik_Glitch({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-rubik-glitch",
});

export const metadata: Metadata = {
  title: "Rebecca Lai",
  description: "Personal website of Rebecca Lai, a UI/UX designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${alegreyaSans.variable} ${instrumentSerif.variable} ${rubikGlitch.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
