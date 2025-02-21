import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ComX by Sunny",
  description: "ComX dashboard created by Sunny Ugwu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
