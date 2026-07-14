import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

import { AuthProvider } from "@/providers/AuthProvider";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ThemeProvider from "@/providers/ThemeProvider";
import LayoutWrapper from "@/components/layout/LayoutWrapper";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "DriveMart",
  description: "Discover, Compare & Drive Your Dream Car",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={manrope.variable}>
        <ThemeProvider>
          <AuthProvider>
            
            <LayoutWrapper>
              {children}
            </LayoutWrapper>

            <ToastContainer />

          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}