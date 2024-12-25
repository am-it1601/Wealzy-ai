import type { Metadata } from "next";
import "./globals.css";

import { Funnel_Sans, Ubuntu_Mono } from "next/font/google";

import { METADATA } from "../constants/metadata";
import { ThemeProvider } from "../providers/ThemeProvider";

const ubuntuMono = Ubuntu_Mono({
  variable: "--font-ubuntu-mono",
  subsets: ["latin"],
  weight: "400",
});

const ysabeau_ofc = Funnel_Sans({
  variable: "--font-yb_ofc",
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
});

export const metadata: Metadata = {
  title: METADATA.DEFAULT.TITLE,
  description: METADATA.DEFAULT.DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ysabeau_ofc.variable} ${ubuntuMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
