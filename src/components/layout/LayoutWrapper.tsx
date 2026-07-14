"use client";

import { usePathname } from "next/navigation";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/shared/Footer";

interface Props {
  children: React.ReactNode;
}

export default function LayoutWrapper({
  children,
}: Props) {
  const pathname = usePathname();

  const isDashboard = pathname.startsWith("/dashboard");

  return (
    <>
      {!isDashboard && <Navbar />}

      {children}

      {!isDashboard && <Footer />}
    </>
  );
}