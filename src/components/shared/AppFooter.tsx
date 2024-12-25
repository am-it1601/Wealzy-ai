import getConfig from 'next/config';
import React from 'react';

const { publicRuntimeConfig } = getConfig();
const AppFooter = () => {
  return (
    <div className="w-full sticky bottom-0 bg-sidebar shadow-inner max-h-[80px] h-full z-10 p-4 text-muted-foreground">
      <div className="flex justify-between items-center">
        <div>© 2024 Wealzy AI. All rights reserved.</div>
        <div className="flex-1 content-center text-center text-sm text-muted-foreground">
          Stay focused, stay empowered—your financial freedom is within reach!
        </div>
        <div>Version : {publicRuntimeConfig?.version}</div>
      </div>
    </div>
  );
};

export default AppFooter;
