"use client";

import { useState } from "react";

import ProtectedRoute from "@/components/auth/ProtectedRoute";
import DashboardTopbar from "./DashboardTopbar";
import DashboardSidebar from "./DashboardSidebar";


interface Props {
  children: React.ReactNode;
}

export default function DashboardLayout({
  children,
}: Props) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <ProtectedRoute>
      <div className="flex min-h-screen bg-[var(--background)]">

        <DashboardSidebar
          
        />

        <div className="flex flex-1 flex-col">

          <DashboardTopbar
            
          />

          <main className="flex-1 p-6 lg:p-8">
            {children}
          </main>

        </div>

      </div>
    </ProtectedRoute>
  );
}