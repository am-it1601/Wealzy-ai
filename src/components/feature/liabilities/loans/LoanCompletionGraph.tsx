"use client";

import { TrendingDown } from 'lucide-react';
import React from 'react';
import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
    ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent
} from '@/components/ui/chart';
import { Tooltip } from '@radix-ui/react-tooltip';

const LoanCompletionGraph = () => {
  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "hsl(var(--chart-1))",
    },
    mobile: {
      label: "Mobile",
      color: "hsl(var(--chart-2))",
    },
  } satisfies ChartConfig;

  const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
  ];

  return (
    <Card className="flex-1 w-full">
      <CardHeader>
        <CardTitle className="flex gap-2 items-center">
          <TrendingDown />
          <span>Track Your Loan Repayment Progress</span>
        </CardTitle>
        <CardDescription>
          Watch your debts shrink and your financial freedom grow—track every
          repayment with confidence!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="min-h-[100px] max-h-[240px] w-full mt-8">
          <AreaChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <Area
              type="natural"
              dataKey="desktop"
              stroke="var(--color-desktop)"
              fill="url(#fillDesktop)"
              fillOpacity={0.4}
              stackId="a"
            />
            <Area
              type="natural"
              dataKey="mobile"
              stroke="var(--color-mobile)"
              fill="url(#fillMobile)"
              fillOpacity={0.4}
              stackId="a"
            />
          </AreaChart>
          <Tooltip />
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default LoanCompletionGraph;
