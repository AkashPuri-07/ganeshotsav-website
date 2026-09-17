import type { Metadata } from "next";
import { Yatra_One, Karla } from "next/font/google";
import Script from "next/script";
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

const SITE_URL = "https://belgaumbhagyavidhata.com";
const SITE_TITLE = "Belgaum cha Bhagyavidhata — Sarvajanik Shri Ganesh Utsav Mandal";
const SITE_DESCRIPTION =
  "Sarvajanik Shri Ganesh Utsav Mandal, Angol, Belgaum — celebrating Ganeshotsav since 1978. Daily updates, live aarti, gallery, and more for the 2026 festival (Sept 14–25).";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    google: "V3TLiT_XbAeHJgKmjmvo0Q-o2oIvLgz9_hoQfRfDs9U",
  },
  keywords: [
    "Bhagyavidhata",
    "Belgaum",
    "Belagavi",
    "Ganeshotsav",
    "Angol",
    "Sarvajanik Shri Ganesh Utsav Mandal",
    "Ganesh Chaturthi 2026",
  ],
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_TITLE,
    images: [
      {
        url: "/daily-updates/day-1/sthapana.jpg",
        width: 1200,
        height: 1600,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/daily-updates/day-1/sthapana.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${yatraOne.variable} ${karla.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NM8ZLLCHVJ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NM8ZLLCHVJ');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
