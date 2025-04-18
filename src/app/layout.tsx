// app/layout.tsx
import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import { ScrollProvider } from "./components/ScrollProvider";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";

const quicksand = Quicksand({
  variable: '--font-quick-sand',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "DevLoop",
  description: "Software Development Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={quicksand.className}>
      <body>
        <ScrollProvider>
          <TopBar />
          <Navbar />
          <main className="pt-24">{children}</main>
          <Footer />
        </ScrollProvider>
      </body>
    </html>
  );
}
