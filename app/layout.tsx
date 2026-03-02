import type { Metadata } from "next";
import { Sora, Caveat } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Paul-Victor DELERUE — Ingénieur IA",
  description: "Portfolio de Paul-Victor DELERUE, Ingénieur IA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${sora.variable} ${caveat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
