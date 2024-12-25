import type { Metadata } from "next";

import AppNavbar from '@/components/shared/AppNavbar';
import { AppSidebar } from '@/components/shared/AppSidebar';
import { SidebarProvider } from '@/components/ui/sidebar';
import { METADATA } from '@/constants/metadata';

import AppFooter from '../../components/shared/AppFooter';

export const metadata: Metadata = {
  title: METADATA.DEFAULT.TITLE,
  description: METADATA.DEFAULT.DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="content-area font-sans">
        <AppNavbar />
        <div className="main-content">{children}</div>
        <AppFooter />
      </main>
    </SidebarProvider>
  );
}
