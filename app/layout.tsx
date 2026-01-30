import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const schaboFont = localFont({
  src: "../public/assets/fonts/SCHABO-XCondensed.otf",
  variable: "--font-schabo"
})

const thunderFont = localFont({
  src: "../public/assets/fonts/Thunder-VF.ttf",
  variable: "--font-thunder"
})

export const metadata: Metadata = {
  title: "KIDCANIBAL",
  description: "- BRUTAL. BEAUTIFUL.",
  openGraph: {
    title: "KIDCANIBAL",
    description: "- BRUTAL. BEAUTIFUL.",
    images: ['/kid.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${schaboFont.variable} ${thunderFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
