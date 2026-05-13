import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gspot-casinos-pink.vercel.app"),
  title: {
    default: "The G Spot Gaming Community | Best Sweepstakes Casino Bonuses 2025",
    template: "%s | The G Spot Gaming Community",
  },
  description:
    "Discover 80+ sweepstakes casino bonuses, free sweeps coins, and daily rewards. Claim exclusive sign-up bonuses at Chumba, Stake.us, Pulsz, McLuck, WOW Vegas & more!",
  keywords: [
    "sweepstakes casino",
    "free sweeps coins",
    "sweepstakes casino bonuses",
    "no deposit casino bonus",
    "social casino",
    "Chumba Casino bonus",
    "Stake.us bonus",
    "Pulsz bonus",
    "WOW Vegas",
    "McLuck",
    "best sweepstakes casinos 2025",
  ],
  authors: [{ name: "The G Spot Gaming Community" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gspot-casinos-pink.vercel.app",
    siteName: "The G Spot Gaming Community",
    title: "The G Spot Gaming Community | Best Sweepstakes Casino Bonuses",
    description:
      "80+ Top sweepstakes casinos with exclusive sign-up bonuses, free sweeps coins, and daily rewards.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "The G Spot Gaming Community",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The G Spot Gaming Community",
    description: "80+ sweepstakes casinos with exclusive bonuses & daily rewards!",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
  },
  verification: {
    google: "XAmKgFjjng3wWG2CQecG8dQzvsbV2MhzgW416E2cSPQ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}