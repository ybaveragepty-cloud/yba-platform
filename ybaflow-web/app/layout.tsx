import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YBAFlow",
  description: "Automation systems for real operations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}