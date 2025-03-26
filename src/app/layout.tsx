import type { Metadata } from "next";
import "./globals.scss";
import { Be_Vietnam_Pro } from "next/font/google";

const be = Be_Vietnam_Pro({ weight: "400", subsets: ["vietnamese"] });

export const metadata: Metadata = {
  title: "Phạm Thế Vũ 👌",
  description: "Phạm Thế Vũ 👌",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <body
        className={`${be.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
