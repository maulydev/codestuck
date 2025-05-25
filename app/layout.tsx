import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    template: "%s | CodeStuck",
    default: "CodeStuck - Software Development Support Services",
  },
  description:
    "Professional software development support services for web, mobile, and desktop applications. Get unstuck with CodeStuck.",
  keywords:
    "development, support, services, web, app, mobile, desktop, programming, coding, software, developer, consultant",
  authors: [{ name: "CodeStuck", url: "https://codestuck.vercel.app" }],
  creator: "CodeStuck",
  publisher: "CodeStuck",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  metadataBase: new URL("https://codestuck.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "CodeStuck - Software Development Support Services",
    description:
      "Professional software development support services for web, mobile, and desktop applications. Get unstuck with CodeStuck.",
    url: "https://codestuck.vercel.app",
    siteName: "CodeStuck",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // You'll need to create this image
        width: 1200,
        height: 630,
        alt: "CodeStuck - Software Development Support Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeStuck - Software Development Support Services",
    description:
      "Professional development support services for web, mobile, and desktop applications.",
    images: ["/twitter-image.jpg"], // You'll need to create this image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} bg-foreground`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
