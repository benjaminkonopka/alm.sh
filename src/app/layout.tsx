import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alm.sh"),
  title: {
    default:
      "alm engineering — The engineering partner Europe's enterprises build with",
    template: "%s · alm engineering",
  },
  description:
    "We ship the software, AI and digital products that European enterprises like Roche, BMW and ProSiebenSat.1 run their business on. Independent. Munich-born.",
  openGraph: {
    type: "website",
    title:
      "alm engineering — The engineering partner Europe's enterprises build with",
    description:
      "We ship the software, AI and digital products that European enterprises like Roche, BMW and ProSiebenSat.1 run their business on.",
    images: ["/assets/og/og-home.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/assets/og/og-home.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${dmSans.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
