import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title:
    "ClarifyThemes | Build, Customize, and Enhance WordPress Sites with Ease",
  description:
    "ClarifyThemes: The all-in-one ecosystem for modern WordPress websites.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.className}  antialiased`}>
        {children}

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
