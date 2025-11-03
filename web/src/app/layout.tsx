import type { Metadata } from "next";
import {
  Crimson_Text,
  Geist,
  Geist_Mono,
  Inter,
} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const crimson = Crimson_Text({
  variable: "--font-crimson",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Свет и покой — Библия онлайн",
  description:
    "Тихое пространство для чтения Писания: мягкий свет, теплые цвета и вдохновляющие стихи.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${crimson.variable} ${inter.variable} antialiased bg-base text-body`}
      >
        {children}
      </body>
    </html>
  );
}
