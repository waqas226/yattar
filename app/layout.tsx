import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Airwave Podcast | Authory",
  description: "Airwave — Welcome to my podcast. Explore episodes, articles, and expert talks.",
  openGraph: {
    title: "Airwave Podcast",
    description: "Listen to neuroscience, psychology, and communication experts on Airwave.",
    url: "https://yourdomain.com",
    siteName: "Airwave",
    images: [
      {
        url: "/og-image.jpg", // optimized preview image
        width: 1200,
        height: 630,
        alt: "Airwave Podcast",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  );
}
