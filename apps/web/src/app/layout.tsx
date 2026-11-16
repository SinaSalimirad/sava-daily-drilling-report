import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toast";

// Self-hosted variable font: one file covers every weight from 200 to 1000. No italic on purpose.
const nunito = localFont({
  variable: "--font-nunito",
  display: "swap",
  src: "./fonts/Nunito-Variable.woff2",
  weight: "200 1000",
  style: "normal",
});

// Used only by the logo (components/logo.tsx), never for body text.
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
      className={`${nunito.variable} ${pacifico.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Toaster>{children}</Toaster>
      </body>
    </html>
  );
}
