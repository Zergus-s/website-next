import React, { Suspense } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/app/components/navbar";
import Loading from "./loading";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Gaidashevskyi Anton - Portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} h-dvh w-dvh bg-gradient-to-b from-blue-800 to-purple-900 pb-30`}
      >
        <header className="h-24 top-0 left-0 right-0 z-30 fixed">
          <Navbar />
        </header>
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </body>
    </html>
  );
}
