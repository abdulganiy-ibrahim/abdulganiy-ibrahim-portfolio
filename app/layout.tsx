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
  title: "Abdulganiy Ibrahim | Full Stack Developer (React, Node.js)",
  description: "Full stack developer building backend systems with React, Next.js, TypeScript, and Node.js. Experienced in PostgreSQL, Supabase, and secure multi tenant architecture with Row Level Security.",
  openGraph: {
    title: "Abdulganiy Ibrahim | Full Stack Developer",
    description: "Building backend systems with React, Next.js, Node.js, and PostgreSQL. See projects with multi tenant architecture and Row Level Security.",
    url: "https://abdulganiy-ibrahim-dev.vercel.app",
    siteName: "Abdulganiy Ibrahim",
    images: [
      {
        url: "https://abdulganiy-ibrahim-dev.vercel.app/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdulganiy Ibrahim | Full Stack Developer",
    description: "Building backend systems with React, Next.js, Node.js, and PostgreSQL.",
    images: ["https://abdulganiy-ibrahim-dev.vercel.app/og-image.png"],
  },
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
