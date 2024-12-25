import React from 'react';

import { SidebarTrigger } from '../ui/sidebar';

const AppNavbar = () => {
  return (
    <div className="flex justify-between w-full bg-sidebar z-10 sticky top-0 p-4 shadow-md">
      <SidebarTrigger className="w-20" />
    </div>
  );
};

export default AppNavbar;
