import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CatInfo from "./components/CatInfo";
import CatSelector from "./components/CatSelector/CatSelector";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen grid grid-cols-1 grid-rows-2 gap-5 p-5 md:grid-cols-[25%_auto] md:grid-rows-1 bg-pink-200`}
      >
        <aside>
          <CatSelector />
          <CatInfo />
        </aside>
        <main className="">{children}</main>
      </body>
    </html>
  );
}
