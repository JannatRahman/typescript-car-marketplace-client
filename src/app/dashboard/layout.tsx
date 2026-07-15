"use client";

import ProtectedRoute from "@/components/auth/ProtectedRoute";
import DashboardSidebar from "./DashboardSidebar";
import DashboardTopbar from "./DashboardTopbar";

interface Props {
  children: React.ReactNode;
}

export default function DashboardLayout({
  children,
}: Props) {
  return (
    <ProtectedRoute>
      <div className="flex min-h-screen bg-[var(--background)]">
        {/* Sidebar */}

        <DashboardSidebar />

        {/* Main Content */}

        <div className="flex min-h-screen flex-1 flex-col">
          <DashboardTopbar />

          <main className="flex-1 p-8 lg:p-10">
            <div className="mx-auto w-full max-w-7xl">
              {children}
            </div>
          </main>
        </div>
      </div>
    </ProtectedRoute>
  );
}