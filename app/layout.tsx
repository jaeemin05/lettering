// 전역 폰트·메타데이터를 설정하고 Header/Footer로 페이지를 감싸는 루트 레이아웃
import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "LetteRing — 마음을 반지에 새기다",
  description:
    "당신의 마음을 반지에 새기는 곳, LetteRing. 편지처럼 따뜻한 이야기를 담은 감성 주얼리.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${playfair.variable} h-full antialiased`}
      // 브라우저 확장(HWP 등)이 <html>에 속성을 주입해 생기는 하이드레이션 경고 억제
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col bg-warm-beige text-brown">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
