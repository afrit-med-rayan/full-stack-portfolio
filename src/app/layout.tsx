import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mohamed Rayan Afrit — Full-Stack Developer & AI Engineer",
  description:
    "Master's student in Computer Science (AI & Data Science) at Université M'hamed Bougara de Boumerdès. Full-Stack Developer & AI Engineer. 3× Oracle Cloud Certified. Currently at Djezzy.",
  keywords: [
    "Mohamed Rayan Afrit",
    "Full-Stack Developer",
    "AI Engineer",
    "Data Science",
    "Oracle Cloud",
    "Algeria",
    "Algiers",
    "Djezzy",
  ],
  authors: [{ name: "Mohamed Rayan Afrit" }],
  openGraph: {
    title: "Mohamed Rayan Afrit — Full-Stack Developer & AI Engineer",
    description:
      "Master's student in Computer Science. Full-Stack Developer & AI Engineer. 3× Oracle Cloud Certified.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${inter.variable}`}>
      <body className="font-inter antialiased">{children}</body>
    </html>
  );
}
