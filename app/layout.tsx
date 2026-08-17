import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gyanayan — tech that gets out of your way",
  description:
    "Gyanayan builds simplified, cost-effective, to-the-point tech for real operational headaches. First up: GuruMitra, instant teacher substitutions for schools.",
  openGraph: {
    title: "Gyanayan — tech that gets out of your way",
    description:
      "Instant, correct teacher substitutions for schools. Built by Nayan Tiwari and Deepak Agarwal.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
