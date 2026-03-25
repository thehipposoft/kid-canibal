import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local"
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import { ViewTransitions } from "next-view-transitions";
import MobileMenu from "@/components/MobileMenu";

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
      <head>
        <link rel="preload" as="video" href="https://res.cloudinary.com/hipposoft/video/upload/f_auto,q_auto,w_1280/v1771611156/reel_v1_2160p_np35yn.mp4" />
      </head>
      <body
        className={`${inter.variable} ${schaboFont.variable} ${thunderFont.variable} ${providenceFont.variable} antialiased`}
      >
        <ViewTransitions>
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
