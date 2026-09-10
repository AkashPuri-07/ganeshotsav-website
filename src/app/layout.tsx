import type { Metadata } from "next";
import { Yatra_One, Karla } from "next/font/google";
import "./globals.css";

const yatraOne = Yatra_One({
  variable: "--font-yatra-one",
  weight: "400",
  subsets: ["latin"],
});

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sarvajanik Shri Ganesh Utsav Mandal",
  description:
    "Sarvajanik Shri Ganesh Utsav Mandal, Anagol, Belgaum — Ganeshotsav 2026",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${yatraOne.variable} ${karla.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
