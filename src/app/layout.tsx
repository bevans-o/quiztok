import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MobileFrame from "./components/layout/MobileFrame";

const typeface = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "QuizTok",
  description: "TikTok TechJam 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={typeface.className}>
        <MobileFrame>{children}</MobileFrame>
      </body>
    </html>
  );
}
