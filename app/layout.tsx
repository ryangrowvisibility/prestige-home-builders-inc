import type { Metadata } from "next";
import { Archivo, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const head = Archivo({ variable: "--font-head", subsets: ["latin"], weight: ["700", "800"] });
const body = Source_Sans_3({ variable: "--font-body", subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://prestige-home-builders-inc.growlocalvisibility.com"),
  title: "Prestige Home Builders Inc. | Rain Gutters, Bathroom Remodels & Home Repairs in Palmdale",
  description:
    "Anthony Najera and crew install rain gutters and gutter guards, remodel bathrooms, build fences, repair roofs and eaves, and reglaze tubs across Palmdale and the Antelope Valley. 4.8 stars from 14 Google reviews. Call (661) 305-9304.",
  openGraph: {
    title: "Prestige Home Builders Inc. | Honest Home Improvements, No Upselling",
    description: "Gutters, bathroom remodels, fencing and roof repair in Palmdale and the Antelope Valley. Call Anthony at (661) 305-9304.",
    type: "website",
    locale: "en_US",
    images: ["/images/p7.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${head.variable} ${body.variable} antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
