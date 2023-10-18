import Footer from "@/components/footer";
import "./globals.css";
import type { Metadata } from "next";
import { REM } from "next/font/google";
import Navbar from "@/components/navbar";
import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";

const font = REM({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "809BOX - Productos esenciales y artesanales",
  description: "809BOX - Productos esenciales y artesanales",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ModalProvider />
        <ToastProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
