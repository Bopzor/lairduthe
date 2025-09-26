import type { Metadata } from "next";
import localFont from "next/font/local";

import "../assets/css/reset.css";
import "../assets/css/styles.css";

const joseFernandez = localFont({
  src: "../assets/fonts/jose_fernandez/JoseFernandez.ttf",
  weight: "400",
  style: "normal",
});

export const metadata: Metadata = {
  applicationName: "lairduthe",
  title: "L'air du thé - Salon de thé havrais",
  description: "Site web L'Air du Thé Le Havre",
  keywords: [
    "thé",
    "tea",
    "thé blanc",
    "le havre",
    "thé noir",
    "thé vert",
    "thé bio",
    "salon de thé",
    "restaurant",
  ],
  icons: {
    icon: "/assets/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${joseFernandez.className}`}>
      <body>{children}</body>
    </html>
  );
}
