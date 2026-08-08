import type { Metadata } from "next";
import { Inter, Space_Grotesk, } from "next/font/google";
import "./globals.css";
import { Toaster } from 'sonner';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abdulganiy Ibrahim | Software Developer",
  description: "Software developer building thoughtful, scalable web applications with a focus on clean architecture, continuous learning, and solving real problems.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full w-full antialiased`}
    >
      <body className="min-h-screen overflow-x-hidden">
        {children}
        <Toaster
          richColors
          expand
          position="top-right"
        />
      </body>
    </html>
  );
}
