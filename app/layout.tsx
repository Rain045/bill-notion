import type { Metadata } from "next";
import "@/app/ui/globals.css";
import { lusitana } from "@/app/ui/fonts";

export const metadata: Metadata = {
  title: "Bill Notion",
  description: "Notion-Powered Bill Tracker",
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
