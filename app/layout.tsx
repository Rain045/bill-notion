import type { Metadata } from "next";
import "@/app/ui/globals.css";
import { lusitana } from "@/app/ui/fonts";
import type { Viewport } from 'next';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false, // 禁止用户缩放
  // 针对 iOS PWA 的额外设置
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  title: "Bill Notion",
  description: "Notion-Powered Bill Tracker",
  // 核心配置：
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Bill Notion",
  },
  icons: {
    apple: "/icons/icon-512x512.png", // 给 iPhone 用的图标
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lusitana.className} antialiased`} >
        {children}
      </body>
    </html>
  );
}
