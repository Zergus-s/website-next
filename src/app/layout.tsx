import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PageAnimationWrapper from "@/components/page-animation-wrapper";
import Navbar from "@/components/navbar";

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
        className={`${inter.variable} bg-gradient-to-b from-blue-800 to-purple-900`}
      >
        <header className="h-24 top-0 left-0 right-0 z-30 fixed">
          <Navbar />
        </header>
        <PageAnimationWrapper>{children}</PageAnimationWrapper>
      </body>
    </html>
  );
}
