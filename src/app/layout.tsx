"use static";
import type { Metadata } from "next";
import Image from 'next/image';

import config from "@/settings/config";

import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: config.site.title,
  description: config.site.description,
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  authors: [{
    name: "Bes-js",
    url: "https://github.com/Bes-js",
  }],
  keywords: ["Next", "React", "TypeScript", "TailwindCSS", "Portfolio", "Template", "Software", "Developer"],
  creator: "Luppux Development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="30x30" href="/apple-touch-icon.png" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100 dark:bg-black transition duration-1000 w-full h-full`}
      >
        {children}
      </body>
    </html>
  );
}
