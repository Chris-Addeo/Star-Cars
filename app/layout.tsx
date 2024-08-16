import type { Metadata } from "next";
import "./globals.css";
import { Footer, Navbar } from "@/components";

export const metadata: Metadata = {
  title: "Star Car Rental",
  description: "Discover the best cars in the world.",
  icons: {
    icon: '/sc_rental.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"relatiive"}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
