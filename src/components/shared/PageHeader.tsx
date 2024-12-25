import React from 'react';

import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Separator } from '../ui/separator';

const PageHeader = ({ title, subtitle }) => {
  return (
    <Card className="w-full bg-transparent shadow-none border-0 flex-shrink">
      <CardHeader className="p-0 mx-auto flex flex-col gap-3">
        <CardTitle className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-5 tracking-wide">
          {title}
        </CardTitle>
        <CardDescription className="font-medium text-md text-wrap">
          {subtitle}
        </CardDescription>
        <Separator decorative />
      </CardHeader>
    </Card>
  );
};

export default PageHeader;
