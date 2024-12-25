import {
    Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail, SidebarSeparator
} from '@/components/ui/sidebar';

import SideMenu from './sidebar/SideMenu';

export function AppSidebar() {
  return (
    <Sidebar variant="sidebar" collapsible="icon" className="font-sans">
      <SidebarHeader />
      <SidebarSeparator />
      <SidebarContent>
        <SideMenu />
      </SidebarContent>
      <SidebarSeparator />
      <SidebarFooter />
      <SidebarRail />
    </Sidebar>
  );
}
