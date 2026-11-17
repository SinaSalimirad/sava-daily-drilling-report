import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toast";

// Self-hosted variable font: one file covers every weight from 100 to 900. No italic on purpose.
const inter = localFont({
  variable: "--font-inter",
  display: "swap",
  src: "./fonts/Inter-Variable.ttf",
  weight: "100 900",
  style: "normal",
});

// Used only by the logo (components/common/logo.tsx), never for body text.
const pacifico = localFont({
  variable: "--font-pacifico",
  display: "swap",
  src: "./fonts/Pacifico-Regular.woff2",
  weight: "400",
  style: "normal",
});

export const metadata: Metadata = {
  title: "Sava Daily Drilling Report",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${pacifico.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Toaster>{children}</Toaster>
      </body>
    </html>
  );
}
