import type { Metadata } from "next";
import "@/app/ui/globals.css";
import { Lusitana } from 'next/font/google';

// 引入字体需要创建一个变量
const lusitana = Lusitana({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lusitana',
});

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
