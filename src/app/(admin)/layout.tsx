import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Tripnest",
  description: "Created by Sajib",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="cupcake">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
