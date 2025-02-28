import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "@/app/Navbar";
import Footer from "@/app/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio Next.js",
  description: "This is a portfolio website built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-100">
      <body className={`${geistSans.variable} ${geistMono.variable} d-flex flex-column h-100`}>
        <Navbar />
        <main className="flex-shrink-0">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
