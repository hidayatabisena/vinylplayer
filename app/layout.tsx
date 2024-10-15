import type { Metadata } from "next";
import { Inter, Poppins } from 'next/font/google'
import "./globals.css";

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Tomorrow and Today",
  description: "Beside you all the way",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
