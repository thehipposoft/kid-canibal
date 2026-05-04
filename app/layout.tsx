import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local"
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import { ViewTransitions } from "next-view-transitions";
import MobileMenu from "@/components/MobileMenu";
import GoogleAnalytics from "./GoogleAnalytics";

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

const providenceFont = localFont({
  src: "../public/assets/fonts/ProvidenceSansBold.ttf",
  variable: "--font-providence"
})

export const metadata: Metadata = {
  title: "KIDCANIBAL",
  description: "KID CANIBAL is a boutique film studio built on instinct and controlled chaos. We throw ourselves into the unpredictable — capturing moments that feel alive, raw and real. Spontaneity is not randomness. It's awareness, timing, and intention. We move fast, adapt, and shape what unfolds into images that stay. We don't follow formulas. We respond to what's in front of us — with sensitivity and purpose. Perfection is forgettable. Feeling is not.",
  openGraph: {
    title: "KIDCANIBAL",
    description: "KID CANIBAL is a boutique film studio built on instinct and controlled chaos. We throw ourselves into the unpredictable — capturing moments that feel alive, raw and real. Spontaneity is not randomness. It's awareness, timing, and intention. We move fast, adapt, and shape what unfolds into images that stay. We don't follow formulas. We respond to what's in front of us — with sensitivity and purpose. Perfection is forgettable. Feeling is not.",
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
      <head>
        <link rel="preload" as="video" href="https://res.cloudinary.com/hipposoft/video/upload/f_auto,q_auto,w_1280/v1771611156/reel_v1_2160p_np35yn.mp4" />
      </head>
      <body
        className={`${inter.variable} ${schaboFont.variable} ${thunderFont.variable} ${providenceFont.variable} antialiased`}
      >
        <ViewTransitions>
          <GoogleAnalytics />
          <CustomCursor />
          <MobileMenu />
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </ViewTransitions>
      </body>
    </html>
  );
}
