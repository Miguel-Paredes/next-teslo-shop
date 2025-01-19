import type { Metadata } from "next";

import "./globals.css";
import { inter, titleFont } from "@/config/font";


export const metadata: Metadata = {
  title: "Teslo | Shop",
  description: "Una tienda virtual de productos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
