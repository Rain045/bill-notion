import type { Metadata } from "next";
import "@/app/ui/globals.css";
import { lusitana } from "@/app/ui/fonts";

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
