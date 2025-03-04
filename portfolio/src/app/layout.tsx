import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const font = Nunito_Sans({
  weight: '400',
  subsets: ['latin'],
})

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
      <body className={`${font.className} d-flex flex-column h-100`}>
        <Navbar />

        <main className="flex-shrink-0">
          {children}
        </main>

        <Footer/>
      </body>
    </html>
  );
}
